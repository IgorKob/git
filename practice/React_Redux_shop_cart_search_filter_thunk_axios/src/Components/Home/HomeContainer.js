import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { add_productActionCreater } from '../../Redux/productList_reducer';
import { decrementActionCreater } from '../../Redux/productList_reducer';
import { connect } from 'react-redux';
import Home from './Home';
import { add_to_cartActionCreater, sort_price_upActionCreater } from './../../Redux/productList_reducer';

const HomeContainer = (props) => {
    const [loading, setLoading] = useState(false);
    
    const sum_btn = (id) => props.cart.reduce((sum, el) => el[0].id === id ? sum += 1 : sum, 0);

    useEffect(() => {
        const fetch = async () => {
            if (props.product.length === 0) {
                setLoading(true);
                const res = await axios.get('./books.json');
                const product = props.add_productActionCreater(res.data);
                setLoading(false);
            }
        };
        fetch();
    }, [])

    return (
      <Home {...props} loading={loading} sum_btn={sum_btn}/>
    )
}

const mapStateToProps = (state) => ({
    product: state.productList.product,
    cart: state.productList.cart,
});

export default connect(mapStateToProps, {
    add_productActionCreater, 
    add_to_cartActionCreater, 
})(HomeContainer);
