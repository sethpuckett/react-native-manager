import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import * as Type from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: Type.EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: Type.EMPLOYEE_CREATE });
                Actions.employeeList({ type: 'reset' });
            });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => { 
                dispatch({ type: Type.EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};
