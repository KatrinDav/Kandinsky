import React from 'react';

const Item = ({ src, title }) => {
    return (
        <div className="art-item">
            <img src={src} alt='art' />
            <div className="overlay">{title}</div>
        </div>
    );
}

export default Item;