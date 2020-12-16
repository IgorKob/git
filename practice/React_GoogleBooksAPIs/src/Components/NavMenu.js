import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Menu, Checkbox, Input } from 'semantic-ui-react';

const NavMenu = (props) => {

    const [activeItem, setActiveItem] = useState('home');
    const handleItemClick = (e, { name }) => setActiveItem(name);
    
    return (
        <Menu secondary style={{margin: '5px'}}>

            <Menu.Item
                name='home'
                active={activeItem === 'home'}
                onClick={handleItemClick}
              ><NavLink exect to='/'>Home</NavLink>
            </Menu.Item>
         
            <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={handleItemClick}
              ><NavLink exect to='/messages'>Messages</NavLink>
            </Menu.Item>

            <Menu.Item
                name='favourites'
                active={activeItem === 'favourites'}
                onClick={handleItemClick}
              ><NavLink exect to='/favourites'>Favourites {props.favouritesBook.length > 0 && <span>({props.favouritesBook.length})</span>}</NavLink>
            </Menu.Item>
        
            <Menu.Menu position='right'>

                <Menu.Item><Checkbox toggle checked={props.langRestrict} onChange={() => props.langChange()} label='Lang: Uk' /></Menu.Item>

                <Menu.Item><Checkbox toggle checked={props.orderBy} onChange={() => props.orderByChange()} label='New' /></Menu.Item>
             
                <Menu.Item>{props.totalItems && (<span>Search result: {props.totalItems}</span>)}</Menu.Item>

                <Menu.Item>
                    <Input
                        action={{
                        icon: 'search',
                        value: props.query, 
                        onClick: () => props.onSearch(),
                        }}
                        actionPosition='right'
                        placeholder='Search...'
                        onChange={e => props.setQuery(e.target.value)}
                        onKeyPress={e => e.key === 'Enter' ? props.onSearch() : null }
                    />
                </Menu.Item>

            </Menu.Menu>
        </Menu>
    )
}

export default NavMenu;