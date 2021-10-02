import React from "react"

function PopupWithForm(props) {
    return (
        <div className= {`popup popup_${props.name} ${props.isOpen && "popup_is-opened"}`}>
            <div className={`popup__content popup__content_${props.name}`}>
                <form onSubmit={props.onSubmit} action="#" name={props.name} className={`popup__form popup__form_${props.name}`}>
                    <h2 className={`popup__title popup__title_${props.name}`}>{props.title}</h2>
                    {props.children}
                    <button type="submit" className={`popup__button popup__button_${props.name}`}>{props.buttonText}</button>
                    <button onClick={props.onClose} type="button" aria-label="Закрыть"
                        className={`popup__button-close popup__button-close_${props.name}`}></button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;