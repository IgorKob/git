import React from 'react';
import { Button, Header, Icon, Item, Rating } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';

const Books = (props) => {
    const fakeImg = 'https://react.semantic-ui.com/images/wireframe/white-image.png'

      return (
        <>
          <Item>
            {/* <Item.Image size='tiny' src={props.el.volumeInfo.imageLinks.smallThumbnail} /> */}
            <Item.Image  src={props.el.volumeInfo.imageLinks ? props.el.volumeInfo.imageLinks.thumbnail : fakeImg } />
            
            <Item.Content>
              <Item.Header as='a'>{props.el.volumeInfo.title && props.el.volumeInfo.title}</Item.Header>
                <Item.Meta>{props.el.volumeInfo.subtitle && props.el.volumeInfo.subtitle}</Item.Meta>
                <Item.Meta>Author: {props.el.volumeInfo.authors && props.el.volumeInfo.authors.map((ell, i) => (<span key={i}>{ell} </span>))}</Item.Meta>
                <Item.Meta>Published: {props.el.volumeInfo.publishedDate && props.el.volumeInfo.publishedDate}</Item.Meta>
                <Item.Meta>Categories: {props.el.volumeInfo.categories && props.el.volumeInfo.categories.map((ell, i) => (<span key={i}>{ell} </span>))}</Item.Meta>
                <Item.Meta>Page count: {props.el.volumeInfo.pageCount && props.el.volumeInfo.pageCount}</Item.Meta>
                <Item.Meta>Language: {props.el.volumeInfo.language && props.el.volumeInfo.language}</Item.Meta>
           
                {props.el.volumeInfo.averageRating ? (<>
                    <Rating icon='star' rating={props.el.volumeInfo.averageRating} maxRating={5} />
                    <span>{props.el.volumeInfo.averageRating}</span>
                  </>) : <Rating rating={0} maxRating={5} />
                }

              <Item.Meta>Price: <span>{props.el.saleInfo.listPrice && props.el.saleInfo.listPrice.amount}</span>
                                <span>{props.el.saleInfo.retailPrice && `/${props.el.saleInfo.retailPrice.amount}`}</span>
                                <span>{props.el.saleInfo.listPrice && props.el.saleInfo.listPrice.currencyCode}</span>
              </Item.Meta>
        
              <Item.Description>
                  <Item.Meta>{props.el.volumeInfo.description}</Item.Meta>
                  <Header as='h3'>
                    Learn More
                  </Header>
              </Item.Description>

                <Item.Extra>Additional Details</Item.Extra>
                <Link to={props.el.volumeInfo.canonicalVolumeLink}>Additional Details</Link>
                <Link to={props.el.volumeInfo.infoLink}>Additional Details</Link>
                <Link to={props.el.volumeInfo.previewLink}>Additional Details</Link>

                <Button size='small' color='green'>
                  <Icon name='download' />
                  Download
                </Button>

                <Button animated>
                  <Button.Content visible>Next</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
                <Button animated='vertical'>
                  <Button.Content hidden>Shop</Button.Content>
                  <Button.Content visible>
                    <Icon name='shop' />
                  </Button.Content>
                </Button>
                <Button animated='fade'>
                  <Button.Content visible>Sign-up for a Pro account</Button.Content>
                  <Button.Content hidden>$12.99 a month</Button.Content>
                </Button>

              </Item.Content>
          </Item>
        </>
      )

}

export default Books;

