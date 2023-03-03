/*Выводим сообщение об ошибке и меняем стиль поля ввода на содержащий ошибку*/
const showInputError = (formElement, inputElement, errorMessage, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(object.errorClass);
};

/*Скрываем сообщение об ошибке и меняем стиль поля ввода на нормальный*/
const hideInputError = (formElement, inputElement, object) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.classList.remove(object.errorClass);
  errorElement.textContent = "";
};

/*Функция проверяет валидность поля*/
const checkInputValidity = (formElement, inputElement, object) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      object
    );
  } else {
    hideInputError(formElement, inputElement, object);
  }
};

const setEventListeners = (formElement, object) => {
  const inputList = Array.from(
    formElement.querySelectorAll(object.inputSelector)
  );
  const buttonElement = formElement.querySelector(object.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, object);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, object);
      toggleButtonState(inputList, buttonElement, object);
    });
  });
};

const validateFormNow = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(object.inputSelector)
  );
  const buttonElement = formElement.querySelector(object.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, object);
  inputList.forEach((inputElement) => {
    checkInputValidity(formElement, inputElement, object);
  });
};

/*Включаем валидацию для всех форм*/
const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => setEventListeners(formElement, object));
};

/*Проверяем есть ли среди полей ввода формы, которые не проходят валидацию*/
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => !inputElement.validity.valid);
};

/*Смана состояния кнопки с активной на неактивную*/
const toggleButtonState = (inputList, buttonElement, object) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, object);
  } else {
    enableButton(buttonElement, object);
  }
};

const disableButton = (buttonElement, object) => {
  buttonElement.classList.add(object.inactiveButtonClass);
  buttonElement.setAttribute("disable", "");
};

const enableButton = (buttonElement, object) => {
  buttonElement.classList.remove(object.inactiveButtonClass);
  buttonElement.removeAttribute("disable");
};

enableValidation(validationConfig);
