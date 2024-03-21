import { formatDate } from "./utils";

export type EducationEntryProps = {
  degreeType: string;
  subject: string;
  institution: string;
  grade?: string;
  startDate: string;
  endDate: string;
  comment?: string;
  modules: string[];
};

export function EducationEntry({
  degreeType,
  subject,
  institution,
  grade,
  startDate,
  endDate,
  comment,
  modules,
}: EducationEntryProps) {
  const legibleStartDate = formatDate(startDate);
  const legibleEndDate = formatDate(endDate);

  const gradeAndModules =
    (grade ? `Grade: ${grade}, ` : "") +
    `${grade ? "m" : "M"}odules include: ${modules.join(", ")}.`;

  return (
    <>
      <h4>
        {degreeType} {subject}, {institution}, {legibleStartDate} -{" "}
        {legibleEndDate}
      </h4>

      <div className="mb-4 ml-4 mt-0">
        <p>
          {gradeAndModules} {comment && <br />} {comment}
        </p>
      </div>
    </>
  );
}
