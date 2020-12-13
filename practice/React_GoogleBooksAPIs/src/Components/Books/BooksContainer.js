import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { searchBooksThunk } from './../../Redux/booksReducer';
import Books from './Books';
import { Checkbox, Form, Image, Input, Item, List, Loader, Menu } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { NavLink } from 'react-router-dom';

const BooksContainer = (props) => {
  const [query, setQuery] = useState('search+terms');
  const [filter, setFilter] = useState('');
  const [printType, setPrintType] = useState('all');
  const [orderBy, setOrderBy] = useState(false);
  const [langRestrict, setLangRestrict] = useState(false);
    

  useEffect(() => {
      props.searchBooksThunk('search+terms', 0);
  },[]);

  // Search
  const onSearch = () => {
    if (String(query).length === 0 || String(query).length === 'search+terms') { 
      props.searchBooksThunk('search+terms', 0, filter, printType, orderBy, langRestrict);
    } else {
      props.searchBooksThunk(query, 0, filter, printType, orderBy, langRestrict);
    }
  };

  // Pagination
  const onClick = () => {
    console.log('true')
    const startIndex0 = props.startIndex + props.maxResults;
    props.searchBooksThunk(query, startIndex0, filter, printType, orderBy, langRestrict);
  };

  const onScroll = (event) => {
      // (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
      // (window.innerHeight + window.pageYOffset) >= (document.body.offsetHeight + 500)
      event.target.scrollingElement.scrollTop >= event.target.scrollingElement.scrollHeight - event.target.scrollingElement.offsetHeight - 200
      && props.books.length
      && !props.isLoading
      && !props.isError
      && onClick();
    }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    return () => window.removeEventListener('scroll', onScroll, false);
});


// menu
const [activeItem, setActiveItem] = useState('home');
const handleItemClick = (e, { name }) => setActiveItem(name);

// Checkbox filter
const filterChange = (e) => setFilter(e.currentTarget.firstChild.defaultValue)

// Checkbox printType
const printTypeChange = (e) => setPrintType(e.currentTarget.firstChild.defaultValue)

// radio orderByChange
const orderByChange = () => setOrderBy(!orderBy);

// radio lang
const langChange = () => setLangRestrict(!langRestrict);

  return (
    <div> 
      {/* main menu */}
      <Menu secondary style={{margin: '5px'}}>
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
          ><NavLink exect to='/friends'>Friends</NavLink>
        </Menu.Item>
        
        <Menu.Menu position='right'>

          <Menu.Item><Checkbox toggle checked={langRestrict} onChange={() => langChange()} label='Lang: Uk' /></Menu.Item>

          <Menu.Item><Checkbox toggle checked={orderBy} onChange={() => orderByChange()} label='New' /></Menu.Item>

          <Menu.Item>{props.totalItems && (<span>Search result: {props.totalItems}</span>)}</Menu.Item>

          <Menu.Item>
            <Input
              action={{
                icon: 'search',
                value: query, 
                onClick: () => onSearch(),
              }}
              actionPosition='right'
              placeholder='Search...'
              onChange={e => setQuery(e.target.value)}
              onKeyPress={e => e.key === 'Enter' ? onSearch() : null }
            />
          </Menu.Item>

      </Menu.Menu>
    </Menu>



{/* Menu Filter Checkbox*/}
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
                    checked={filter === ''}
                    onChange={filterChange}
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
                    checked={filter === 'free-ebooks'}
                    onChange={filterChange}
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
                    checked={filter === 'paid-ebooks'}
                    onChange={filterChange}
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
                    checked={filter === 'full'}
                    onChange={filterChange}
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
                    checked={printType === 'all'}
                    onChange={printTypeChange}
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
                    checked={printType === 'books'}
                    onChange={printTypeChange}
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
                    checked={printType === 'magazines'}
                    onChange={printTypeChange}
                  />
            </List.Content>
          </List.Item>

        </List>
      </Form.Field>
    </Form>


  
{/* Items */}
      <Item.Group style={{margin: '15px'}}>
        {props.books.map(el => (
            <Books key={el.id} el={el} {...props}/>
        ))}
      </Item.Group>



{/* Scroll */}
      <div>
        {props.isLoading && <Loader active inline='centered' />}

        {props.startIndex !== 0 && !props.isLoading && props.isError && (<div>
          <div>Something went wrong...</div>
          <button onClick={() => onClick()}>Try Again</button>
        </div>)}

      </div>

    </div>
  )
}


const mapStateToProps = (state) => ({
  books: state.booksPages.books,
  maxResults: state.booksPages.maxResults,
  startIndex: state.booksPages.startIndex,
  isLoading: state.booksPages.isLoading,
  isError: state.booksPages.isError,
  totalItems: state.booksPages.totalItems,
});

export default compose(
    connect(mapStateToProps, {searchBooksThunk}),
    // withAuthRedirect
  )(BooksContainer);