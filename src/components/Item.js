import React, { Component } from 'react';
import Description from './Description';
import Cart from './Cart';
import './Item.css'

export default class Item extends Component {
    render() {
    const {primaryImageUrl} = this.props.element;
       
        return (
            <div className='itemContainer'>
              <div className='imgContainer'>
                  <img width='80%' src={primaryImageUrl} alt='product'></img>
              </div>
              <Description element = {this.props.element} />
              <Cart element={this.props.element} />
            </div>
        )
    }
}
