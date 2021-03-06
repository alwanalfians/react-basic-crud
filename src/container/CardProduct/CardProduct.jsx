import React, {Component} from "react";

class CardProduct extends Component {
    state = {
        order: 4,
        name: "Alwan"
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render() {
        return (
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                </div>
                <p className="product-title">Orange</p>
                <p className="product-price">Rp 8,000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order}/>
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;