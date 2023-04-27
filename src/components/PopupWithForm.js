import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(
    { popupSelector, formSelector, inputSelector, sbmtBtnSelector },
    submitCallback
  ) {
    super(popupSelector);
    this._form = this._popup.querySelector(formSelector);
    this._inputList = this._popup.querySelectorAll(inputSelector);
    this._sbmtBtn = this._form.querySelector(sbmtBtnSelector);
    this._sbmtBtnInitialText = this._sbmtBtn.textContent;
    this._submitCallback = submitCallback;
  }

  //Метод изменения надписи кнопки во время загрузки данных
  _renderSaving(isSaving) {
    if (isSaving) {
      this._sbmtBtn.textContent = "Сохранение...";
    } else {
      this._sbmtBtn.textContent = this._sbmtBtnInitialText;
    }
  }

  //Обработчик сабмита формы
  _handlerSubmitForm = (evt) => {
    evt.preventDefault();
    this._renderSaving(true);
    const values = this._getInputValues();
    this._submitCallback(values);
  };

  //Метод установки слушателей событий на попап и форму
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handlerSubmitForm);
  }

  //Метод получения данных полей ввода
  _getInputValues() {
    const values = {};
    Array.from(this._inputList).forEach((el) => (values[el.name] = el.value));
    return values;
  }

  //Метод установки данных полей ввода (для полей формы редактирования данных профиля)
  setInputValues(values) {
    this._inputList.forEach((el) => (el.value = values[el.name]));
  }

  //Закрытия попапа
  close() {
    super.close();
    setTimeout(() => {
      this._renderSaving(false);
      this._form.reset();
    }, 400);
  }
}
