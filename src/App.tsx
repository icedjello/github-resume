// import { ModeToggle } from "./components/theme/mode-toggle";
import {
  TypographyColumnList,
  TypographyListItem,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
} from "./components/ui/typography";
import { ThemeProvider } from "@/components/theme/theme-provider";
import {
  personalDetails,
  skillsAndTech,
  employmentHistory,
  education,
} from "./contents.json";
import { JobEntry } from "./components/job-entry";
import { EducationEntry } from "./components/education-entry";
import { PersonalDetails } from "./components/personal-details";
import { SkillsAndTech } from "./components/skills-and-tech";

function App() {
  document.title = `${personalDetails.preferredName} ${personalDetails.lastName}`;

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* <ModeToggle /> <- make this look nice */}
      <PersonalDetails {...personalDetails} />
      <SkillsAndTech {...skillsAndTech} />
      <TypographyH3>{employmentHistory.title}</TypographyH3>
      {employmentHistory.jobs.map((job, i) => (
        <JobEntry {...job} key={`job-${i}`} />
      ))}
      <TypographyH3>{education.title}</TypographyH3>
      {education.values.map((ed, i) => (
        <EducationEntry {...ed} key={`edu-${i}`} />
      ))}
    </ThemeProvider>
  );
}

export default App;
