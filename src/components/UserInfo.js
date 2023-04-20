export default class UserInfo {
  constructor({ nameSelector, profSelector }) {
    this._nameField = document.querySelector(nameSelector);
    this._profField = document.querySelector(profSelector);
  }

  //Метод получения данных пользователя из соответствующих полей на странице
  getUserInfo() {
    return {
      userName: this._nameField.textContent,
      userJob: this._profField.textContent,
    };
  }

  //Метод установки данных профиля в соответствующие поля на странице
  setUserInfo({ userName, userJob }) {
    this._nameField.textContent = userName;
    this._profField.textContent = userJob;
  }
}
