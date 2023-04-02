export class Card {
  constructor(name, link, newCardTemplate, handleCardClick) {
    this._name = name;
    this._link = link;
    this._newCardTemplate = newCardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._newCardTemplate)
      .content.firstElementChild.cloneNode(true);
    return cardTemplate;
  }

  _handleRemoveClick = () => {
    this._newCard.remove();
    this._newCard = null;
  };

  _handleLikeClick = (evt) => {
    evt.target.classList.toggle("cards__like_active");
  };

  _setEventListeners = () => {
    this._newCard
      .querySelector(".cards__like")
      .addEventListener("click", this._handleLikeClick);
    this._newCard
      .querySelector(".cards__delete")
      .addEventListener("click", this._handleRemoveClick);
    this._newCardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  };

  createCard() {
    this._newCard = this._getTemplate();
    this._newCardImage = this._newCard.querySelector(".cards__image");
    this._newCardImage.src = this._link;
    this._newCardImage.alt = `Фото ${this._name}`;
    this._newCard.querySelector(".cards__title").textContent = this._name;
    this._setEventListeners();
    return this._newCard;
  }
}

export default Card;
