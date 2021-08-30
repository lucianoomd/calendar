/**
 * Action types
 */
export const Types = {
    SET_MODAL_ITEMS: 'modalSelection/SET_MODAL_ITEMS',
    SET_SELECTED_VALUE: 'modalSelection/SET_SELECTED_VALUE',
    CLEAN_MODAL_SELECTION: 'modalSelection/CLEAN_MODAL_SELECTION'
};

/**
 * Handlers
 */
const INITIAL_STATE = {
    selectedValue: '',
    items: [],
    setSelectedValueAction: () => {},
}

const setModalItems = (state, items) => {
    return {
        ...state,
        items,
    };
}

const setSelectedValue = (state, selectedValue) => {
    return {
        ...state,
        selectedValue,
    };
}

const cleanModalSelection = (state) => {
    return { ...state, ...INITIAL_STATE };
}

export default function modalSelection(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.SET_MODAL_ITEMS: return setModalItems(state, action.payload.items);

        case Types.SET_SELECTED_VALUE: return setSelectedValue(state, action.payload.selectedValue);

        case Types.CLEAN_MODAL_SELECTION: return cleanModalSelection(state, action.payload.clean);

        default: return state;
    }
}

/**
 * Action creators
 */
export const ModalSelectionActions = {
    setModalItems: items => ({
        type: Types.SET_MODAL_ITEMS,
        payload: {
            items
        }
    }),

    setSelectedValue: selectedValue => ({
        type: Types.SET_SELECTED_VALUE,
        payload: {
            selectedValue
        }
    }),

    cleanModalSelection: (newState = {...INITIAL_STATE}) => ({
        type: Types.CLEAN_MODAL_SELECTION,
        payload: {
            newState
        }
    }),
};
