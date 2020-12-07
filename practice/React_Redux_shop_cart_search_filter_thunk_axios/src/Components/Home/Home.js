import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import MenuExampleTabularOnTop from '../Filter/FilterContainer'
import Spinner from '../Spinner/Spinner'

const src = 'https://react.semantic-ui.com/images/wireframe/white-image.png'

const Home = (props) => {
    return (
      <>
        <MenuExampleTabularOnTop>
            <Card.Group itemsPerRow={4}>
                {props.loading ? (<Spinner />) : (
                props.product && props.product.map(el => (
                <Card key={el.id}>
                    <Image src={src || el.image} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header>{el.title}</Card.Header>
                    <Card.Meta>
                    <span className='date'>{el.author}</span>
                    </Card.Meta>
                    <Card.Description>{el.price} грн</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                <Button onClick={() => props.add_to_cartActionCreater(el.id)} fluid>{`Add to cart ${props.sum_btn(el.id) > 0 ? props.sum_btn(el.id) : ''}`}</Button>
                    </Card.Content>
                </Card>
                )))}
            </Card.Group>
        </MenuExampleTabularOnTop>
      </>
    )
}

export default Home;