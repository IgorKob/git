import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth_reducer";

class HeaderContainerClass extends React.Component {

  componentDidMount() {
    this.props.getAuthUserData();
  }

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
  getAuthUserData,
})(HeaderContainerClass);

export default HeaderContainer;