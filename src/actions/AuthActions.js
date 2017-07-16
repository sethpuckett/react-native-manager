import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as Type from './types';

export const emailChanged = (text) => {
    return {
        type: Type.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: Type.PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: Type.LOGIN_USER });
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((error) => {
                console.log(error);

                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFailed(dispatch));
            });
    };
};

const loginUserFailed = (dispatch) => {
    dispatch({ type: Type.LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: Type.LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};
