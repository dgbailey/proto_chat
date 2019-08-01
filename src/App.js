import React, {Component} from 'react';
import './App.css';
import {connect}  from "react-redux";
import {register} from "./actions";
import ChatWindow from "./ChatWindow";
import {pushMessage} from "./actions"

//make sure to always import the default exported component from the connect function.
// not the regular export or you will have issues connecting to store as a child component
class App extends Component{
    constructor(){
      super();
      this.state = {
    
        username:"robot124dustinrobo",
        password1:"testpassword35",
        password2:"testpassword35",
       
        
       
      }
  }
   

  componentDidMount(){
    // this.props.register(JSON.stringify({username:this.state.username,password1:this.state.password1,password2:this.state.password2}))

  }


  render(){
    return (
      <div className="App">
        <ChatWindow props={this.props}/>
      </div>
    )

    }
  
}

const mapStateToProps = state =>{
  return{
    pusherReducer: state.pusherReducer.pusherFetch,
    error: state.registrationReducer.error,
    registerSuccess: state.registrationReducer.registrationStart,
    
  }
    
}

export default connect(mapStateToProps,{register,pushMessage})(App)
