import { format, parseISO } from "date-fns";
import { useMemo } from "react";

const FormattedDate = ({ dateString }: { dateString: string }) => {
  const DATE_FORMAT = "MMM d, yyyy";

  const dateObject = useMemo(() => parseISO(dateString), [dateString]);
  const formattedDate = useMemo(
    () => format(dateObject, DATE_FORMAT),
    [dateObject]
  );

  return (
    <time dateTime={dateString} className="whitespace-nowrap">
      {formattedDate}
    </time>
  );
};

export default FormattedDate;
