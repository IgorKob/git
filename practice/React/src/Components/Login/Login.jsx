import React from 'react'
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} type="text" name={'login'} placeholder={'login'}/></div>
        <div><Field component={'input'} type="text" name={'password'} placeholder={'password'}/></div>
        <div><Field component={'input'}  type="checkbox" name={'rememberMe'} /> remember me</div>
        <div><button >Login</button ></div>
      </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}

export default Login;