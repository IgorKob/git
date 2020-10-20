import React from 'react';
import {Container, TabPane, Tabs, Tab, Row, Col, Nav} from 'react-bootstrap'

export default function Tabss() {
  return (
    <>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="secondd">Tab 3</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seconddd">Tab 4</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-2'>
                <Tab.Pane eventKey="first">
                  <img style={{width: '100%', paddingBottom: '20px'}} src='https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/07/JavaScript-Framework-2.jpg'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facere vero ab repellat est quos aperiam in officia. Iure, nesciunt. Quaerat deserunt magnam reprehenderit, pariatur assumenda, minus totam nobis saepe. </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img style={{width: '100%', paddingBottom: '20px'}} src='https://improvingphc.org/sites/default/files/conceptual-frameworkneutral-state_2.png'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facere vero ab repellat est quos aperiam in officia. Iure, nesciunt. Quaerat deserunt magnam reprehenderit, pariatur assumenda, minus totam nobis saepe. </p>
                </Tab.Pane>
                <Tab.Pane eventKey="secondd">
                  <img style={{width: '100%', paddingBottom: '20px'}} src='https://lh3.googleusercontent.com/proxy/pgsE298UNcU5kHchFKn38xPeAw9LkHIhEkU6NVAN-smEmGc5yd_tCBIopCqUIClZG8TuahkaJvcjS0R6CroNE6_tQoWmiMwMFSXrJBlRsaYivXPE_LpiPuovRw9mI42JAzbT7ALTF_zCudpuGZC4SL-6Cp8'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facere vero ab repellat est quos aperiam in officia. Iure, nesciunt. Quaerat deserunt magnam reprehenderit, pariatur assumenda, minus totam nobis saepe. </p>
                </Tab.Pane>
                <Tab.Pane eventKey="seconddd">
                  <img style={{width: '100%', paddingBottom: '20px'}} src='https://3er1viui9wo30pkxh1v2nh4w-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/COCOFrameworkBlockDig_3.gif'/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum facere vero ab repellat est quos aperiam in officia. Iure, nesciunt. Quaerat deserunt magnam reprehenderit, pariatur assumenda, minus totam nobis saepe. </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </>
  );
}
