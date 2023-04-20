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
const cardsSectionSelector = ".cards";

const popupImageSelector = ".popup_for_full-image";
const popupProfileSelector = ".popup_for_edit-profile";
const popupAddCardSelector = ".popup_for_add-card";

//Создаём экземпляр валидатора формы редактирования данных профиля
const profilePopupFormValidator = new FormValidator(config, profilePopupForm);
profilePopupFormValidator.enableValidation();

//Создаём экземпляр валидатора формы добавления карточек
const addCardPopupFormValidator = new FormValidator(config, addCardForm);
addCardPopupFormValidator.enableValidation();

//Создаём экземпляр попапа с изображением
const iPopup = new PopupWithImage(popupImageSelector);

//Создаём экземпляр попапа с формой редактирования данных профиля
const pPopup = new PopupWithForm(popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
  pPopup.close();
});

//Создаём экземпляр попапа с формой добавления карточки места
const cPopup = new PopupWithForm(popupAddCardSelector, (cardData) => {
  section.setItem(generateCard(cardData));
  cPopup.close();
});

const handleCardClick = (cardData) => {
  iPopup.open(cardData);
};

//Создаём экземпляр класса Section
const section = new Section(
  {
    data: initialCards,
    renderer: (cardData) => {
      section.setItem(generateCard(cardData));
    },
  },
  cardsSectionSelector
);

const generateCard = (cardData) => {
  const newCard = new Card(cardData, newCardTemplate, handleCardClick);
  return newCard.createCard();
};

const userInfo = new UserInfo({
  nameSelector: ".profile__info-name",
  profSelector: ".profile__info-job",
});

//Вызов popup с формой редактирования данных профиля нажатием на кнопку с ручкой
editButton.addEventListener("click", () => {
  const values = userInfo.getUserInfo();
  pPopup.setInputValues(values);
  pPopup.open();
  profilePopupFormValidator.resetValidation();
});

//Вызов popup-окна добавления карточки нажатием на кнопку с крестиком
addButton.addEventListener("click", function () {
  cPopup.open();
  addCardPopupFormValidator.resetValidation();
});

//Отрисовываем карточки из initialCards
section.renderItems();

iPopup.setEventListeners();
cPopup.setEventListeners();
pPopup.setEventListeners();
