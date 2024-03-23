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

  const formattedModules = modules.join(", ");
  const withGrade = `Grade: ${grade}, modules include: ${formattedModules}.`;
  const sansGrade = `Modules include: ${formattedModules}.`;

  return (
    <>
      <h4>
        {degreeType} {subject}, {institution}, {legibleStartDate} -{" "}
        {legibleEndDate}
      </h4>
      <div className="ml-2 mt-0 md:ml-4">
        <p>
          {grade ? withGrade : sansGrade}
          {comment && (
            <>
              <br />
              {comment}
            </>
          )}
        </p>
      </div>
    </>
  );
}
