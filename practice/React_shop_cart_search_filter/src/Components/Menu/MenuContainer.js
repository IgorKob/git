import React from 'react'
import { connect } from 'react-redux';
import MenuExampleSecondary from './Menu';
import { del_to_cartActionCreater } from './../../Redux/productList_reducer';


const MenuContainer = (props) => {
  const sum = props.cart.reduce((sum, el) => sum += Number(el[0].price), 0);
  return <MenuExampleSecondary {...props} sum={sum}/>
};

const mapStateToProps = (state) => ({
  cart: state.productList.cart,
})

export default connect(mapStateToProps, {del_to_cartActionCreater})(MenuContainer);