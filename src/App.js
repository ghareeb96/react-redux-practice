import React, { Component } from 'react'
import Header from "./Components/Header"
import Contnet from "./Components/Content"
import { connect } from 'react-redux';

class App extends Component {

  render() {

    return (
      <div>
        <Header name={this.props.user.name} />
        <Contnet changeName={() => this.props.setName("New Ghareeb", 22)} />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return ({
    user: state.userReducer,
    math: state.mathReducer
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    setName: (name, age) => {
      dispatch({
        type: "CHANGE_USER",
        payload: name,
        payload2: age,
      })
    },
    setAge: (age) => {
      dispatch({
        type: "CHANGE_USER",
        payload: age
      })
    }
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

