import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Favourites from './Components/Favourites';
import NavMenu from './Components/NavMenu';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {Loader} from 'semantic-ui-react'
import { searchBooksThunk, favouritesBookThunk, updateFavouritesBookActionCreator } from './Redux/booksReducer';
import MenuFilter from './Components/MenuFilter';
const BooksContainer = React.lazy(() => import('./Components/BooksContainer'))


const App = (props) => {

  const [query, setQuery] = useState('search+terms');
  const [filter, setFilter] = useState('');
  const [printType, setPrintType] = useState('all');
  const [orderBy, setOrderBy] = useState(false);
  const [langRestrict, setLangRestrict] = useState(false);
    
  // start search
  useEffect(() => {
      props.searchBooksThunk('search+terms', 0);
  },[]);

  // LocalStorage
  useEffect(() => {
    const myFavouritesBooks = JSON.parse(localStorage.getItem('mybooks'));

    if (myFavouritesBooks.length > 0) {
      props.updateFavouritesBookActionCreator(myFavouritesBooks);      
    }

  }, []);
  
  
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

  // Checkbox filter
  const filterChange = (e) => setFilter(e.currentTarget.firstChild.defaultValue)

  // Checkbox printType
  const printTypeChange = (e) => setPrintType(e.currentTarget.firstChild.defaultValue)

  // radio orderByChange
  const orderByChange = () => setOrderBy(!orderBy);

  // radio lang
  const langChange = () => setLangRestrict(!langRestrict);

  return (
    <container className={`wrapper`}> 
      <section className={'wrapper2'}> 

        {/* main menu */}
        <NavMenu langRestrict={langRestrict}
              langChange={langChange}
              orderBy={orderBy}
              orderByChange={orderByChange}
              totalItems={props.totalItems}
              query={query}
              onSearch={onSearch}
              setQuery={setQuery}
              favouritesBook={props.favouritesBook}
        />


        {/* Router */}
        <React.Suspense fallback={<Loader active inline='centered' />}>
          <Switch>

            <Route path="/Messages">
              {/* <Messages /> */}
            </Route>

            <Route exact path="/favourites">
                <Favourites favouritesBook={props.favouritesBook}
                            favouritesBookThunk={props.favouritesBookThunk}
                />
            </Route>

            <Route exact path="/">
              <>
                <MenuFilter filterChange={filterChange}
                            filter={filter}
                            printType={printType}
                            printTypeChange={printTypeChange}
                />
                <BooksContainer books={props.books} 
                                favouritesBook={props.favouritesBook}
                                favouritesBookThunk={props.favouritesBookThunk}
                                />   
              </>
            </Route>

          </Switch>
        </React.Suspense>


        {/* Scroll */}
        <div>
          {props.isLoading && <Loader active inline='centered' />}
          {props.startIndex !== 0 && !props.isLoading && props.isError && (<div>
            <div>Something went wrong...</div>
            <button onClick={() => onClick()}>Try Again</button>
          </div>)}
        </div>

      </section>
    </container>
  );
}


const mapStateToProps = (state) => ({
  books: state.booksPages.books,
  maxResults: state.booksPages.maxResults,
  startIndex: state.booksPages.startIndex,
  isLoading: state.booksPages.isLoading,
  isError: state.booksPages.isError,
  totalItems: state.booksPages.totalItems,
  favouritesBook: state.booksPages.favouritesBook, 
});

export default compose(
    connect(mapStateToProps, {searchBooksThunk, favouritesBookThunk, updateFavouritesBookActionCreator}),
    // withAuthRedirect
  )(App);