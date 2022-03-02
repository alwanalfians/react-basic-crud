import React, {Component} from "react";
import YoutubeComp from "../../components/YoutubeComponents/YoutubeComp";
import Product from "../Product/Product";

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YoutubeComp
                    image="https://picsum.photos/id/217/200/300"
                    time="7.12"
                    title="Basic React Crud - 1"
                    desc="this ini desc content 1"/>
                <YoutubeComp
                    image="https://picsum.photos/id/237/200/300"
                    time="8.34"
                    title="Basic React Crud - 2"
                    desc="this ini desc content 2"/>
                <YoutubeComp/> */}
                <p>Counter</p>
                <hr/>
                <Product/>
            </div>
        )
    }
}

export default Home;