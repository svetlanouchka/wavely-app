import { formatDate } from "./formatDate";

describe("Date to be formatted from English format to French format", () => {
    test ("Function should format date from yyyy-MM-dd to dd/MM/yyyy", () => {
        const birth_date = "2021-09-15"
        expect(formatDate(birth_date)).toBe("15/09/2021");
    })
})