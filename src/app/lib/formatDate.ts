import dayjs from "dayjs";

export default function formatDate(date: string, format = "MMM YYYY"): string {
	return dayjs(date).format(format);
}
