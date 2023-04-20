import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";
import { initialCards, config } from "../utils/constants.js";

//Элементы на главной странице
const editButton = document.querySelector(".profile__button_edit");
const addButton = document.querySelector(".profile__button_add");

//Id шаблона вёрстки новой карточки
const newCardTemplate = "#article-id";

//Создаём экземпляр валидатора формы редактирования данных профиля
const profilePopupFormValidator = new FormValidator(config, profilePopupForm);
profilePopupFormValidator.enableValidation();

//Создаём экземпляр валидатора формы добавления карточек
const addCardPopupFormValidator = new FormValidator(config, addCardForm);
addCardPopupFormValidator.enableValidation();

//Создаём экземпляр попапа с изображением
const iPopup = new PopupWithImage({
  popupSelector: ".popup_for_full-image",
  imageSelector: ".popup__full-image",
  subtitleSelector: ".popup__caption",
});

const handleCardClick = (cardData) => {
  iPopup.openPopup(cardData);
};

//Создаём экземпляр класса Section
const section = new Section(
  {
    data: initialCards,
    renderer: (cardData) => {
      const newCard = new Card(cardData, newCardTemplate, handleCardClick);
      const cardElement = newCard.createCard();
      return cardElement;
    },
  },
  ".cards"
);

//Отрисовываем карточки из initialCards
section.renderInitialCards();

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  profSelector: ".profile__info-job",
});

//Создаём экземпляр попапа с формой редактирования данных профиля
const pPopup = new PopupWithForm(
  {
    popupSelector: ".popup_for_edit-profile",
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
  },

  (values) => {
    userInfo.setUserInfo(values);
  }
);

//Создаём экземпляр попапа с формой добавления карточки места

const cPopup = new PopupWithForm(
  {
    popupSelector: ".popup_for_add-card",
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
  },

  (cardData) => {
    section.renderCard(cardData);
  }
);

//Вызов popup с формой редактирования данных профиля нажатием на кнопку с ручкой
editButton.addEventListener("click", () => {
  const values = userInfo.getUserInfo();
  pPopup.setInputValues(values);
  pPopup.openPopup();
  profilePopupFormValidator.resetValidation();
});

//Вызов popup-окна добавления карточки нажатием на кнопку с крестиком
addButton.addEventListener("click", function () {
  cPopup.openPopup();
  addCardPopupFormValidator.resetValidation();
});

iPopup.setEventListeners();
cPopup.setEventListeners();
pPopup.setEventListeners();
