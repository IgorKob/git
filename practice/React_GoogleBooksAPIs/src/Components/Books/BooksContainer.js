import axios from 'axios';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setBooksThunk } from './../../Redux/booksReducer';
import Books from './Books';
import { Item } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const BooksContainer = (props) => {
    
    useEffect(() => {
        props.setBooksThunk();
    },[]);

    return (
        <div>
          <Item.Group>
            {props.books.map(el => (
               <Books key={el.id} el={el} {...props}/>
            ))}
          </Item.Group>


        </div>
    )
}

const mapStateToProps = (state) => ({
    books: state.booksPages.books
});

export default compose(
    connect(mapStateToProps, {setBooksThunk}),
    // withAuthRedirect
  )(BooksContainer);