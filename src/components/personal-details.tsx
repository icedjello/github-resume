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
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>
        {email} - {homeTown}, {country}
      </h2>
      <p>{aboutMe}</p>
    </>
  );
}
