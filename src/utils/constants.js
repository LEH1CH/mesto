const zaliv = new URL("../images/zaliv.jpg", import.meta.url);
const ozero = new URL("../images/gora1.jpg", import.meta.url);
const doroga = new URL("../images/doroga.jpg", import.meta.url);
const ostrovok = new URL("../images/gora3.jpg", import.meta.url);
const otrajenie = new URL("../images/gora4.jpg", import.meta.url);
const gori = new URL("../images/gora5.jpg", import.meta.url);

export const initialCards = [
  {
    name: "Залив",
    link: zaliv,
  },
  {
    name: "Озеро",
    link: ozero,
  },
  {
    name: "Дорога",
    link: doroga,
  },
  {
    name: "Островок",
    link: ostrovok,
  },
  {
    name: "Отражение",
    link: otrajenie,
  },
  {
    name: "Горы",
    link: gori,
  },
];

export const config = {
  formSelector: ".popup__container",
  fieldSetSelector: ".popup__items",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
