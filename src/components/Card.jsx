import React from 'react';
import cardImage from '../image/card-image.png'


function Card() {
    return (
        <div className="card">
            <img className="card__image" src={cardImage} alt="card-image"/>
            <div className="card-discount">
                <div className="discount">
                    <h1 className="discount__percent">40%</h1>
                    <p className="discount__category">Aлкоголь</p>
                </div>
            </div>
            <div className="card__description">
                <h1 className="card__title">Blackberry</h1>
                <p className="card__subtitle">Освежающий напиток</p>
            </div>
        </div>
    );
}

export default Card;

