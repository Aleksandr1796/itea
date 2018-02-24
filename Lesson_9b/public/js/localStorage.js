/*

  localStorage
  window.localStorage

*/

// Запись в ЛС
localStorage.setItem('myCat', 'Tom');
localStorage.setItem('back', 'blue');
// // Чтение с ЛС
// var cat = localStorage.getItem("myCat");
// // Удаление с ЛС
localStorage.removeItem("myCat");

// Если не найдено, вернет Null
var background = localStorage.getItem("back");
console.log(background);

if( background !== null){
  document.body.style.backgroundColor = background;
}

document.getElementById('btn').addEventListener('click', setColorRGB);

function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

function setColorRGB() {
	var r = getRandomIntInclusive(0, 255);
	var g = getRandomIntInclusive(0, 255);
	var b = getRandomIntInclusive(0, 255);
	var color = 'RGB(' + r + ',' + g + ',' + b + ')';
	localStorage.setItem('color', color);
	document.body.style.backgroundColor = color;
}

window.onload = function() {
	document.body.style.backgroundColor = localStorage.getItem("color");
}
/*
  Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

  Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678
*/
