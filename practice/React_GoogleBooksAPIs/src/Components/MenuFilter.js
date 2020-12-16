import React from 'react'
import { Form, List, Checkbox } from 'semantic-ui-react';

const MenuFilter = (props) => {
    return (
      <Form> 
        <Form.Field>
          <List horizontal style={{margin: '0 50px'}}>
            <h4>Filter</h4>
            
            <List.Item>
                <List.Content>
                <Checkbox
                        radio
                        label='All'
                        name='priceFilter'
                        value=''
                        checked={props.filter === ''}
                        onChange={props.filterChange}
                    />
                </List.Content>
            </List.Item>

            <List.Item>
                <List.Content>
                <Checkbox
                        radio
                        label='Free ebooks'
                        name='priceFilter'
                        value='free-ebooks'
                        checked={props.filter === 'free-ebooks'}
                        onChange={props.filterChange}
                    />
                </List.Content>
            </List.Item>

            <List.Item>
                <List.Content>
                <Checkbox
                        radio
                        label='Paid ebooks'
                        name='priceFilter'
                        value='paid-ebooks'
                        checked={props.filter === 'paid-ebooks'}
                        onChange={props.filterChange}
                    />
                </List.Content>
            </List.Item>

            <List.Item>
                <List.Content>
                <Checkbox
                        radio
                        label='Full content'
                        name='priceFilter'
                        value='full'
                        checked={props.filter === 'full'}
                        onChange={props.filterChange}
                    />
                </List.Content>
            </List.Item>

        {/* right */}
            <List.Item style={{marginLeft: '320px'}}>
                <List.Content>
                <Checkbox
                        radio
                        label='All'
                        name='printType'
                        value='all'
                        checked={props.printType === 'all'}
                        onChange={props.printTypeChange}
                    />
                </List.Content>
            </List.Item>

            <List.Item>
                <List.Content>
                <Checkbox
                        radio
                        label='Books'
                        name='printType'
                        value='books'
                        checked={props.printType === 'books'}
                        onChange={props.printTypeChange}
                    />
                </List.Content>
            </List.Item>

            <List.Item>
                <List.Content>
                <Checkbox
                        radio
                        label='Magazines'
                        name='printType'
                        value='magazines'
                        checked={props.printType === 'magazines'}
                        onChange={props.printTypeChange}
                    />
                </List.Content>
            </List.Item>

            </List>
        </Form.Field>
      </Form>
    )
}

export default MenuFilter;
