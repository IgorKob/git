import React from 'react'
import { Container, Box, LinearProgress } from '@material-ui/core';
import { Redirect, Route, Switch } from 'react-router-dom';
const HomeContainer = React.lazy(() => import('./../Home/HomeContainer'));
const About = React.lazy(() => import('./../About/About'));

export default function Main() {
  return (
    <Container>
      <Box my={2}>
          <React.Suspense fallback={<div><LinearProgress /></div>}>
            <Switch>
              <Route path="/React_Weather_API">
                <HomeContainer />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route path="*">
                <Redirect to="/React_Weather_API" />
              </Route>
            </Switch>
          </React.Suspense>
      </Box>
    </Container>
  )
}