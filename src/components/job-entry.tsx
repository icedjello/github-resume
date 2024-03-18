import { TypographyH4, TypographyP } from "./ui/typography";
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
      <div className="mb-4 ml-4 mt-0">
        {duties.map((d, i) => (
          <TypographyP key={`${job}-d-${i}`}>{d}</TypographyP>
        ))}
      </div>
    </>
  );
}
