import { ModeToggle } from "./components/theme/mode-toggle";
import { TypographyH1 } from "./components/typography/typography-h1";
import { Card } from "./components/ui/card";
import { ThemeProvider } from "@/components/theme/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ModeToggle />
      <Card>
        <TypographyH1>Hello bitch</TypographyH1>
      </Card>
    </ThemeProvider>
  );
}

export default App;
