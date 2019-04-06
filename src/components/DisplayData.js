import React from 'react'

const DisplayData = (props) => (
    <div className="display-container">
        <div className="imageContainer">
            <img src={props.image} alt='Image' />
        </div>

        <div className="dataContainer">
            <p>Name: {props.name}</p>
            <p>Open: {props.is_closed}</p>
            <p>Price: {props.price}</p>
            <p>No of Reviews: {props.review_count}</p>
            <p>Ratings: {props.rating}</p>
            <p>Location: {props.location.address1}</p>
            <p>Phone: {props.phone}</p>
            <p>Yelp Link: {props.url}</p>
        </div>
    </div>
)

export default DisplayData