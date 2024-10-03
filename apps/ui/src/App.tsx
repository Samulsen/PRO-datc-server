import { Button, useMantineColorScheme } from "@mantine/core";

export default function App() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <div>
      <Button
        onClick={() => {
          setColorScheme("dark");
        }}
      >
        Dark
      </Button>
      <Button
        onClick={() => {
          setColorScheme("light");
        }}
      >
        Light
      </Button>
    </div>
  );
}
