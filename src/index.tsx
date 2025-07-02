import ForgeUI, { render, IssuePanel, Text, Strong } from '@forge/ui';

const App = () => {
  return (
    <IssuePanel>
      <Strong>test3</Strong>
      <Text>Hello from your Forge app!</Text>
    </IssuePanel>
  );
};

export const run = render(<App />);