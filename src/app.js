import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyA4pmneX-vagXK12bMgpAVTq7KRjirwbJU',
            authDomain: 'manager-31410.firebaseapp.com',
            databaseURL: 'https://manager-31410.firebaseio.com',
            projectId: 'manager-31410',
            storageBucket: '',
            messagingSenderId: '302664054938'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }   
}

export default App;
