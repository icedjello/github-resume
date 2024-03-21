import type { JobEntryProps } from "./job-entry";
import { JobEntry } from "./job-entry";

type EmploymentProps = {
  title: string;
  jobs: JobEntryProps[];
};

export function Employment({ title, jobs }: EmploymentProps) {
  return (
    <>
      <h3>{title}</h3>
      {jobs.map((job, i) => (
        <JobEntry {...job} key={`job-${i}`} />
      ))}
    </>
  );
}
