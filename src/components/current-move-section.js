import React from 'react';

export default function CurrentMove(props) {
    return (
        <div className="current-move">
            <h2>{props.text}</h2>
        </div>
    )
};

CurrentMove.defaultProps = {
    text: 'Your current move is number {}'
};