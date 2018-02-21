'use strict'
var COUNT = 8;
var AVATAR_LIST = [1, 2, 3, 4, 5, 6, 7, 8];
// Заголовок предложения
var OFFER_TITLE = [
	'Большая уютная квартира', 
	'Маленькая неуютная квартира', 
	'Огромный прекрасный дворец',
	'Маленький ужасный дворец', 
	'Красивый гостевой домик', 
	'Некрасивый негостеприимный домик', 
	'Уютное бунгало далеко от моря', 
	'Неуютное бунгало по колено в воде'
];
// Диапазон цен
var OFFER_PRICE_MIN = 1000;
var OFFER_PRICE_MAX = 1000000;
// Тип апартаментов
var OFFER_APARTMENTS_TYPE = ['flat', 'house', 'bungalo'];
// Количество комнат
var OFFER_ROOMS_MIN = 1;
var OFFER_ROOMS_MAX = 5;
// Количество гостей
var OFFER_GUESTS_MIN = 1;
var OFFER_GUESTS_MAX = 20;

// Время для поселения и выселения
var OFFER_TIME = ['12:00', '13:00', '14:00'];
// Дополнительные удобства
var OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
// Координата Х
var OFFER_LOCATION_X_MIN = 300;
var OFFER_LOCATION_X_MAX = 900;
// Координата Y
var OFFER_LOCATION_Y_MIN = 150;
var OFFER_LOCATION_Y_MAX = 500;
// Фото
var OFFER_PHOTOS = [
'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
'http://o0.github.io/assets/images/tokyo/hotel3.jpg']

// Функция, возвращающая случайное число в диапазоне
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Функция, возвращающая случайный элемемент массива
var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Функция, создающая массив произвольной длины
var getRandomLengthArray = function (features) {
var newArray = [];
for (var i = 0; i <= Math.floor(Math.random() * features.length); i++) {
  newArray[i] = getRandomElement(features);
}
return newArray;
};
// Функция, возвращающая случайный элемемент массива, но без повтора
var getRandomArrayNoRepeat = function (arr) {
   var randomArray = Math.floor(Math.random() * arr.length);
   return arr.splice(randomArray, 1);
 };

// Создание объявлений
function getAds(numbers) {
var offers = [];
for (var i = 0; i < COUNT; i++ ){
	var locX = getRandomNumberInRange(OFFER_LOCATION_X_MIN, OFFER_LOCATION_X_MAX);
	var locY = getRandomNumberInRange(OFFER_LOCATION_Y_MIN, OFFER_LOCATION_Y_MAX);
	var ad  = {
		'author':{
			'avatar': 'img/avatars/user0' + getRandomArrayNoRepeat(AVATAR_LIST) + '.png',
	},
		'offer': {
			'title': getRandomArrayNoRepeat(OFFER_TITLE),
			'address': locX + ',' + locY,
			'price': getRandomNumberInRange(OFFER_PRICE_MIN, OFFER_PRICE_MAX),
			'type': getRandomElement(OFFER_APARTMENTS_TYPE),
			'rooms': getRandomNumberInRange(OFFER_ROOMS_MIN, OFFER_ROOMS_MAX),
			'guests': getRandomNumberInRange(OFFER_GUESTS_MIN, OFFER_GUESTSS_MAX),
			'checkin': getRandomElement(OFFER_TIME),
			'checkout': getRandomElement(OFFER_TIME),
			'features': getRandomLengthArray(OFFER_FEATURES),
			'description': '',
			'photos': [],
	},
		'location': {
			'x': locX,
			'y': loxY,
        }
      };
  offers.push(ad);
}
return offers;
}


// Задание 3
function getPin(ad, index) {
 
    var button = document.createElement('button');
    var img = document.createElement('img');
 
    button.setAttribute('data-index', index);
 
    button.classList.add('map__pin');
    button.style.left = ad.offers.location.x + 'px';
    button.style.top = ad.offers.location.y + 'px';
 
    img.style.width = '40' + 'px';
    img.style.height = '40' + 'px';
    img.draggable = false;
    img.src = ad.author.avatar;
 
    button.appendChild(img);
 
    return button;
  }
