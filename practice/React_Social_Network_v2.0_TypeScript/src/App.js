import React from "react";
import './styles.css';
import {withRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./Components/all/Preloader/Preloader";
import {InitializeApp} from "./Redux/app_reducer";
import Container from '@material-ui/core/Container';
import NavContainer from "./Components/Nav/NavContainer";


class App extends React.Component {

  componentDidMount() {
    this.props.InitializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    
    return (
      <Container maxWidth="lg" className='container'>

          <NavContainer />

      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, {InitializeApp}))(App);