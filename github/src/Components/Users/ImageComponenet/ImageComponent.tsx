import React from 'react';
import './ImageComponent.css'


interface info {
    image:string,
    username:string
}
function ImageComponent(props:info) {

    return (
        <div className="left">
            <img src={props.image} alt="user" width={100}/>
            <h4>{props.username}</h4>
        </div>
    );
}

export default ImageComponent;