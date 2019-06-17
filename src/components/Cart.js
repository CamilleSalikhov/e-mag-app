import React, { Component } from 'react'
import './Cart.css'
export default class Cart extends Component {

    state = {
        goldPrice:this.props.element.priceGoldAlt,
        regularPrice:this.props.element.priceRetailAlt,
        type:'forMeter',
        total:1
    }

    handleChange = (e) => {
        if(e.target.value === 'forMeter') {
            this.setState({
                goldPrice:this.props.element.priceGoldAlt,
                regularPrice:this.props.element.priceRetailAlt,
                type:'forMeter'
            })
        } else {
            this.setState({
                goldPrice:this.props.element.priceGold,
                regularPrice:this.props.element.priceRetail,
                type:'forUnit'
            });
        }
        
    }

    handleDecrease = (e) => {
        if(this.state.total !== 1) {
            this.setState({
                total:this.state.total - 1
            })
        }

    }

    handleIncrease = (e) => {
        this.setState({
            total:this.state.total + 1
        })

    }

    render() {
        const {unit, unitRatioAlt, unitAlt, productId} = this.props.element;
        return (
            <div className='cartContainer'>
              <a className='statusLink' href="#">Наличие</a>
              <p>По карте клуба: <span>{this.state.goldPrice*this.state.total} РУБ</span> <br /> <span className='notImportant'>{this.state.regularPrice*this.state.total} РУБ</span></p>
              <select className='custom-select' onChange={this.handleChange}>
                    <option value='forMeter'>За метр</option>
                    <option value='forUnit'>За упаковку</option>
              </select>
              <div className='unitInfo'>Продается упаковками: 1 {unit} = {unitRatioAlt} {unitAlt}</div>

            <div className='cartPanelContainer'>
                <div className ='cartPanelContainer'>
                    <input className='readOnlyInput' type='text' readOnly value={this.state.total}></input>
                    <div className='buttonContainer'>
                        <button onClick={this.handleIncrease}>▲</button>
                        <button onClick={this.handleDecrease}>▼</button>
                    </div>
                </div>

                <button dataproductid ={productId} className="btn btn-warning"><i className='fa fa-shopping-cart'></i> В КОРЗИНУ</button>
            
            </div>

            </div>
        )
    }
}
