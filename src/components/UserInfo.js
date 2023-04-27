export default class UserInfo {
  constructor({ nameSelector, profSelector, avaSelector }) {
    this._nameField = document.querySelector(nameSelector);
    this._profField = document.querySelector(profSelector);
    this._avatar = document.querySelector(avaSelector);
  }

  //Метод получения данных пользователя из соответствующих полей на странице
  getUserInfo() {
    return {
      userName: this._nameField.textContent,
      userJob: this._profField.textContent,
    };
  }

  //Метод установки данных профиля в соответствующие поля на странице
  setUserInfo({ userName = "LEH1CH", userJob = "gamer" }) {
    this._nameField.textContent = userName;
    this._profField.textContent = userJob;
  }

  setUserAvatar({
    link = "https://cdn.fishki.net/upload/post/2018/04/09/2564924/6170e48a79e36114e8dd12a5d96a9745.jpg",
  }) {
    this._avatar.style["background-image"] = `url(${link})`;
  }
}
