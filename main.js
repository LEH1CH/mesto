(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function r(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(r)?r:String(r)}var o=function(){function t(e,n,o){var i=this,u=e.name,a=e.link,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,p=arguments.length>6&&void 0!==arguments[6]&&arguments[6],f=arguments.length>7?arguments[7]:void 0,y=arguments.length>8?arguments[8]:void 0,h=arguments.length>9?arguments[9]:void 0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r(this,"_handleRemoveClick",(function(){console.log(i._newCard),i._deleteCard(i._cardId,i._newCard)})),r(this,"_handleLikeClick",(function(){i._isLikedByMe?i._deleteLike(i._cardId,i):i._putLike(i._cardId,i)})),r(this,"_setEventListeners",(function(){i._likeBtn.addEventListener("click",i._handleLikeClick),i._isMine?i._delBtn.addEventListener("click",i._handleRemoveClick):i._delBtn.style.display="none",i._newCardImage.addEventListener("click",(function(){i._handleCardClick({name:i._name,link:i._link})}))})),this._name=u,this._link=a,this._newCardTemplate=n,this._handleCardClick=o,this._cardId=c,this._isMine=l,this._likes=s,this._isLikedByMe=p,this._putLike=f,this._deleteLike=y,this._deleteCard=h}var n,o;return n=t,o=[{key:"_getTemplate",value:function(){return document.querySelector(this._newCardTemplate).content.firstElementChild.cloneNode(!0)}},{key:"setLikes",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._likes,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._isLikedByMe;this._likesCounter.textContent=t,e?this._likeBtn.classList.add("cards__like_active"):this._likeBtn.classList.remove("cards__like_active"),this._isLikedByMe=e}},{key:"createCard",value:function(){return this._newCard=this._getTemplate(),this._newCardImage=this._newCard.querySelector(".cards__image"),this._newCardImage.src=this._link,this._newCardImage.alt="Фото ".concat(this._name),this._newCard.querySelector(".cards__title").textContent=this._name,this._likesCounter=this._newCard.querySelector(".cards__likes"),this._delBtn=this._newCard.querySelector(".cards__delete"),this._likeBtn=this._newCard.querySelector(".cards__like"),this.setLikes(),this._setEventListeners(),this._newCard}}],o&&e(n.prototype,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===i(o)?o:String(o)),n)}var o}var a=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=e,this._container=document.querySelector(r)}var e,r;return e=t,r=[{key:"addItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=this._renderer(t,e);this._container.prepend(r)}},{key:"renderInitialCards",value:function(t,e){var r=this;t.forEach((function(t){return r.addItem(t,e)}))}}],r&&u(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,p(n.key),n)}}function s(t,e,r){return(e=p(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var f=function(){function t(e){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_handlerPopupCloseOnExitClick",(function(){r.closePopup()})),s(this,"_handlerPopupCloseOnClick",(function(t){t.target.classList.contains("popup_opened")&&r.closePopup()})),s(this,"_handlerPopupCloseOnEscKeyDown",(function(t){"Escape"===t.key&&r.closePopup()})),this._popup=document.querySelector(e)}var e,r;return e=t,(r=[{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handlerPopupCloseOnClick),this._popup.querySelector(".popup__close").addEventListener("click",this._handlerPopupCloseOnExitClick)}},{key:"openPopup",value:function(){this._popup.classList.add("popup_opened"),window.addEventListener("keydown",this._handlerPopupCloseOnEscKeyDown)}},{key:"closePopup",value:function(){window.removeEventListener("keydown",this._handlerPopupCloseOnEscKeyDown),this._popup.classList.remove("popup_opened")}}])&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=v(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},_.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function v(t){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},v(t)}var b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=v(n);if(o){var r=v(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,r=t.popupSelector,n=t.imageSelector,o=t.subtitleSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._image=e._popup.querySelector(n),e._imageSubtitle=e._popup.querySelector(o),e}return e=u,(r=[{key:"openPopup",value:function(t){var e=t.name,r=t.link;this._image.src=r,this._image.alt="Фото ".concat(e),this._imageSubtitle.textContent=e,_(v(u.prototype),"openPopup",this).call(this)}}])&&h(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,E(n.key),n)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=P(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},P(t)}function E(t){var e=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===m(e)?e:String(e)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=P(n);if(o){var r=P(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}(this,t)});function u(t,e){var r,n,o,a,c=t.popupSelector,l=t.formSelector,s=t.inputSelector,p=t.sbmtBtnSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=k(r=i.call(this,c)),a=function(t){t.preventDefault(),r._renderSaving(!0);var e=r._getInputValues();r._submitCallback(e)},(o=E(o="_handlerSubmitForm"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._form=r._popup.querySelector(l),r._inputList=r._popup.querySelectorAll(s),r._sbmtBtn=r._form.querySelector(p),r._sbmtBtnInitialText=r._sbmtBtn.textContent,r._submitCallback=e,r}return e=u,(r=[{key:"_renderSaving",value:function(t){this._sbmtBtn.textContent=t?"Сохранение...":this._sbmtBtnInitialText}},{key:"setEventListeners",value:function(){g(P(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handlerSubmitForm)}},{key:"_getInputValues",value:function(){var t={};return Array.from(this._inputList).forEach((function(e){return t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){return e.value=t[e.name]}))}},{key:"closePopup",value:function(){var t=this;g(P(u.prototype),"closePopup",this).call(this),setTimeout((function(){t._renderSaving(!1),t._form.reset()}),400)}}])&&S(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function j(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,q(n.key),n)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=T(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},L.apply(this,arguments)}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function I(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function q(t){var e=function(t,e){if("object"!==O(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===O(e)?e:String(e)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=T(n);if(o){var r=T(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return I(t)}(this,t)});function u(t,e){var r,n,o,a,c=t.popupSelector,l=t.formSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),n=I(r=i.call(this,c)),a=function(t){t.preventDefault(),r._submitCallBack(r._cardId,r._cardEl)},(o=q(o="_handlerSubmitForm"))in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a,r._form=r._popup.querySelector(l),r._submitCallBack=e,r}return e=u,(r=[{key:"setEventListeners",value:function(){L(T(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handlerSubmitForm)}},{key:"openPopup",value:function(t,e){L(T(u.prototype),"openPopup",this).call(this),this._cardId=t,this._cardEl=e}},{key:"closePopup",value:function(){var t=this;L(T(u.prototype),"closePopup",this).call(this),setTimeout((function(){return t._form.reset()}),400)}}])&&j(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(f);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function x(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==R(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===R(o)?o:String(o)),n)}var o}var V=function(){function t(e){var r=e.nameSelector,n=e.profSelector,o=e.avaSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameField=document.querySelector(r),this._profField=document.querySelector(n),this._avatar=document.querySelector(o)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{userName:this._nameField.textContent,userJob:this._profField.textContent}}},{key:"setUserInfo",value:function(t){var e=t.userName,r=void 0===e?"LEH1CH":e,n=t.userJob,o=void 0===n?"gamer":n;this._nameField.textContent=r,this._profField.textContent=o}},{key:"setUserAvatar",value:function(t){var e=t.avatarLink,r=void 0===e?"https://cdn.fishki.net/upload/post/2018/04/09/2564924/6170e48a79e36114e8dd12a5d96a9745.jpg":e;this._avatar.style["background-image"]="url(".concat(r,")")}}])&&x(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function A(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,z(n.key),n)}}function U(t,e,r){return e&&A(t.prototype,e),r&&A(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function N(t,e,r){return(e=z(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function z(t){var e=function(t,e){if("object"!==F(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===F(e)?e:String(e)}var J=U((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),N(this,"_hideInputError",(function(t){n._errorElement.textContent="",n._errorElement.classList.remove(n._errorClass),t.classList.remove(n._inputErrorClass)})),N(this,"_showInputError",(function(t){n._errorElement.textContent=t.validationMessage,n._errorElement.classList.add(n._errorClass),t.classList.add(n._inputErrorClass)})),N(this,"_findInputErrorElement",(function(t){return n._inputSectionElement=t.closest(n._fieldSetSelector),n._errorElement=n._inputSectionElement.querySelector(".".concat(t.id,"-error")),n._errorElement})),N(this,"_toggleInputState",(function(t){n._isValid=t.validity.valid,n._errorElement=n._findInputErrorElement(t),n._isValid?n._hideInputError(t):n._showInputError(t)})),N(this,"_toggleErrorForInput",(function(t){n._errorElement=n._findInputErrorElement(t),n._hideInputError(t)})),N(this,"_enableButton",(function(){n._submitButton.disabled=!1,n._submitButton.classList.remove(n._inactiveButtonClass)})),N(this,"_disableButton",(function(){n._submitButton.disabled=!0,n._submitButton.classList.add(n._inactiveButtonClass)})),N(this,"_toggleButtonState",(function(){n._formIsValid=n._inputs.every((function(t){return t.validity.valid})),n._formIsValid?n._enableButton():n._disableButton()})),N(this,"_setEventListeners",(function(){n._inputs.forEach((function(t){t.addEventListener("input",(function(){n._toggleInputState(t),n._toggleButtonState()}))}))})),N(this,"resetValidation",(function(){n._inputs.forEach((function(t){n._toggleErrorForInput(t)})),n._toggleButtonState()})),N(this,"enableValidation",(function(){n._setEventListeners()})),this._submitButtonSelector=e.submitButtonSelector,this._inputSelector=e.inputSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._fieldSetSelector=e.fieldSetSelector,this._errorClass=e.errorClass,this._inputErrorClass=e.inputErrorClass,this._form=r,this._submitButton=this._form.querySelector(this._submitButtonSelector),this._inputs=Array.from(this._form.querySelectorAll(this._inputSelector))}));function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function H(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==M(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===M(o)?o:String(o)),n)}var o}var K=function(){function t(e){var r=e.server,n=e.profileDataPath,o=e.cardsDataPath,i=e.token,u=e.group;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._server=r,this._profileDataPath=n,this._cardsDataPath=o,this._token=i,this._group=u}var e,r;return e=t,r=[{key:"_requestServer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:{authorization:this._token}};return fetch(t,e).then((function(t){return t.ok?t.json():Promise.reject(t.status)}))}},{key:"getProfileData",value:function(){var t="".concat(this._server,"/").concat(this._group,"/").concat(this._profileDataPath);return this._requestServer(t)}},{key:"modifyProfileData",value:function(t){var e=t.userName,r=t.userJob,n="".concat(this._server,"/").concat(this._group,"/").concat(this._profileDataPath),o={method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:r})};return this._requestServer(n,o)}},{key:"setUserAvatar",value:function(t){var e=t.avatarLink,r="".concat(this._server,"/").concat(this._group,"/").concat(this._profileDataPath+"/avatar"),n={method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})};return console.log(n),this._requestServer(r,n)}},{key:"getInitialCards",value:function(){var t="".concat(this._server,"/").concat(this._group,"/").concat(this._cardsDataPath);return this._requestServer(t)}},{key:"addNewCard",value:function(t){var e=t.name,r=t.link,n="".concat(this._server,"/").concat(this._group,"/").concat(this._cardsDataPath),o={method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:r})};return this._requestServer(n,o)}},{key:"putLike",value:function(t){var e="".concat(this._server,"/").concat(this._group,"/").concat(this._cardsDataPath,"/").concat(t+"/likes"),r={method:"PUT",headers:{authorization:this._token}};return this._requestServer(e,r)}},{key:"deleteLike",value:function(t){var e="".concat(this._server,"/").concat(this._group,"/").concat(this._cardsDataPath,"/").concat(t+"/likes"),r={method:"DELETE",headers:{authorization:this._token}};return this._requestServer(e,r)}},{key:"deleteCard",value:function(t){var e="".concat(this._server,"/").concat(this._group,"/").concat(this._cardsDataPath,"/").concat(t),r={method:"DELETE",headers:{authorization:this._token}};return this._requestServer(e,r)}}],r&&H(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),G={formSelector:".popup__container",fieldSetSelector:".popup__items",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Q=document.querySelector(".profile__edit-button"),W=document.querySelector(".profile__add-button"),X=document.querySelector(".profile__avatar-button"),Y=new J(G,profilePopupForm);Y.enableValidation();var Z=new J(G,addCardForm);Z.enableValidation();var $=new J(G,profileAvaPopupForm);$.enableValidation();var tt=new V({nameSelector:".profile__name",profSelector:".profile__profession",avaSelector:".profile__avatar-button"}),et=new K({server:"https://mesto.nomoreparties.co/v1",profileDataPath:"users/me ",cardsDataPath:"cards",token:"9015b21c-073a-42b5-b160-2016f514138f",group:"cohort-64"}),rt=function(t,e){et.putLike(t).then((function(t){return e.setLikes(t.likes.length,!0),!0})).catch((function(t){alert("Запрос на установку лайка не выполнен! Ошибка: ".concat(t)),console.error("Запрос на установку лайка не выполнен! Ошибка: ".concat(t))}))},nt=function(t,e){et.deleteLike(t).then((function(t){return e.setLikes(t.likes.length,!1),!1})).catch((function(t){alert("Запрос на удаление лайка не выполнен! Ошибка: ".concat(t)),console.error("Запрос на удаление лайка не выполнен! Ошибка: ".concat(t))}))},ot=new a((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.owner._id,r=e===t.owner._id,n=t.likes.length,i=t.likes.some((function(t){return t._id===e}));return new o(t,"#article-id",ut,t._id,r,n,i,rt,nt,(function(t,e){return st.openPopup(t,e)})).createCard()}),".cards");et.getProfileData().then((function(t){return tt.setUserInfo({name:t.name,prof:t.about}),tt.setUserAvatar({link:t.avatar}),t._id})).then((function(t){et.getInitialCards().then((function(e){ot.renderInitialCards(e,t)})).catch((function(t){alert("Не удалось загрузить данные карточек! Ошибка: ".concat(t)),console.error("Не удалось загрузить данные карточек! Ошибка: ".concat(t))}))})).catch((function(t){alert("Не удалось загрузить данные профиля пользователя! Ошибка: ".concat(t)),console.error("Не удалось загрузить данные профиля пользователя! Ошибка: ".concat(t))}));var it=new b({popupSelector:".popup_for_full-image",imageSelector:".popup__full-image",subtitleSelector:".popup__caption"});it.setEventListeners();var ut=function(t){it.openPopup(t)},at=new C({popupSelector:".popup_for_edit-profile",formSelector:".popup__container",inputSelector:".popup__input",sbmtBtnSelector:".popup__button"},(function(t){return et.modifyProfileData(t).then((function(t){tt.setUserInfo({userName:t.name,userJob:t.about}),at.closePopup()})).catch((function(t){alert("Запрос на изменение данных профиля не выполнен! Ошибка: ".concat(t)),console.error("Запрос на изменение данных профиля не выполнен! Ошибка: ".concat(t))}))}));at.setEventListeners(),Q.addEventListener("click",(function(){var t=tt.getUserInfo();at.setInputValues(t),at.openPopup(),Y.resetValidation()}));var ct=new C({popupSelector:".popup_for_add-card",formSelector:".popup__container",inputSelector:".popup__input",sbmtBtnSelector:".popup__button"},(function(t){et.addNewCard(t).then((function(t){ot.addItem(t,t.owner._id),ct.closePopup()})).catch((function(t){alert("Запрос на добавление карточки не выполнен! Ошибка: ".concat(t)),console.error("Запрос на добавление карточки не выполнен! Ошибка: ".concat(t))}))}));ct.setEventListeners(),W.addEventListener("click",(function(){ct.openPopup(),Z.resetValidation()}));var lt=new C({popupSelector:".popup_for_add-photo",formSelector:".popup__container",inputSelector:".popup__input",sbmtBtnSelector:".popup__button"},(function(t){et.setUserAvatar(t).then((function(t){tt.setUserAvatar({link:t.avatar}),lt.closePopup()})).catch((function(t){alert("Запрос на изменение аватара не выполнен! Ошибка: ".concat(t)),console.error("Запрос на изменение аватара не выполнен! Ошибка: ".concat(t))}))}));lt.setEventListeners(),X.addEventListener("click",(function(){lt.openPopup(),$.resetValidation()}));var st=new D({popupSelector:".confirm-popup",formSelector:".popup__container",inputSelector:".popup__input"},(function(t,e){et.deleteCard(t).then((function(){e.remove(),st.closePopup()})).catch((function(t){alert("Запрос на удаление карточки не выполнен! Ошибка: ".concat(t)),console.error("Запрос на удаление карточки не выполнен! Ошибка: ".concat(t))}))}));st.setEventListeners()})();
//# sourceMappingURL=main.js.map