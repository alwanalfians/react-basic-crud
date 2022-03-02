import React, {Component, Fragment} from "react";
import CardProduct from "../CardProduct/CardProduct";
import './Product.scss'

class Product extends Component {
    state = {
        order: 4,
        name: "Alwan"
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <p>Store</p>
                    </div>
                    <div className="trolley">
                        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)}/>
            </Fragment>
        );
    }
}

export default Product;