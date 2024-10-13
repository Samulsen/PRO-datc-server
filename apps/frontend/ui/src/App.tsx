import { ThemeProvider } from "@lib-theme";
import { Button } from "@lib-components";

export default function App() {
  return (
    <ThemeProvider>
      <Button appearance="primary"> Hello My UI APP </Button>
    </ThemeProvider>
  );
}

type Props = {
  someString?: string;
};

function MyComponent({ someString = "" }: Props) {
  return <div>{someString}</div>;
}
