import React, { Component } from 'react'
import { ActionCreator } from '../redux/actionCreators'
import { connect } from 'react-redux'

class Login extends Component{
  state = {
    form: {
      email: '',
      passwd: ''
    }
  }

  handleChange = fieldname => event => {
    const form = {
      ...this.state.form
    }
    form[fieldname] = event.target.value
    this.setState({ form })
  }

  login = () => {
    this.props.login(this.state.form.email, this.state.form.passwd)
  }

  render(){
    return(
      <div>
        <h1>Login {JSON.stringify(this.state)}</h1>
        <input type='text' value={this.state.form.email} onChange={this.handleChange('email')} />
        <input type='text' value={this.state.form.passwd} onChange={this.handleChange('passwd')} />
        <button onClick={this.login}>Logar</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    login: (email, passwd) => dispatch(ActionCreator.signinRequest(email, passwd))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)