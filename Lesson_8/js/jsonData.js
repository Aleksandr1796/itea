/*

  Формат JSON.

  JSON (JavaScript Object Notation)

  JSON.parse();
    Разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
  JSON.stringify()
    Возвращает строку JSON, соответствующую указанному значени.
    https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
*/

var x = {
  name: 'asd',
  age: 25,
  doSmsng: function(){
    console.log('hello');
  }
};

var y = JSON.stringify(x);
console.log(y);

var myJSON = '{"name":"Adam"}';
var Adam = JSON.parse(myJSON);
console.log(Adam);

Adam.age = "23";

var AJAX_DATA = JSON.stringify(Adam);
    console.log(AJAX_DATA);


var arrayForm = Array.from(document.forms.Form.elements);
var jArr = [];
console.log(arrayForm);
document.getElementById("btn").addEventListener('click', JsON);
function JsON() {
//	for(var i = 0; i < arrayForm.length; i++) {
//	jArr[i] = arrayForm[i].value;
//	}
//	var a = JSON.stringify(jArr);
//	console.log(a);
//	
//	arrayForm.forEach( function(input){
//		jArr.push({ [input.name] : input.value});
//	});
//	let y = JSON.stringify(jArr);
//	console.log(y);
}




// var y = JSON.stringify(x);
// console.log( y );
// //
// var z = JSON.parse(y);
// console.log(z);
// z.name = "asdasd";
// console.log(z);

/*
  JSON является синтаксисом для сериализации объектов, массивов, чисел, строк логических значений и значения nul
  т.е JSON работает со следущими типами данных:
  - Object : {}
  - Array : []
  - Number : 12
  - String : ""
  - Boolen : true
  - null

  Особености:
  1) Передает только данные
  2) Именна свойств должны быть строками заключенными в двойные кавычки
*/

/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (5-6 разных полей), конвертирует их в json и выводит в консоль.
    2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary


*/
