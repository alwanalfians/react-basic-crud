import React from "react";
import './YoutubeComp.scss';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={ props.image } alt=""/>
                <p className="time">{ props.time }</p>
            </div>
            <p className="title">{ props.title }</p>
            <p className="desc">{ props.desc }</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: "Default title",
    desc: 'default description',
    image: "https://picsum.photos/id/232/200/300"
}

export default YoutubeComp