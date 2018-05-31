import React from 'react'
import { connect } from 'react-redux'
import ActionCreators from './redux/actionCreators'
import { Link } from 'react-router-dom'

const Header = (props) => (
  <header className="App-header">
    <h1 className="App-title">Welcome to React</h1>
    <p>
      <Link to='/'>Home</Link>
      <Link to='/admin'>Admin</Link>
      <Link to='/restrito'>Restrito</Link>
      <Link to='/login'>Login</Link>
    </p>
  </header>
) 

const mapStateToProps = (state) => {
  return{
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    signin: (email, passwd) => ActionCreators.signinRequest(email, passwd)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)