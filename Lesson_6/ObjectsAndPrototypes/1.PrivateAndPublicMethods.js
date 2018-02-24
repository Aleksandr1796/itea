/*

  Objects

*/
//      var settings = {
//        colorsCount: 20,
//        title: "MyObj2",
//        targetId: "wrap"
//      };

      // var x = Object.create(settings);
      //     x.myValue = '123';
      // console.log('ObjectCreate', x, x.__proto__.title);

//      function generateMyObject( settings ){
//        this.colorsCount = name;
//
//        function privateMethod(){
//            this.name = "rrr";
//        }
//
//
//        this.publicMethod = function(){
//          console.log('before', this.name);
//          privateMethod.apply(this);
//          console.log('after', this.name);
//        };
//        return this;
//      }
      //
//      var x = new generateMyObject(settings);
//          x.publicMethod();
          // console.log(x);
          // x.privateMethod();

    /*

      Задание:

      Написать функцию генератор, которая будет иметь приватные и публичные свойства.
      Публичные методы должны вызывать приватные.

      Рассмотрим на примере планеты:

        - На вход принимаются параметр Имя планеты.

        Создается новый обьект, который имеет публичные методы и свойства:
        - name (передается через конструктор)
        - population ( randomPopulation());
        - rotatePlanet(){
          let randomNumber = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
          if ( (randomNumber % 2) == 0) {
            growPopulation(state);
          } else {
            Cataclysm(state);
          }
        }

        Приватные методы
        randomPopulation -> Возвращает случайное целое число от 1.000 до 10.000
        growPopulation() {
          функция которая берет приватное свойство populationMultiplyRate
          которое равняется случайному числу от 1 до 10 и умножает его на 100.
          Дальше, число которое вышло добавляет к популяции и выводит в консоль сообщение,
          что за один цикл прибавилось столько населения на планете .
        }
        Cataclysm(){
          Рандомим число от 1 до 10 и умножаем его на 10000;
          То число которое получили, отнимаем от популяции.
          В консоль выводим сообщение - от катаклизма погибло Х человек на планете.
        }

    */
//	function Generator(name) {
//			this.name = name;
//			this.population = randomPopulation();
//			this.rotatePlanet = function() {
//			  let randomNumber = Math.floor(Math.random() * (1000 - 1)) + 1;
//			  if ( (randomNumber % 2) == 0) {
//				growPopulation.apply(this);
//			  } else {
//				Cataclysm.apply(this);
//			  }
//			}
//		
//		
//		function randomPopulation(){ 
//			return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000; 
//		} 
//		function growPopulation() {
//			let populationMultiplyRate = (Math.floor(Math.random() * (10 - 1)) + 1)*100;
//			this.population += populationMultiplyRate;
//			console.log("There are grown of population: " + populationMultiplyRate);
//		}
//		function Cataclysm() {
//			let rand = (Math.floor(Math.random() * (10 - 1)) + 1)*10000;
//			let population = randomPopulation();
//			let remove = rand - this.population;
//			console.log("There are " + remove + " are death after Cataclysm");
//			console.log(this.population);
//			console.log(population);
//		}	
//	}
//	var Mars = new Generator('Mars');
//	console.log(Mars);
//	Mars.rotatePlanet();

function randomPopulation(){ 
	return Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000; 
}
function growPopulation() {
	let populationMultiplyRate = (Math.floor(Math.random() * (10 - 1)) + 1)*100;
	this.population += populationMultiplyRate;
	console.log("There are grown of population: " + populationMultiplyRate);
}
function Cataclysm() {
	let rand = (Math.floor(Math.random() * (10 - 1)) + 1)*10000;
	let population = randomPopulation();
	let remove = rand - population;
	console.log("There are " + remove + " are death after Cataclysm");
}

class Generate {
	constructor(name) {
		this.name = name;
		this.population = randomPopulation();
	}
	rotatePlanet() {
	  let randomNumber = Math.floor(Math.random() * (1000 - 1)) + 1;
	  if ( (randomNumber % 2) == 0) {
		growPopulation.apply(this);
	  } else {
		Cataclysm.apply(this);
	  }
	}
	
}

let Mars = new Generate('Mars');
console.log(Mars);
Mars.rotatePlanet();







