import { TypographyH4 } from "./ui/typography";
import { formatDate } from "./utils";

export type JobEntryProps = {
  job: string;
  company: string;
  startDate: string;
  endDate: string;
  duties: string[];
};

export function JobEntry({
  job,
  company,
  startDate,
  endDate,
  duties,
}: JobEntryProps) {
  const legibleStartDate = formatDate(startDate, true);
  const legibleEndDate = formatDate(endDate, true);
  return (
    <>
      <TypographyH4>
        {job}, {company}, {legibleStartDate} - {legibleEndDate}
      </TypographyH4>
      <ul className="ml-6 list-disc [&>li]:mt-2">
        {duties.map((d, i) => (
          <li key={`${job}-d-${i}`}>{d}</li>
        ))}
      </ul>
    </>
  );
}
