import type { JobEntryProps } from "./job-entry";
import { JobEntry } from "./job-entry";
import { TypographyH3 } from "./ui/typography";

type EmploymentProps = {
  title: string;
  jobs: JobEntryProps[];
};

export function Employment({ title, jobs }: EmploymentProps) {
  return (
    <>
      <TypographyH3>{title}</TypographyH3>
      {jobs.map((job, i) => (
        <JobEntry {...job} key={`job-${i}`} />
      ))}
    </>
  );
}
