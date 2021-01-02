import React from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.authUser.isAuth
});

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'} />
      return <Component {...this.props} />
    }
  }

  let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}

// // kim TypeScript error
// import React from 'react'
// import {Redirect} from "react-router-dom";
// import {connect} from "react-redux";
// import { AppStateType } from '../Redux/redux_store';

// type mapStateToPropsForRedirectType = {
//   isAuth: boolean
// }
// type mapDispatchToPropsForRedirectType = {
// }
// let mapStateToPropsForRedirect = (state: AppStateType) => ({
//   isAuth: state.authUser.isAuth
// } as mapStateToPropsForRedirectType);

// export function withAuthRedirect<WCP>(Component: React.ComponentType<WCP>) {

//   const RedirectComponent: React.FC<mapStateToPropsForRedirectType & mapDispatchToPropsForRedirectType & WCP> = (props: WCP) => {
//     let {isAuth, ...restProps} = props
//     if (!isAuth) return (<Redirect to={'/login'} />)
//     return <Component {...restProps as WCP} />
//   }

//   let ConnectedAuthRedirectComponent = connect<mapStateToPropsForRedirectType, mapDispatchToPropsForRedirectType, WCP, AppStateType>(mapStateToPropsForRedirect, {})(RedirectComponent);

//   return ConnectedAuthRedirectComponent;
// }