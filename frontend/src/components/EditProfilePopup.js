import React from "react"
import PopupWithForm from './PopupWithForm.js'
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]);

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleChangeName = (evt) => {
        setName(evt.target.value);
      };
    
      const handleChangeDescription = (evt) => {
        setDescription(evt.target.value);
      };
    
      function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateUser({
          name: name,
          about: description,
        });
      }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            name="edit-profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
        >
            <input onChange={handleChangeName} type="text" name="name" id="nameInput" value={name || ''} placeholder="Имя"
                className="popup__input popup__input_name" minLength={2} maxLength={40} required />
            <span className="nameInput-error popup__error"></span>
            <input onChange={handleChangeDescription} type="text" name="about" id="jobInput" value={description || ''}
                placeholder="Вид деятельности" className="popup__input popup__input_job" minLength={2}
                maxLength={200} required />
            <span className="jobInput-error popup__error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;