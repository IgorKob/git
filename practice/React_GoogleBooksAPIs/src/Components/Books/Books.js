import React, { useEffect } from 'react';
import { Image, Item } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const Books = (props) => {
    const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'
    return (
      <>
        <Item>
          {/* <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' /> */}
          <Item.Image size='tiny' src={props.el.volumeInfo.imageLinks.smallThumbnail} />
          
          <Item.Content>
            <Item.Header as='a'>{props.el.volumeInfo.title}</Item.Header>
              <Item.Meta>{props.el.volumeInfo.subtitle}</Item.Meta>
              <Item.Meta>Published: {props.el.volumeInfo.publishedDate} Rating: {props.el.volumeInfo.averageRating}</Item.Meta>
              <Item.Meta>Categories: {props.el.volumeInfo.categories && props.el.volumeInfo.categories.map((ell, i) => (<span key={i}>{ell} </span>))}</Item.Meta>
              {/* <Item.Meta>Author: {props.el.volumeInfo.authors && props.el.volumeInfo.authors.map((ell, i) => (<span key={i}>{ell} </span>))}</Item.Meta> */}
            <Item.Description>
                {/* <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' /> */}
                <Image src={props.el.volumeInfo.description} />
            </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
        </Item>
      </>
    )
}

export default Books;

