import zaliv from "../images/zaliv.jpg";
import ozero from "../images/gora1.jpg";
import doroga from "../images/doroga.jpg";
import ostrovok from "../images/gora3.jpg";
import otrajenie from "../images/gora4.jpg";
import gori from "../images/gora5.jpg";

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
