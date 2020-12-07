import React, { useState } from 'react'
import { Button, Header, Icon, Image, Input, List, Menu, Modal } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { NavLink } from 'react-router-dom'

const MenuExampleSecondary = (props) => {

  const [activeItem, setActiveItem] = useState('home');
  const [open, setOpen] = React.useState(false)
  
  const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
      <>
      <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        ><NavLink exect to='/'>Home</NavLink></Menu.Item>
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
          ><NavLink exect to='/messages'>Messages</NavLink></Menu.Item>
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
          ><NavLink exect to='/friends'>Friends</NavLink></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='cart'
            active={activeItem === 'cart'}
            onClick={handleItemClick, () => setOpen(true)}
            ><NavLink exect to='/cart'>{`Cart ${props.sum} грн`}</NavLink></Menu.Item>
        </Menu.Menu>
      </Menu>



      <Modal
      // mini, tiny, small, large, fullscreen
      size={'mini'}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      style={{right: 0}}
    >
      <Modal.Header>Cart</Modal.Header>
      <Modal.Content image scrolling>

      <List divided verticalAlign='middle'>

        {props.cart.map(el => (
          <List.Item>
            <List.Content floated='right'>
              <Button onClick={() => props.del_to_cartActionCreater(el[0].id)} color='red'>Delete</Button>
            </List.Content>
            <Image avatar src={`https://react.semantic-ui.com/images/wireframe/white-image.png` || el[0].image} />
        <List.Content>{el[0].title}: {el[0].price}грн</List.Content>
          </List.Item>
        ))}

       
      </List>


      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Close <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>


      </>
    )
  }


export default MenuExampleSecondary;