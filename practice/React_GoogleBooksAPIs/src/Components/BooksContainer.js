import React from 'react';
import {Item} from 'semantic-ui-react';
import Books from './Books';

const BooksContainer = (props) => {

  const addFavouritesBook = (id) => {
    props.favouritesBookThunk(id);
  };

  return (<>
      <Item.Group style={{margin: '15px'}}>
        {props.books.map(el => (
            <Books key={el.id} el={el} {...props} 
                   addFavouritesBook={addFavouritesBook}
                   favouritesBook={props.favouritesBook}
                   />
        ))}
      </Item.Group>
  </>)
}

export default BooksContainer;
