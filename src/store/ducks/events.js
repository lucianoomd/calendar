/**
 * Action types
 */
export const Types = {
    ADD: 'event/ADD',
    REMOVE: 'event/REMOVE',
    EDIT: 'event/EDIT',
};

/**
 * Handlers
 */
const INITIAL_STATE = [];

const addEvent = (state, event) => [
    ...state,
    {
        id: !event.id ? `${Math.random() * 1000}` : event.id,
        title: event.title,
        date: event.date,
        startTime: event.startTime,
        endTime: event.endTime,
        description: event.description,
        color: event.color,
    }
].sort((a, b) => a.startTime - b.startTime);


const removeEvent = (state, id) => {
    const events = [...state];
    const newState = events.filter(event => event.id !== id);
    return newState;
};

const editEvent = (state, event) => {
    const events = [...state];
    const oldEventPosition = events.map((item) => item.id).indexOf(event.id);
    events[oldEventPosition] = event;
    return events;
}

export default function events(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD: return addEvent(state, action.payload.event)

        case Types.REMOVE: return removeEvent(state, action.payload.id)

        case Types.EDIT: return editEvent(state, action.payload.event)

        default: return state;
    }
}

/**
 * Action creators
 */
export const EventActions = {
    addEvent: event => ({
        type: Types.ADD,
        payload: {
            event
        }
    }),

    removeEvent: id => ({
        type: Types.REMOVE,
        payload: {
            id
        }
    }),

    editEvent: event => ({
        type: Types.EDIT,
        payload: {
            event
        }
    }),
};
