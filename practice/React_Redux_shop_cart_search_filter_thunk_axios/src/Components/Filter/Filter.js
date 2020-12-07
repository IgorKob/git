import React from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'

const Filter = (props) => {
    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item
            name='all'
            active={props.activeItem === 'all'}
            onClick={props.handleItemClick}
          />
          <Menu.Item
            name='price up'
            active={props.activeItem === 'price up'}
            onClick={props.handleItemClick}
          />
          <Menu.Item
            name='price down'
            active={props.activeItem === 'price down'}
            onClick={props.handleItemClick}
          />
          <Menu.Item
            name='author'
            active={props.activeItem === 'author'}
            onClick={props.handleItemClick}
          />
          <Menu.Item
            name='rating'
            active={props.activeItem === 'rating'}
            onClick={props.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search product...'
                title='шукати кирилицею'
                value={props.value}
                onChange={props.search_filter}
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached='bottom'>
          {props.children}
        </Segment>
      </div>
    )
}

export default Filter;