import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from "redux"
import App from './App';

import { Provider } from 'react-redux'




const mathReducer = (state = {
    id: 1
}, action) => {
    switch (action.type) {
        case "CHANGE_ID":
            state = {

                id: action.payload
            }
            break;
    }
    return state;
}



const userReducer = (state = {
    name: "Ghareeb",
    age: 24
}, action) => {
    switch (action.type) {
        case "CHANGE_USER":
            state = {
                name: action.payload,
                age: action.payload2
            }
            break;

    }
    return state;
}

const store = createStore(combineReducers({ mathReducer, userReducer }));

store.subscribe(() => {
    console.log(store.getState())
})
// store.dispatch({
//     type: "CHANGE_ID",
//     payload: 12
// })
// store.dispatch({
//     type: "CHANGE_USER",
//     payload: "Brandnew Ghareeb",
//     payload2: 2
// })


ReactDOM.render(
    <Provider store={store}>
        < App />
    </Provider>,
    document.getElementById('root'));