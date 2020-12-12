import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { searchBooksThunk } from './../../Redux/booksReducer';
import Books from './Books';
import { Input, Item, Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const BooksContainer = (props) => {
  const [query, setQuery] = useState();
    
  useEffect(() => {
      props.searchBooksThunk('search+terms', 0);
  },[]);

  const onSearch = () => {
    if (String(query).length === 0) { 
      props.searchBooksThunk('search+terms', 0);
    } else {
      props.searchBooksThunk(query, 0);
    }
  };

  const onClick = () => {
    props.searchBooksThunk(query, props.startIndex + props.maxResults);
  };

  const onScroll = () => {
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
      && props.books.length
      && !props.isLoading
      && !props.isError
      && onClick();
    }

  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    return () => window.removeEventListener('scroll', onScroll, false);
});


  return (
    <div>

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

      <div>Search result: {props.totalItems}</div>

      <Item.Group>
        {props.books.map(el => (
            <Books key={el.id} el={el} {...props}/>
        ))}
      </Item.Group>


      <div>
        {props.isLoading && <Loader active inline='centered' />}

        {props.startIndex !== 0 && !props.isLoading && props.isError && (<div>
          <div>Something went wrong...</div>
          <button onClick={() => onClick()}>Try Again</button>
        </div>)}

        {/* <button onClick={() => onClick()}>Loading...</button> */}
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