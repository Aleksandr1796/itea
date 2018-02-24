/*
  Arrays Methods
  Docs:
    Array.isArray: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
    * Array.sort: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    Array.forEach: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    Array.map: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    * Array.indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
    * Array.find: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    * Array.findIndex: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    Array.filter: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    * Array.reverse: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
    Array.reduce: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    Array.some: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    Array.every: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every

*/


  /*
    Задание:
    1. При помощи методов изложеных ниже, переформатировать ITEA_COURSES в массив который содержит длину строк каждого из элементов.
    2. Самостоятельно изучить метод Array.sort. Отфильтровать массив ITEA_COURSES по алфавиту.
        + Бонусный бал. Вывести на страничку списком
    3. Реализация функции поиска по массиву ITEA_COURSES.
        + Бонусный бал. Вывести на страничку инпут и кнопку по которой будет срабатывать поиск.
  */
//
//  const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];
//  const NOT_ARRAY = "";

  // Array.isArray()
  // -- Проверка является ли массивом: Array.isArray( Arr );
  // console.log ( "Is ITEA_COURSES array?", Array.isArray(ITEA_COURSES) );
  // console.log ( "Is NOT_ARRAY array?", Array.isArray(NOT_ARRAY) );

  // -- Array.forEach
//      var LogName = item => console.log( 'log:', item );

      // ITEA_COURSES.forEach( LogName );
      // console.log('- - - - -');
      // ITEA_COURSES.forEach( function( item, i){
      //   console.log('log2:', item);
      // });

  // -- Array.filter
  // Create new array;

  // const StringLength = item => item.length < 15;
  // // if expresion === true return item
  // var filtredArray = ITEA_COURSES.filter(StringLength);
  // console.log('filtredArray:', filtredArray);
  // console.log('Array:', ITEA_COURSES);

  // -- Array.map
  // Create new array;

//  var ReverseName = name => {
    // console.log( name.split("") );
    // console.log( name.split("").reverse());

//    if ( name.length < 10 ){
//      console.log( name.split("").reverse().join("") );
//      return name;
//    }

//  };
  // var MappedArray = ITEA_COURSES.map(ReverseName);
  // var FiltredArrat = ITEA_COURSES.filter(ReverseName);
  // console.log(MappedArray, FiltredArrat);

  // -- every/some
  // var ArraySome = ITEA_COURSES.some( function( item ){
  //   if( item.length < 10){
  //     return true;
  //   }
  // });
  // console.log('ArraySome', ArraySome);
  //
  // var ArrayEvery = ITEA_COURSES.every( function( item ){
  //   if( item.length > 10){
  //     return true;
  //   }
  // });
  // console.log('ArrayEvery', ArrayEvery);


  // -- reduce/reduceRight

//  const REDUCE_ARRAY = [1,2,3,4,5,6,7,8,9,10];
//  const REDUCE_ARRAY2 = ['Item', 'Name', 'Index', 'Object'];
//  //
//  var result = REDUCE_ARRAY.reduce( function( sum, current){
//    console.log("multiply >:", sum, current);
//    return sum + current;
//
//  });
//  console.log(result);
  //
//  var resultReverse = REDUCE_ARRAY.reduceRight( function( sum, current){
//    console.log("multiply - <:", sum, current);
//    return sum - current;
//  });
//  console.log( 'result', result, 'resultReverse', resultReverse);

  /*
    Задание:
    Написать фильтр массива по:
    Актеру, продолжительности
  */


    var stars = ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom','Ewan McGregor','Liam Neeson', 'Natalie Portman', 'Billy Bob Thornton', 'Martin Freeman'];
	
    var x = [
        {
          name: "Lord of the Rigs",
          duration: 240,
          starring: [ 'Elijah Wood', 'Ian McKellen', 'Orlando Bloom']
        },
        {
          name: "Star Wars: Episode I - The Phantom Menace",
          duration: 136,
          starring: [ 'Ewan McGregor',' Liam Neeson', 'Natalie Portman']
        },
        {
          name: "Fargo",
          duration: 100,
            starring: [ 'Ewan McGregor', 'Billy Bob Thornton', 'Martin Freeman']
        },
        {
        name: "V for Vendetta",
        duration: 150,
        starring: [ 'Hugo Weaving', 'Natalie Portman', 'Rupert Graves']
      }
      ];

// var SortedDur = x.forEach(function(item) {
//	 	if(item.duration > 120) {
//			console.log(item);
//		}
//	});	
//
// console.log("---------------------------------------------------------");
//
// function sortedActor(actor) {
//	 for(let i = 0; i < x.length; i++) {
//		 if(x[i].starring.some(function(item) {
//		 	 if(item === actor) {
//		 		 return true;
//			 }
//		 }) === true) {
//			 console.log(x[i]);
//		 }
//	 }
// };
//sortedActor("Natalie Portman");

document.forms.Form.searching.addEventListener('click', findFilm);
stars.forEach(function(item) {
		var option = new Option(item, item);
		document.getElementById("mySelect").appendChild(option);
	});
function findFilm() {
	document.getElementById("result").innerHTML = "";
	let actor = document.forms.Form.mySelect.value;
	for(let i = 0; i < x.length; i++) {
		 if(x[i].starring.some(function(item) {
		 	 if(item === actor) {
		 		 return true;
			 }
		 }) === true) {
			 document.getElementById("result").innerHTML += "Name: " + x[i].name + "<br>" +
															"Duration: " + x[i].duration + "<br>" + 
															"Starring: " + x[i].starring + "<br>" +
															"-------------------------------------------------<br>";
		 }
	 }
}
