function PopupWithForm({isOpen, onClose, name, title, children}) {
  const popupClassName = `popup ${isOpen ? 'popup_visible' : '' }`;
	
	return (
    <div className={popupClassName} id={name}>
      <div className="popup__container">
        <button
          aria-label="Закрыть"
          className={`popup__close popup__close_type_${name} button-clickable cursor-pointer`}
          type="button"
					onClick={onClose}
        ></button>
        <h2 className="popup__name">{title}</h2>
        <form
          name={`${name}-form`}
          action="#"
          className="popup__form"
        >
          {children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;