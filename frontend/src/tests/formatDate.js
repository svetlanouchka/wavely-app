// const { parse, format } = require("date-fns");
import { parse, format } from "date-fns";

const formatDate = (birth_date) => {
    const formattedDate = 
    format(
    parse(birth_date, "yyyy-MM-dd", new Date()),
        "dd/MM/yyyy");
    return formattedDate;
}
console.log(formatDate("2021-09-15"));

export { formatDate };