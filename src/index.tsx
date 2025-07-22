import ForgeUI, { render, IssuePanel, Text, Fragment, useState, Button } from '@forge/ui';
import { addTwoNumbers } from './utils/calculator';

const App = () => {
  const [result, setResult] = useState<number>(0);

  const handleAddition = async () => {
    // Example numbers to add, in a real scenario these could be input by the user or fetched from issue fields
    const number1 = 5;
    const number2 = 7;
    const sum = addTwoNumbers(number1, number2);
    setResult(sum);
  };

  return (
    <IssuePanel>
      <Fragment>
        <Text>A helpful Forge application</Text>
        <Button text="Add 5 + 7" onClick={handleAddition} />
        {result !== 0 && (
          <Text>The result is {result}</Text>
        )}
      </Fragment>
    </IssuePanel>
  );
};

export const run = render(<App />);

### src/utils/calculator.ts