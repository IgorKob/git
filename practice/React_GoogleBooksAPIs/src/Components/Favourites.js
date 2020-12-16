import React from 'react'
import Books from './Books';
import { Item } from 'semantic-ui-react';

const Favourites = (props) => {

    const addFavouritesBook = (id) => {
        props.favouritesBookThunk(id);
      };

    return (
        <Item.Group style={{margin: '15px'}}>
            {!props.favouritesBook.length ? <h1>Not favourites books</h1> : props.favouritesBook.map(el => (
                <Books key={el.id} el={el} {...props}
                       addFavouritesBook={addFavouritesBook}
                       favouritesBook={props.favouritesBook}
                       />
            ))}
        </Item.Group>
    )
}

export default Favourites;
