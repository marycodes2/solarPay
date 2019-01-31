import React, { Component } from 'react';
import { Icon, Container, Header, Button, Form } from 'semantic-ui-react'

class UserForm extends Component {

  state = {
    name: "",
    zip: null,
    state: "",
    q1: null,
    q2: null,
    q3: null,
    q4: null
  }

  submitInfo = () => {
    if (this.state.name && this.state.zip && this.state.state && this.state.state.length < 3 && this.state.q1 && this.state.q2 && this.state.q3 && this.state.q4) {
      let formData = {
        name: this.state.name,
        zipcode: this.state.zip,
        state: this.state.state,
        q1_consumption: this.state.q1,
        q2_consumption: this.state.q2,
        q3_consumption: this.state.q3,
        q4_consumption: this.state.q4
      }
      this.props.completeForm()
    }
    else {
      alert('Please complete all required information')
    }
  }
  render() {
    return ( <Container
      textAlign='left'>
      <Form
        id='form'>
          <Header as='h2'>
            <Icon name='sun' color='black'/>
            Welcome to SolarPay!
          </Header>
          <Header as='h3'>
            Enter the following info to see your solar payback period and more
          </Header>
        <br/>
        <Form.Group>
          <Form.Input width={7} required fluid label='Name' placeholder='Name' onChange={(event) => this.setState({name: event.target.value})}/>
        </Form.Group>
          <br/>
        <Form.Group>
          <Form.Input width={7} required fluid type='number' label='Zipcode' placeholder='Zipcode' onChange={(event) => this.setState({zip: event.target.value})}/>
        </Form.Group>
          <br/>
        <Form.Group>
          <Form.Input width={7} required fluid max={2} label='State (Two Digit Abbreviation)' placeholder='MD' onChange={(event) => {this.setState({state: event.target.value})}}/>
        </Form.Group>
          <br/>
        <Form.Group>
          <Form.Input width={7} required fluid type='number' label='Avg Winter Monthly Utility Bill' placeholder='200' onChange={(event) => {this.setState({q1: event.target.value})}}/>
        </Form.Group>
          <br/>
        <Form.Group>
          <Form.Input width={7} required fluid type='number' label='Avg Spring Monthly Utility Bill' placeholder='150' onChange={(event) => {this.setState({q2: event.target.value})}}/>
        </Form.Group>
          <br/>
        <Form.Group>
          <Form.Input width={7} required fluid type='number' label='Avg Summer Monthly Utility Bill' placeholder='180' onChange={(event) => {this.setState({q3: event.target.value})}}/>
        </Form.Group>
          <br/>
        <Form.Group>
          <Form.Input width={7} required fluid type='number' label='Avg Autumn Monthly Utility Bill' placeholder='120' onChange={(event) => {this.setState({q4: event.target.value})}}/>
        </Form.Group>
          <br/>
        <Button
          type='submit'
          content='Submit'
          color='green'
          onClick={this.submitInfo}
          />
      </Form>
    </Container>
    );
  }
}


export default UserForm;
