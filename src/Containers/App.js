import React, { Component } from 'react';
import UserForm from '../Components/UserForm'
import Results from '../Components/Results'
import '../App.css';

class App extends Component {

  state = {
    completeForm: false
  }

  completeForm = () => {
    this.setState({completeForm: true})
  }
  render() {
      if (!this.state.completeForm) {
        return <UserForm completeForm={this.completeForm}/>
      }
      else {
        return <Results />
      }
  }
}

export default App;
