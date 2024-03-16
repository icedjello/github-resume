import { TypographyH4 } from "./ui/typography";
import { formatDate } from "./utils";

type JobEntryProps = {
  job: string;
  startDate: string;
  endDate: string;
  duties: string[];
};

export function JobEntry({ job, startDate, endDate, duties }: JobEntryProps) {
  const legibleStartDate = formatDate(startDate, true);
  const legibleEndDate = formatDate(endDate, true);
  return (
    <>
      <TypographyH4>
        {job}, {legibleStartDate} - {legibleEndDate}
      </TypographyH4>
      <ul className="ml-6 list-disc [&>li]:mt-2">
        {duties.map((d, i) => (
          <li key={`${job}-d-${i}`}>{d}</li>
        ))}
      </ul>
    </>
  );
}
