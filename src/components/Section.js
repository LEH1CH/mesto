export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  //Метод создания одиночной карточки и добавления её в DOM
  renderCard(cardData) {
    const cardElement = this._renderer(cardData);
    this.addItem(cardElement);
  }

  //Метод создания карточек исходного массива
  renderInitialCards() {
    this._renderedItems.forEach((item) => this.renderCard(item));
  }

  //Метод добавления вёрстки карточки в DOM
  addItem(element) {
    this._container.prepend(element);
  }
}
