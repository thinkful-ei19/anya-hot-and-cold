import React from 'react';

export default function Description(props) {
    return (
        <div className="description">
            <h2>{props.text}</h2>
        </div>
    )
};

Description.defaultProps = {
    text: 'Enter a number'
};