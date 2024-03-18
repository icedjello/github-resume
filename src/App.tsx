// import { ModeToggle } from "./components/theme/mode-toggle";
import { ThemeProvider } from "@/components/theme/theme-provider";
import {
  personalDetails,
  skillsAndTech,
  employmentHistory,
  education,
} from "./contents.json";
import { PersonalDetails } from "./components/personal-details";
import { SkillsAndTech } from "./components/skills-and-tech";
import { Employment } from "./components/employment";
import { Education } from "./components/education";

function App() {
  const { preferredName, lastName } = personalDetails;
  document.title = `${preferredName} ${lastName}`;

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* <ModeToggle /> <- make this look nice */}
      <PersonalDetails {...personalDetails} />
      <SkillsAndTech {...skillsAndTech} />
      <Employment {...employmentHistory} />
      <Education {...education} />
    </ThemeProvider>
  );
}

export default App;
