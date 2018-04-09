import React from 'react';

export default function History(props) {
    return (
        <div className="history">
            <h2>{props.text}</h2>
        </div>
    )
};

History.defaultProps = {
    text: '#1'
};