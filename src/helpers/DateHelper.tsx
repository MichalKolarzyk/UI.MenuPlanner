export class DateHelper {
    static isToday = (date?: Date): number => {
        if(!date){
            return -1
        }
        const today = new Date();
        if (
            date.getFullYear() > today.getFullYear() ||
            date.getMonth() > today.getMonth() ||
            date.getDate() > today.getDate()
        ) {
            return 1;
        } else if (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
        ) {
            return 0;
        }
        return -1;
    };

    static toDates = (startDate: Date, numberOfDays: number): Array<Date> => {
        const array = new Array<Date>();

        for (let i = 0; i < numberOfDays; i++) {
            const newDate = this.addDays(new Date(startDate), i);
            array.push(newDate);
        }

        return array;
    };

    static toPreviousDays = (date: Date, numberOfDays: number): Array<Date> => {
        const startDate = this.addDays(date, -numberOfDays);
        return this.toDates(startDate, numberOfDays);
    };

    static addDays = (date: Date, daysToAdd: number): Date => {
        date.setDate(date.getDate() + daysToAdd);
        return date;
    };

    static toDate = (date: string): Date => {
        //"12.06.2022"
        const dateItems = date.split(".");
        const convertableDate = `${dateItems[1]}.${dateItems[0]}.${dateItems[2]}`;
        return new Date(convertableDate);
    };

    static toString = (date?: Date): string => {
        //"12.06.2022"
        if (!date) {
            return "";
        }
        let month = date.getMonth() + 1;
        let monthAsString: string = month.toString();
        if (month < 10) {
            monthAsString = `0${monthAsString}`;
        }
        return `${date.getDate()}.${monthAsString}.${date.getFullYear()}`;
    };

    static toDayMonthString = (date?: Date): string => {
        //"12.06.2022"
        if (!date) {
            return "";
        }
        let month = date.getMonth() + 1;
        let monthAsString: string = month.toString();
        if (month < 10) {
            monthAsString = `0${monthAsString}`;
        }
        return `${date.getDate()}.${monthAsString}`;
    };

    static toDayOfWeek = (date?: Date): DayOfWeek => {
        if (!date) {
            return DayOfWeek.saturday;
        }
        const day = date.getDay();
        switch (day) {
            case 0:
                return DayOfWeek.sunday;
            case 1:
                return DayOfWeek.monday;
            case 2:
                return DayOfWeek.thursday;
            case 3:
                return DayOfWeek.wednesday;
            case 4:
                return DayOfWeek.thursday;
            case 5:
                return DayOfWeek.friday;
            case 6:
                return DayOfWeek.saturday;
            default:
                return DayOfWeek.saturday;
        }
    };
    
    static toDayOfWeekShort = (date?: Date): DayOfWeekShort => {
        if (!date) {
            return DayOfWeekShort.saturday;
        }
        const day = date.getDay();
        switch (day) {
            case 0:
                return DayOfWeekShort.sunday;
            case 1:
                return DayOfWeekShort.monday;
            case 2:
                return DayOfWeekShort.thursday;
            case 3:
                return DayOfWeekShort.wednesday;
            case 4:
                return DayOfWeekShort.thursday;
            case 5:
                return DayOfWeekShort.friday;
            case 6:
                return DayOfWeekShort.saturday;
            default:
                return DayOfWeekShort.saturday;
        }
    };
}

export enum DayOfWeek {
    sunday = "sunday",
    monday = "monday",
    tuesday = "tuesday",
    wednesday = "wednesday",
    thursday = "thursday",
    friday = "friday",
    saturday = "saturday",
}

export enum DayOfWeekShort {
    sunday = "Sun",
    monday = "Mon",
    tuesday = "Tue",
    wednesday = "Wed",
    thursday = "Thu",
    friday = "Fri",
    saturday = "Sat",
}
