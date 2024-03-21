type skillsAndTechProps = {
  title: string;
  values: string[];
};

export function SkillsAndTech({ title, values }: skillsAndTechProps) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {values.map((text, i) => (
          <li key={`skill-${i}`}>{text}</li>
        ))}
      </ul>
    </>
  );
}
