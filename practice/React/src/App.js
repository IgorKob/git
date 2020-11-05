import React from "react";
import Main from "./Components/Main/Main";
import Nav from "./Components/Nav/Nav";
import './styles.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {withRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./Redux/auth_reducer";
import {compose} from "redux";
import Preloader from "./Components/all/Preloader/Preloader";
import {InitializeApp} from "./Redux/app_reducer";

class App extends React.Component {

  componentDidMount() {
    // debugger
    this.props.InitializeApp();
  }

  render() {
    // debugger
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <section className='container'>

        <HeaderContainer/>

        <Nav/>

        <Main/>

      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

// export default connect(null, {
//   getAuthUserData,
// })(App);
export default compose(
  withRouter,
  connect(mapStateToProps, {InitializeApp}))(App);