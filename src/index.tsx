```tsx
import ForgeUI, { render, useProductContext, Fragment, Text, IssuePanel } from '@forge/ui';

const App = () => {
  const context = useProductContext();

  return (
    <Fragment>
      <Text>Hello, this is a helpful Forge application!</Text>
      <Text>Viewing issue: {context.platformContext.issueKey}</Text>
    </Fragment>
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
```