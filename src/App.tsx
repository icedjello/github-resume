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

function App() {
  document.title = `${personalDetails.preferredName} ${personalDetails.lastName}`;

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* <ModeToggle /> */}
      <TypographyH1>
        {personalDetails.firstName} {personalDetails.lastName}
      </TypographyH1>
      <TypographyH2>
        {personalDetails.email} - {personalDetails.homeTown},{" "}
        {personalDetails.country}
      </TypographyH2>
      <TypographyP>{personalDetails.aboutMe}</TypographyP>
      <TypographyH3>{skillsAndTech.title}</TypographyH3>
      <TypographyColumnList>
        {skillsAndTech.values.map((text, i) => (
          <TypographyListItem text={text} key={`skill-${i}`} />
        ))}
      </TypographyColumnList>
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
