import type { EducationEntryProps } from "./education-entry";
import { EducationEntry } from "./education-entry";

type EducationProps = {
  title: string;
  values: EducationEntryProps[];
};
export function Education({ title, values }: EducationProps) {
  return (
    <>
      <h3>{title}</h3>
      {values.map((ed, i) => (
        <EducationEntry {...ed} key={`edu-${i}`} />
      ))}
    </>
  );
}
