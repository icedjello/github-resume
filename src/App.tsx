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
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* <ModeToggle /> <- make this look nice */}
      <PersonalDetails {...personalDetails} />
      <SkillsAndTech {...skillsAndTech} />
      <Employment {...employmentHistory} />
      <Education {...education} />
      <hr />
      <p className="text-center text-xs text-secondary">
        © 2024 Bamdad Fard. Feel free to use this. you can find the repo{" "}
        <a href="https://github.com/icedjello/github-resume">here</a>. Be cool,
        okay?
      </p>
    </ThemeProvider>
  );
}

export default App;
