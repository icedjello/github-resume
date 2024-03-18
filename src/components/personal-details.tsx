import { TypographyH1, TypographyH2, TypographyP } from "./ui/typography";

type PersonalDetailsProps = {
  firstName: string;
  lastName: string;
  email: string;
  homeTown: string;
  country: string;
  aboutMe: string;
};

export function PersonalDetails({
  firstName,
  lastName,
  email,
  homeTown,
  country,
  aboutMe,
}: PersonalDetailsProps) {
  return (
    <>
      <TypographyH1>
        {firstName} {lastName}
      </TypographyH1>
      <TypographyH2>
        {email} - {homeTown}, {country}
      </TypographyH2>
      <TypographyP>{aboutMe}</TypographyP>
    </>
  );
}
