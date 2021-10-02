import React from "react"
import PopupWithForm from './PopupWithForm.js'

function AddPlacePopup(props) {
    const [newPlaceName, setNewPlaceName] = React.useState("");
    const [newPlaceLink, setNewPlaceLink] = React.useState("");
  
    const handlePlaceName = (evt) => {
      setNewPlaceName(evt.target.value);
    };
  
    const handlePlaceLink = (evt) => {
      setNewPlaceLink(evt.target.value);
    };
  
    function handleAddPlaceSubmit(evt) {
      evt.preventDefault();
      props.setNewCard({
        name: newPlaceName,
        link: newPlaceLink,
      });
      resetInputPopupAdd();
    }
  
    function resetInputPopupAdd() {
      setNewPlaceName("");
      setNewPlaceLink("");
    }
  
    function onClose() {
      props.onClose();
      resetInputPopupAdd();
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={onClose}
            onSubmit={handleAddPlaceSubmit}
            name="popup_add"
            title="Новое место"
            buttonText="Создать"
        >
            <input onChange={handlePlaceName} type="text" name="name" id="titleInput" value={newPlaceName} placeholder="Название"
                className="popup__input popup__input_title" minLength={2} maxLength={30} required />
            <span className="titleInput-error popup__error"></span>
            <input onChange={handlePlaceLink} type="url" name="link" id="urlInput" value={newPlaceLink} placeholder="Ссылка на картинку"
                className="popup__input popup__input_link" required />
            <span className="urlInput-error popup__error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;