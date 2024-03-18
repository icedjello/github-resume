import type { EducationEntryProps } from "./education-entry";
import { EducationEntry } from "./education-entry";
import { TypographyH3 } from "./ui/typography";

type EducationProps = {
  title: string;
  values: EducationEntryProps[];
};
export function Education({ title, values }: EducationProps) {
  return (
    <>
      <TypographyH3>{title}</TypographyH3>
      {values.map((ed, i) => (
        <EducationEntry {...ed} key={`edu-${i}`} />
      ))}
    </>
  );
}
