import {
  TypographyH3,
  TypographyColumnList,
  TypographyListItem,
} from "./ui/typography";

type skillsAndTechProps = {
  title: string;
  values: string[];
};

export function SkillsAndTech({ title, values }: skillsAndTechProps) {
  return (
    <>
      <TypographyH3>{title}</TypographyH3>
      <TypographyColumnList>
        {values.map((text, i) => (
          <TypographyListItem text={text} key={`skill-${i}`} />
        ))}
      </TypographyColumnList>
    </>
  );
}
