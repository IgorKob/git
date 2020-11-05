import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth_reducer";

class HeaderContainerClass extends React.Component {


  render() {
    return <Header {...this.props} />
  }
}


const mapStateToProps = (state) => {
  return {
    isAuth: state.authUser.isAuth,
    login: state.authUser.login,

  }
}

const HeaderContainer = connect(mapStateToProps, {
  logout,
})(HeaderContainerClass);

export default HeaderContainer;