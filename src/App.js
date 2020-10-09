import React, { Component } from 'react'
import { createStore, combineReducers } from "redux"

export class App extends Component {
  render() {

    // this.state = {
    //   id: 0,
    //   person: {
    //     name: "Ghareeb",
    //     age: 24
    //   }
    // }

    // const mathReducer = (state = {
    //   id: 1
    // }, action) => {
    //   switch (action.type) {
    //     case "CHANGE_ID":
    //       state = {
    //         ...state,
    //         id: action.payload
    //       }
    //       break;
    //   }
    //   return state;
    // }
    // const userReducer = (state = {
    //   name: "Ghareeb",
    //   age: 24
    // }, action) => {
    //   switch (action.type) {
    //     case "CHANGE_USER":
    //       state = {
    //         ...state,
    //         name: action.payload,
    //         age: action.payload2
    //       }
    //       break;

    //   }
    //   return state;
    // }

    // const store = createStore(combineReducers({ mathReducer, userReducer }));

    // store.subscribe(() => {
    //   console.log(store.getState())
    // })
    // store.dispatch({
    //   type: "CHANGE_ID",
    //   payload: 12
    // })
    // store.dispatch({
    //   type: "CHANGE_USER",
    //   payload: "Brandnew Ghareeb",
    //   payload2: 2
    // })




    return (
      <div>

      </div>
    )
  }
}



export default App
