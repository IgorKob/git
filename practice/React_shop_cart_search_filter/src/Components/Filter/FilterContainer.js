import axios from 'axios';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { 
    sort_price_upActionCreater, 
    sort_price_downActionCreater, 
    sort_authorActionCreater, 
    sort_ratingActionCreater, 
    search_filterActionCreater,
    add_productActionCreater,
    all_productThunk,
} from './../../Redux/productList_reducer';
import Filter from './Filter';

const MenuExampleTabularOnTop = (props) => {
  const [activeItem, setActiveItem] = useState('all');
  const [value, setValue] = useState('');

  const handleItemClick = (e, { name }) => {
      setActiveItem(name);
      switch(name) {
        case 'all':
          props.all_productThunk()
          return;
        case 'price up':
          props.sort_price_upActionCreater()
          return;
        case 'price down':
          props.sort_price_downActionCreater()
          return;
        case 'author':
          props.sort_authorActionCreater()
          return;
        case 'rating':
          props.sort_ratingActionCreater()
          return;
        default:
            return;
      }
    };

    const search_filter = (e) => {
      setValue(e.target.value)

        const fetch = async () => {
            if (true) {
                const res = await axios.get('./books.json');
                const product = props.add_productActionCreater(res.data);
                if (res) {
                  props.search_filterActionCreater(e.target.value);
                }
          }
        };
        fetch();

    };

    return <Filter {...props} 
                  value={value}
                  activeItem={activeItem}
                  handleItemClick={handleItemClick}
                  search_filter={search_filter}
                  />
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {
    sort_price_upActionCreater,
    sort_price_downActionCreater,
    sort_authorActionCreater,
    sort_ratingActionCreater,
    search_filterActionCreater,
    add_productActionCreater,
    all_productThunk,
})(MenuExampleTabularOnTop);