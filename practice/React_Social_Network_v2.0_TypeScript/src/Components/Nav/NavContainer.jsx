import React from 'react';
import Nav from "./Nav";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth_reducer";

const NavContainer = (props) => { 
  return <Nav {...props} />
}

const mapStateToProps = (state) => ({
    isAuth: state.authUser.isAuth,
    login: state.authUser.login,
  });

export default connect(mapStateToProps, {
  logout,
})(NavContainer);