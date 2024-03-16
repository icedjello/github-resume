export function formatDate(dateAsString: string, includeMonth = false) {
  const date = new Date(dateAsString);
  const legibleDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: includeMonth ? "long" : undefined,
  }).format(date);
  return legibleDate;
}
