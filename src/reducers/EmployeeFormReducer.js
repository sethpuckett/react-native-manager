import * as Type from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Type.EMPLOYEE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case Type.EMPLOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};
