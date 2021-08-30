import { combineReducers } from 'redux';

import calendar from './calendar';
import events from './events';
import modalSelection from './modalSelection';

export default combineReducers({
    events,
    calendar,
    modalSelection,
});
