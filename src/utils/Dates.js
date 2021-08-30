import { format } from 'date-fns'

const Dates = {
    getFormattedTime: (date, startTime = false) => {
        if(!date) return '';
        let time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); // Format the date to 'HH:mm AM/PM'
        if(startTime) time = time.substring(0, time.length - 3); // Removes 'AM/PM' from the string if it is startTime
        return time;
    },

    getMonthName: (date) => {
        return format(date, 'MMMM'); // Get full month name as string - Example: 'July'
    },

    getAbbreviatiedWeekDay: (date) => { // Get 3 first chars of a week day
        return String(date).split(' ')[0];
    },

    getAbbreviatiedMonthName: (date) => { // Get 3 first chars of a Month
        return String(date).split(' ')[1];
    },

    generateYearItems: (quantity) => { // Generates an array with ${quantity} year items
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear; i < currentYear + quantity; i++) { years.push(i); }
        return years;
    },

    generateRemainingMonthItems: (year) => { // Generates an array with remaining months of a year
        const today = new Date();
        const totalMonths = 12;
        const startMonth = today.getFullYear() === year ? today.getMonth() : 0;

        const months = [];
        for (let i = startMonth; i < totalMonths; i++) { months.push(i); }
        return months;
    },

    generateAllMonths: () => { // Generates an array with all months
        const totalMonths = 12;
        const startMonth = 0;

        const months = [];
        for (let i = startMonth; i < totalMonths; i++) { months.push(i); }
        return months;
    },

    generateRemainingDayItems: (year, month) => { // Generates an array with remaining days of a month's year
        const today = new Date();
        const totalDays = new Date(year, month + 1, 0).getDate();
        const startDay = today.getFullYear() === year && today.getMonth() === month ? today.getDate() : 1;

        const days = [];
        for (let i = startDay; i < totalDays; i++) { days.push(i); }
        return days;
    },

    generateAllMonthDays: (year, month) => { // Generates an array with all days of a month's year
        const totalDays = new Date(year, month + 1, 0).getDate();
        const startDay = 0;

        const days = [];
        for (let i = startDay; i < totalDays; i++) { days.push({ date: new Date(year, month, i + 1)}); }
        return days;
    },

    getFormattedDate: (date) => {
        return format(date, 'MM/dd/yyyy');
    },

    getNewDateWithoutTime: () => {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }
}

export default Dates;
