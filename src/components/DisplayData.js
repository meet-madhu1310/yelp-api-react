import React from 'react'

const DisplayData = (props) => (
    <div className="display-container">
        <div className="imageContainer">
            <img src={props.image} alt='Image' />
        </div>
    </div>
)

export default DisplayData