import React from 'react';
import cardImage from '../../image/card-image.png';
import "./card.scss"


function Card({data: {drinkName, description, image}}) {
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
                <h1 className="card__title">{drinkName}</h1>
                <p className="card__subtitle">{description}</p>
            </div>
        </div>
    );
}

export default Card;

