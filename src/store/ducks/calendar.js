import Dates from "../../utils/Dates";

/**
 * Action types
 */
export const Types = {
    SET_SELECTED_YEAR: 'calendar/SET_SELECTED_YEAR',
    SET_SELECTED_MONTH: 'calendar/SET_SELECTED_MONTH',
};

/**
 * Handlers
 */
const INITIAL_STATE = {
    selectedDate: Dates.getNewDateWithoutTime(),
}

const setSelectedYear = (state, year) => {
    const date = new Date(state.selectedDate);

    date.setFullYear(year);
    return {
        ...state,
        selectedDate: date,
    };
}

const setSelectedMonth = (state, month) => {
    const date = new Date(state.selectedDate);
    date.setMonth(month);
    return {
        ...state,
        selectedDate: date,
    };
}

export default function calendar(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_SELECTED_YEAR: return setSelectedYear(state, action.payload.year)

        case Types.SET_SELECTED_MONTH: return setSelectedMonth(state, action.payload.month)

        default: return state;
    }
}

/**
 * Action creators
 */
export const CalendarActions = {
    setSelectedYear: year => ({
        type: Types.SET_SELECTED_YEAR,
        payload: {
            year
        }
    }),

    setSelectedMonth: month => ({
        type: Types.SET_SELECTED_MONTH,
        payload: {
            month
        }
    }),
};
