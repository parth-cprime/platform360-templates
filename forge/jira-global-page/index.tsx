import ForgeUI, { 
  render, 
  GlobalPage, 
  Text, 
  Strong, 
  Fragment, 
  useState, 
  useEffect,
  Heading,
  Table,
  Head,
  Cell,
  Row,
  Button,
  SectionMessage,
  Badge,
  StatusLozenge,
  Link,
  Select,
  Option
} from '@forge/ui';
import api, { route, storage } from '@forge/api';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState(null);

  useEffect(async () => {
    await loadProjects();
  }, []);

  useEffect(async () => {
    if (selectedProject) {
      await loadProjectIssues(selectedProject.key);
    }
  }, [selectedProject]);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const response = await api.asUser().requestJira(
        route`/rest/api/3/project/search?expand=description,lead,issueTypes,url,projectKeys`
      );
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setProjects(data.values || []);
      
      // Auto-select first project
      if (data.values && data.values.length > 0) {
        setSelectedProject(data.values[0]);
      }
      
    } catch (err) {
      console.error('Error loading projects:', err);
      setError(err.message || 'Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const loadProjectIssues = async (projectKey) => {
    try {
      setLoading(true);
      
      // Get recent issues
      const issuesResponse = await api.asUser().requestJira(
        route`/rest/api/3/search?jql=project=${projectKey} ORDER BY updated DESC&maxResults=10&expand=names,schema`
      );
      
      if (issuesResponse.ok) {
        const issuesData = await issuesResponse.json();
        setIssues(issuesData.issues || []);
      }

      // Get project statistics
      const statsResponse = await api.asUser().requestJira(
        route`/rest/api/3/search?jql=project=${projectKey}&maxResults=0&facet=true`
      );
      
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats({
          totalIssues: statsData.total,
          project: projectKey
        });
      }

      // Store last viewed project
      await storage.set('lastViewedProject', projectKey);
      
    } catch (err) {
      console.error('Error loading project issues:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onProjectChange = (value) => {
    const project = projects.find(p => p.key === value);
    setSelectedProject(project);
  };

  const refreshData = async () => {
    setError(null);
    if (selectedProject) {
      await loadProjectIssues(selectedProject.key);
    } else {
      await loadProjects();
    }
  };

  if (loading && projects.length === 0) {
    return (
      <GlobalPage>
        <SectionMessage appearance="information">
          <Text>Loading {{appName}}...</Text>
        </SectionMessage>
      </GlobalPage>
    );
  }

  if (error) {
    return (
      <GlobalPage>
        <SectionMessage appearance="error">
          <Text>Error: {error}</Text>
          <Button text="Retry" onClick={refreshData} />
        </SectionMessage>
      </GlobalPage>
    );
  }

  return (
    <GlobalPage>
      <Fragment>
        <Heading size="large">📊 {{appName}}</Heading>
        <Text>{{description}}</Text>
        
        {projects.length > 0 && (
          <Fragment>
            <Text><Strong>Select Project:</Strong></Text>
            <Select 
              label="Project"
              value={selectedProject?.key}
              onChange={onProjectChange}
            >
              {projects.map(project => (
                <Option 
                  key={project.key} 
                  label={`${project.name} (${project.key})`} 
                  value={project.key} 
                />
              ))}
            </Select>
          </Fragment>
        )}

        {selectedProject && (
          <Fragment>
            <Heading size="medium">Project: {selectedProject.name}</Heading>
            <Text>{selectedProject.description || 'No description available'}</Text>
            
            {stats && (
              <Badge text={`Total Issues: ${stats.totalIssues}`} appearance="primary" />
            )}
          </Fragment>
        )}

        {issues.length > 0 && (
          <Fragment>
            <Heading size="medium">Recent Issues</Heading>
            <Table>
              <Head>
                <Cell><Text>Key</Text></Cell>
                <Cell><Text>Summary</Text></Cell>
                <Cell><Text>Status</Text></Cell>
                <Cell><Text>Priority</Text></Cell>
                <Cell><Text>Assignee</Text></Cell>
                <Cell><Text>Updated</Text></Cell>
              </Head>
              {issues.map(issue => (
                <Row key={issue.key}>
                  <Cell>
                    <Link href={`/browse/${issue.key}`}>
                      <Text>{issue.key}</Text>
                    </Link>
                  </Cell>
                  <Cell>
                    <Text>{issue.fields.summary}</Text>
                  </Cell>
                  <Cell>
                    <StatusLozenge 
                      text={issue.fields.status.name}
                      appearance={
                        issue.fields.status.statusCategory.colorName === 'green' ? 'success' : 
                        issue.fields.status.statusCategory.colorName === 'yellow' ? 'inprogress' : 'default'
                      }
                    />
                  </Cell>
                  <Cell>
                    <Text>{issue.fields.priority?.name || 'None'}</Text>
                  </Cell>
                  <Cell>
                    <Text>{issue.fields.assignee?.displayName || 'Unassigned'}</Text>
                  </Cell>
                  <Cell>
                    <Text>{new Date(issue.fields.updated).toLocaleDateString()}</Text>
                  </Cell>
                </Row>
              ))}
            </Table>
          </Fragment>
        )}

        <Button text="Refresh Data" onClick={refreshData} />
        <Text>✨ Generated by Platform360 Forge Generator</Text>
      </Fragment>
    </GlobalPage>
  );
};

export const run = render(<App />);
