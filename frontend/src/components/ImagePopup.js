function ImagePopup(card) {
    return (
        <div className={`popup popup_img ${card.isOpen ? 'popup_is-opened' : ''}`}>
            <div className="popup__box">
                <figure className="popup__container">
                    <img src={card.data.link} alt={card.data.name} className="popup__image"/>
                    <figcaption className="popup__caption">{card.data.name}</figcaption>
                </figure>
                <button onClick={card.onClose} type="button" aria-label="Закрыть"
                    className="popup__button-close popup__button-close_img"></button>
            </div>
        </div>
    );
}

export default ImagePopup;