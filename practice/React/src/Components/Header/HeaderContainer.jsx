import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth_reducer";
import {usersAPI} from "../../api/api";

class HeaderContainerClass extends React.Component {

  componentDidMount() {
     usersAPI.getAuthMe(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
    })
      .then((data) => {
// debugger
        // this.props.setTotalUsersCount(response.data.totalCount);
        if (data.resultCode === 0) {
          let {userId, email, login} = data.data;
          this.props.setAuthUserData(userId, email, login);
        }
      });
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
  setAuthUserData,
})(HeaderContainerClass);

export default HeaderContainer;