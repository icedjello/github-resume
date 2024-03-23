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
      <h4>
        {job}, {company}, {legibleStartDate} - {legibleEndDate}
      </h4>
      <div className="ml-2 mt-0 md:ml-4">
        {duties.map((d, i) => (
          <p key={`${job}-d-${i}`}>{d}</p>
        ))}
      </div>
    </>
  );
}
