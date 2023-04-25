export default class Card {
  constructor(
    { name, link },
    newCardTemplate,
    handleCardClick,
    cardId = "",
    isMine = true,
    likes = 0,
    isLikedByMe = false,
    putLike,
    deleteLike,
    deleteCard
  ) {
    //Обязательные параметры и методы карточек
    this._name = name;
    this._link = link;
    this._newCardTemplate = newCardTemplate;
    this._handleCardClick = handleCardClick;

    //Параметры карточек, загржаемых с сервера
    this._cardId = cardId;
    this._isMine = isMine;
    this._likes = likes;
    this._isLikedByMe = isLikedByMe;

    //Методы карточек
    this._putLike = putLike;
    this._deleteLike = deleteLike;
    this._deleteCard = deleteCard;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._newCardTemplate)
      .content.firstElementChild.cloneNode(true);
    return cardTemplate;
  }

  _handleRemoveClick = () => {
    console.log(this._newCard);
    this._deleteCard(this._cardId, this._newCard);
  };

  _handleLikeClick = () => {
    if (this._isLikedByMe) this._deleteLike(this._cardId, this);
    else this._putLike(this._cardId, this);
  };

  _setEventListeners = () => {
    this._likeBtn.addEventListener("click", this._handleLikeClick);
    this._isMine
      ? this._delBtn.addEventListener("click", this._handleRemoveClick)
      : (this._delBtn.style.display = "none");
    this._newCardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
  };

  setLikes(likes = this._likes, isLiked = this._isLikedByMe) {
    this._likesCounter.textContent = likes;
    if (isLiked) this._likeBtn.classList.add("cards__like_active");
    else this._likeBtn.classList.remove("cards__like_active");
    this._isLikedByMe = isLiked;
  }

  createCard() {
    this._newCard = this._getTemplate();
    this._newCardImage = this._newCard.querySelector(".cards__image");
    this._newCardImage.src = this._link;
    this._newCardImage.alt = `Фото ${this._name}`;
    this._newCard.querySelector(".cards__title").textContent = this._name;
    this._likesCounter = this._newCard.querySelector(".cards__likes");
    this._delBtn = this._newCard.querySelector(".cards__delete");
    this._likeBtn = this._newCard.querySelector(".cards__like");
    this.setLikes();
    this._setEventListeners();
    return this._newCard;
  }
}
