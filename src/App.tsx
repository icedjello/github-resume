import { ModeToggle } from "./components/theme/mode-toggle";
import { Card } from "./components/ui/card";
import { ThemeProvider } from "@/components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ModeToggle />
      <Card>
        <h1>Hello world!</h1>
      </Card>
    </ThemeProvider>
  );
}

export default App;
