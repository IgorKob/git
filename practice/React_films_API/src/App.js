import React from 'react';
import Container from '@material-ui/core/Container';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" className='container'>
        <Nav>
          <Main />
        </Nav>
      </Container>
    </React.Fragment>
  );
}
export default App;
