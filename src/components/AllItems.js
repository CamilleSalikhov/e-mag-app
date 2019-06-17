import React, { Component } from 'react';
import Item from './Item'

export default class AllItems extends Component {
    render() {
        let renderItems = this.props.items.map((e,index) => <Item key={index} element ={e} /> )

        return (
            <div className='itemsContainer'>
                {renderItems}
            </div>
        )
    }
}
