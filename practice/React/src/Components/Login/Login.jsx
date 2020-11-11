import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../all/FormsControls/FormsControls";
import {maxLengthCreater, required} from "../../utils/validators";
import {connect} from "react-redux";
import {Loginkim} from "../../Redux/auth_reducer";
// import {Redirect} from "react-router-dom";
import {Redirect} from "react-router-dom";
import classes from './login.module.css'


let maxLength30 = maxLengthCreater(30);

const LoginForm = (props) => {
    debugger
  return (
      <form onSubmit={props.handleSubmit}>
        <div><Field component={Input}
                    type="text"
                    name={'email'}
                    placeholder={'email'}
                    validate={[required, maxLength30]}
        /></div>
        <div><Field component={Input}
                    type="password"
                    name={'password'}
                    placeholder={'password'}
                    validate={[required, maxLength30]}
        /></div>
        <div><Field component={'input'}
                    type="checkbox"
                    name={'rememberMe'}
        /> remember me</div>

          {props.captchaUrl && <img src={props.captchaUrl} />}
          {props.captchaUrl && <Field component={'input'}
                                      type="text"
                                      name={'captcha'}
                                      validate={[required]}
          />}

        {props.error && <div className={classes.error}>{props.error}</div>}

        <div><button >Login</button ></div>
      </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    // debugger
    // console.log(formData);
    props.Loginkim(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}
                      captchaUrl={props.captchaUrl}
      />
    </>
  )
}

const mapStateToProps = (state) => {
  // debugger
  return  {
    isAuth: state.authUser.isAuth,
      captchaUrl: state.authUser.captchaUrl,
  }
}

// export default Login;
export default connect(mapStateToProps, {Loginkim})(Login);