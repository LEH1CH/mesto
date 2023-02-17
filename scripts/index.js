const initialPlace = [
  {
    name: 'Залив',
    link: './images/krasivii-zaliv.jpg'
  },
  {
    name: 'Озеро',
    link: './images/gora1.jpg'
  },
  {
    name: 'Закат',
    link: './images/gora2.jpg'
  },
  {
    name: 'Островок',
    link: './images/gora3.jpg'
  },
  {
    name: 'Отражение',
    link: './images/gora4.jpg'
  },
  {
    name: 'Горы',
    link: './images/gora5.jpg'
  }
];

/*Глобальное обращение*/
const popups = document.querySelectorAll('.popup');                                      // Находим все возможные попапы

/*Попап с редактированием профиля*/
const profileEditButton = document.querySelector('.button_type_edit');                   // Кнопка редактирования профиля
const popupProfile = document.querySelector('.popup_for_edit-profile');                  // Попап профиля
const profileName = document.querySelector('.profile__info-name');                       // Имя в профиле
const profileJob = document.querySelector('.profile__info-job');                         // Строка с родом занятий в профиле
const profileForm = popupProfile.querySelector('.popup__container');                     // Форму профиля
const inputProfileName = profileForm.querySelector('.popup__input_name');                // Поля формы профиля
const inputProfileJob = profileForm.querySelector('.popup__input_job');                  // Поля формы профиля

/*Попап редактирования карточки и добавления картинки*/
const popupAddPlace = document.querySelector('.popup_for_add-place');                    // Добавления карточки
const addPlaceButton = document.querySelector('.button_type_add');                       // Кнопка добавления карточки
const addPlaceForm = popupAddPlace.querySelector('.popup__container');                   // Форма добавления карточек
const inputAddPlaceName = popupAddPlace.querySelector('.popup__input_place-name');       // Поле изменения карточки
const inputAddPlaceLink = popupAddPlace.querySelector('.popup__input_place-link-image'); // Поле для ссылки на изображение

/*Создание карточки и открытие картинок */
const placesList = document.querySelector('.places__list');                              // Место для карточек
const placeTemplate = document.querySelector('.place-template').content;                 // Содержимое темплейта с карточкой
const popupImage = document.querySelector('.popup_for_full-image');                      // Попап с картинкой
const fullImage = popupImage.querySelector('.popup__full-image');                        // Картинка в попапе
const fullImageCaption = popupImage.querySelector('.popup__caption');                    // Подпись в попапе




/*Добавление класса popup_opened показывающий в коде открыт попап или нет*/
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

profileEditButton.addEventListener('click', () => openPopup(popupProfile));
addPlaceButton.addEventListener('click', () => openPopup(popupAddPlace));


/*Удаление класса popup_opened показывающий в коде открыт попап или нет*/
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

/*Обработчик клика на картинку карточки*/
const handlePlaceClick = (link, name) => {
  fullImage.setAttribute('src', link); // Вставляем ссылку на изображение
  fullImage.setAttribute('alt', name); // Прописываем изображению alt
  fullImageCaption.textContent = name; // Вставляем значение атрибута alt
  openPopup(popupImage);
}

/*Создаем карточку*/
const createPlace = (element) => {
  const placeElement = placeTemplate.querySelector('.place').cloneNode(true); // Клонируем содержимое
  placeElement.querySelector('.place__title').textContent = element.name; // Вписываем название карточки

  const placeImage = placeElement.querySelector('.place__photo');
  placeImage.setAttribute('src', element.link); // Вставляем ссылку на изображение
  placeImage.setAttribute('alt', element.name); // Вставляем значение атрибута alt

  /*Просмотр полного изображения*/
  placeImage.addEventListener('click', () => handlePlaceClick(element.link, element.name));

  /*Лайки*/
  placeElement.querySelector('.place__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('place__like_active');
  });

  /*Удаление*/
  placeElement.querySelector('.place__delete').addEventListener('click', (evt) => {
    const place = evt.target.closest('.place');
    place.remove();
  });

  return placeElement;
}

/*Вставляем карточки при загрузке*/
initialPlace.forEach((element) => {
  const placeElement = createPlace(element)
  placesList.append(placeElement);
})

/*Обработчик «отправки» формы создания карточки*/
const handleAddPlaceSubmit = (evt) => {
  evt.preventDefault();

  /*Получаем значение полей из свойства value и записываем в объект*/
  const element = {
    name: inputAddPlaceName.value,
    link: inputAddPlaceLink.value
  };

  /*Готовим карточку и вставляем ee*/
  const placeElement = createPlace(element);
  placesList.prepend(placeElement);

  addPlaceForm.reset();
  closePopup(popupAddPlace);
}

addPlaceForm.addEventListener('submit', handleAddPlaceSubmit); // Прикрепляем обработчик к форме

/*Обработчик «отправки» формы редактирования профиля*/
const handleFormEditSubmit = (evt) => {
  evt.preventDefault();

  /*Получаем значение полей из свойства value*/
  const name = inputProfileName.value;
  const job = inputProfileJob.value;

  // Вставляем новые значения в профиль с помощью textContent
  profileName.textContent = name;
  profileJob.textContent = job;

  closePopup(popupProfile);
}

profileForm.addEventListener('submit', handleFormEditSubmit); // Прикрепляем обработчик к форме