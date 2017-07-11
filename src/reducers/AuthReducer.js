import * as Type from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Type.EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case Type.PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case Type.LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case Type.LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case Type.LOGIN_USER:
            return { ...state, loading: true, error: '' };
        default:
            return state;
    }
};
