import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(card) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.data.owner._id === currentUser._id;

    const cardDeleteButtonClassName = (
        `elements__delete ${isOwn ? 'elements__delete_visible' : 'elements__delete_hidden'}`
    );

    const isLiked = card.data.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `elements__like ${isLiked && 'elements__like_active'}`
    );

    const handleClick = () => {
        card.onCardClick(card.data);
    }

    const handleLikeClick = () => {
        card.onCardLike(card);
    }

    const handleDeleteClick = () => {
        card.onCardDelete(card);
    }

    return (
        <li className="template__card card">
            <div className="elements__element">
                <button onClick={handleDeleteClick} type="button" className={cardDeleteButtonClassName}></button>
                <img onClick={handleClick} src={card.link} alt={card.name} className="elements__image" />
                <div className="elements__title">
                    <h2 className="elements__caption">{card.name}</h2>
                    <div className="elements__like-box">
                        <button onClick={handleLikeClick} type="button" className={cardLikeButtonClassName}></button>
                        <span className="elements__like-count">{card.likes}</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Card;