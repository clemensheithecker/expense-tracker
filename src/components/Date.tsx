import { format, parseISO } from "date-fns";

const Date = ({ dateString }: { dateString: string }) => {
  const dateObject = parseISO(dateString);

  return <time dateTime={dateString}>{format(dateObject, "MMM d, yyyy")}</time>;
};

export default Date;
