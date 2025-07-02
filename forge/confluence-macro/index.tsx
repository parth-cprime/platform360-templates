import ForgeUI, { 
  render, 
  Macro, 
  Text, 
  Strong, 
  Fragment, 
  useState, 
  useEffect,
  useConfig,
  Heading,
  Table,
  Head,
  Cell,
  Row,
  SectionMessage,
  Badge,
  Link,
  Button
} from '@forge/ui';
import api, { route, storage } from '@forge/api';

const App = () => {
  const config = useConfig();
  const [pageData, setPageData] = useState(null);
  const [spaceData, setSpaceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usageCount, setUsageCount] = useState(0);

  // Get configuration parameters
  const title = config?.title || '{{appName}}';
  const showMetadata = config?.showMetadata !== false;

  useEffect(async () => {
    try {
      // Get current page data following Atlassian best practices
      const pageResponse = await api.asUser().requestConfluence(
        route`/wiki/rest/api/content/${context.extension.content.id}?expand=space,version,ancestors,children.page,descendants.comment,history,restrictions.read.restrictions.user,metadata.labels`
      );
      
      if (!pageResponse.ok) {
        throw new Error(`HTTP ${pageResponse.status}: ${pageResponse.statusText}`);
      }
      
      const pageData = await pageResponse.json();
      setPageData(pageData);

      // Get space data
      if (pageData.space) {
        const spaceResponse = await api.asUser().requestConfluence(
          route`/wiki/rest/api/space/${pageData.space.key}?expand=description,homepage,metadata.labels`
        );
        
        if (spaceResponse.ok) {
          const spaceData = await spaceResponse.json();
          setSpaceData(spaceData);
        }
      }

      // Track usage count
      const storageKey = `usage-count-${pageData.id}`;
      const currentCount = await storage.get(storageKey) || 0;
      const newCount = currentCount + 1;
      await storage.set(storageKey, newCount);
      setUsageCount(newCount);

    } catch (err) {
      console.error('Error fetching page data:', err);
      setError(err.message || 'Failed to load page data');
    } finally {
      setLoading(false);
    }
  }, []);

  const refreshData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.asUser().requestConfluence(
        route`/wiki/rest/api/content/${context.extension.content.id}?expand=space,version,ancestors,children.page`
      );
      const data = await response.json();
      setPageData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Macro>
        <SectionMessage appearance="information">
          <Text>Loading {title}...</Text>
        </SectionMessage>
      </Macro>
    );
  }

  if (error) {
    return (
      <Macro>
        <SectionMessage appearance="error">
          <Text>Error: {error}</Text>
          <Button text="Retry" onClick={refreshData} />
        </SectionMessage>
      </Macro>
    );
  }

  return (
    <Macro>
      <Fragment>
        <Heading size="medium">🚀 {title}</Heading>
        <Text>{{description}}</Text>
        
        {pageData && showMetadata && (
          <Fragment>
            <Table>
              <Head>
                <Cell>
                  <Text>Property</Text>
                </Cell>
                <Cell>
                  <Text>Value</Text>
                </Cell>
              </Head>
              <Row>
                <Cell>
                  <Text><Strong>Page Title</Strong></Text>
                </Cell>
                <Cell>
                  <Text>{pageData.title}</Text>
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <Text><Strong>Space</Strong></Text>
                </Cell>
                <Cell>
                  <Text>{spaceData?.name || pageData.space?.name || 'Unknown'}</Text>
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <Text><Strong>Page ID</Strong></Text>
                </Cell>
                <Cell>
                  <Text>{pageData.id}</Text>
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <Text><Strong>Version</Strong></Text>
                </Cell>
                <Cell>
                  <Text>{pageData.version.number}</Text>
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <Text><Strong>Last Modified</Strong></Text>
                </Cell>
                <Cell>
                  <Text>{new Date(pageData.version.when).toLocaleDateString()}</Text>
                </Cell>
              </Row>
              <Row>
                <Cell>
                  <Text><Strong>Modified By</Strong></Text>
                </Cell>
                <Cell>
                  <Text>{pageData.version.by?.displayName || 'Unknown'}</Text>
                </Cell>
              </Row>
            </Table>
            
            <Badge text={`Macro Used: ${usageCount} times`} appearance="added" />
          </Fragment>
        )}
        
        <Button text="Refresh Data" onClick={refreshData} />
        <Text>✨ Generated by Platform360 Forge Generator</Text>
      </Fragment>
    </Macro>
  );
};

export const run = render(<App />);
