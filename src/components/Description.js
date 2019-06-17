import React, { Component } from 'react';
import './Description.css'

export default class Description extends Component {
    render() {
        const {code, title, assocProducts} = this.props.element;
        return (
        <div className='descContainer'>
            <div className='notImportant'>{`Код: ${code}`}</div>
            <h3><a className='blackLink' href="#">{title}</a></h3>
            <p className='additional'><strong>Могут понадобиться:</strong><span className='notImportant'>{assocProducts}</span></p>
        </div>
        )
    }
}
