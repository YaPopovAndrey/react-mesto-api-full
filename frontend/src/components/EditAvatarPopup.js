import React from "react"
import PopupWithForm from './PopupWithForm.js'

function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
      e.preventDefault();
  
      props.onUpdateAvatar({
        avatar: avatarRef.current.value,
      });
  
      avatarRef.current.value = "";
    }
  
    function onClose() {
      props.onClose();
      avatarRef.current.value = "";
    }

    return (
        <PopupWithForm 
            isOpen={props.isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            name="update-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
        >
            <input ref={avatarRef} type="url" name="avatar" id="updateUrlInput" placeholder="Ссылка на картинку"
                        className="popup__input popup__input_update-avatar" required/>
                    <span className="updateUrlInput-error popup__error"></span>
        </PopupWithForm>        
    );
}

export default EditAvatarPopup;