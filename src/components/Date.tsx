import { format, parseISO } from "date-fns";

const Date = ({ dateString }: { dateString: string }) => {
  const dateObject = parseISO(dateString);

  return (
    <time dateTime={dateString} className="whitespace-nowrap">
      {format(dateObject, "MMM d, yyyy")}
    </time>
  );
};

export default Date;
