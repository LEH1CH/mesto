import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards, config } from "./constants.js";

//Элементы .popup
const profilePopup = document.querySelector(".popup_for_edit-profile");
const cardPopup = document.querySelector(".popup_for_add-card");
const imagePopup = document.querySelector(".popup_for_full-image");

//Элементы .profilePopup
const inputNameField = profilePopup.querySelector(".popup__input_name");
const inputProfField = profilePopup.querySelector(".popup__input_job");

//Элементы .cardPopup
const inputPlaceField = cardPopup.querySelector(".popup__input_card-name");
const inputLinkField = cardPopup.querySelector(".popup__input_card-link-image");

//Элементы .imagePopup
const popupImage = imagePopup.querySelector(".popup__full-image");
const popupImageTitle = imagePopup.querySelector(".popup__caption");

//Элементы на главной странице
const currentNameValue = document.querySelector(".profile__info-name");
const currentProfValue = document.querySelector(".profile__info-job");
const editButton = document.querySelector(".profile__button_edit");
const addButton = document.querySelector(".profile__button_add");

//Блок Elements для добавления карточек>
const elements = document.querySelector(".cards");

//Id шаблона вёрстки новой карточки
const newCardTemplate = "#article-id";

//Функция включения popup
const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  popup.addEventListener("mousedown", handlerPopupCloseOnClick);
  window.addEventListener("keydown", handlerPopupCloseOnEscKeyDown);
};

function handlerPopupCloseOnClick(evt) {
  if (Array.from(evt.target.classList).includes("popup_opened")) {
    closePopup(evt.target);
  }
}

function handlerPopupCloseOnEscKeyDown(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

//Функция выключения popup
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  popup.removeEventListener("mousedown", handlerPopupCloseOnClick);
  window.removeEventListener("keydown", handlerPopupCloseOnEscKeyDown);
};

const handleCardClick = (name, link) => {
  popupImageTitle.textContent = name;
  popupImage.src = link;
  popupImage.alt = `Фото ${name}`;
  openPopup(imagePopup);
};

//Выключение соответствующего popup нажатием на крестик
const exitBtns = document.querySelectorAll(".popup__close");
exitBtns.forEach((btn) =>
  btn.addEventListener("click", (evt) =>
    closePopup(evt.target.closest(".popup"))
  )
);

//Функция добавления карточки на страницу
function addCard(card) {
  elements.prepend(card);
}

//Функция создания вёрстки новой карточки
function createNewCard(name, link) {
  const newCard = new Card(name, link, newCardTemplate, handleCardClick);
  const cardElement = newCard.createCard();
  return cardElement;
}

//Цикл добавления всех карточек из списка на страницу
initialCards.forEach((el) => {
  const newCard = createNewCard(el.name, el.link);
  addCard(newCard);
  addCardForm.reset();
});

//Вызов popup-окна редактирования профиля нажатием на кнопку с карандашом
editButton.addEventListener("click", () => {
  inputNameField.value = currentNameValue.textContent;
  inputProfField.value = currentProfValue.textContent;
  openPopup(profilePopup);
  profilePopupFormValidator.resetValidation();
});

//Обработка submit в форме popup-окна редактирования профиля
function handleProfilePopupFormSubmit(evt) {
  evt.preventDefault();
  currentNameValue.textContent = inputNameField.value;
  currentProfValue.textContent = inputProfField.value;
  closePopup(profilePopup);
}

//Добавляем listener для submit на форме изменения данных профиля
document.forms["profilePopupForm"].addEventListener(
  "submit",
  handleProfilePopupFormSubmit
);

//Вызов popup-окна добавления карточки нажатием на кнопку с крестиком
addButton.addEventListener("click", function () {
  openPopup(cardPopup);
  addCardPopupFormValidator.resetValidation();
});

//Обработка submit в форме popup-окна добавления карточки
function handleCardPopupFormSubmit(evt) {
  evt.preventDefault();
  const newCard = createNewCard(inputPlaceField.value, inputLinkField.value);
  addCard(newCard);
  evt.target.reset();
  closePopup(cardPopup);
}

//Добавляем listener для submit на форме добавления карточки
document.forms["addCardForm"].addEventListener(
  "submit",
  handleCardPopupFormSubmit
);

//Создаём экземпляр валидатора формы редактирования данных профиля
const profilePopupFormValidator = new FormValidator(config, profilePopupForm);
profilePopupFormValidator.enableValidation();

//Создаём экземпляр валидатора формы добавления карточек
const addCardPopupFormValidator = new FormValidator(config, addCardForm);
addCardPopupFormValidator.enableValidation();
