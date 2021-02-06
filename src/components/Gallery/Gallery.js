import React from 'react';

import './Gallery.css';

const gallery = (props) => (
    <div className="Gallery" onClick={props.clicked}>
        <img className="GallaryImage" src={props.gallery?.photos[0]?.t} alt="no image"/>
        <span className="Title">Title: {props.gallery.details.name}</span>
        <span className="Price">Price: {props.gallery.price.total}</span>
    </div>
);

export default gallery;