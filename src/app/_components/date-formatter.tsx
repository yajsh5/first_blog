import { parseISO, format } from "date-fns";
import { zhCN } from "date-fns/locale";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy年M月d日", { locale: zhCN })}</time>;
};

export default DateFormatter;
