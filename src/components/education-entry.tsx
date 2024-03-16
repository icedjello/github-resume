import { TypographyH4, TypographyP } from "./ui/typography";
import { formatDate } from "./utils";

type EducationEntryProps = {
  degreeType: string;
  subject: string;
  institution: string;
  grade: string;
  startDate: string;
  endDate: string;
  comment: string;
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
  return (
    <>
      <TypographyH4>
        {degreeType} {subject}, {institution}, {legibleStartDate} -{" "}
        {legibleEndDate}
      </TypographyH4>
      <TypographyP>
        Grade: {grade}, modules include: {modules.join(", ")}. {comment}
      </TypographyP>
    </>
  );
}
