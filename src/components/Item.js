import React from 'react';

const Item = ({ item, src, title, openModal }) => {
    return (
        <div className="item_art" onClick={() => openModal(item)} >
            <img src={src} alt='art' />
            <div className="overlay">{title}</div>
        </div>
    );
}

export default Item;