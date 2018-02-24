/*
  PROMISES
  Способ организации асинзронного кода.
*/

  // PROMISES
  // Promise status : Pending | Fulfilled | Rejected

  /*
    FIRST PROMISE
    Статус промиса может изменится только 1 раз
  */
//
//  let TestPromise = new Promise( function( resolveFunc, rejectFunc ){
//   setTimeout( () => {
//     // переведёт промис в состояние fulfilled с результатом "result"
//     resolveFunc([{title:'1'}, {title: '2'}]);
//     // переведёт промис в состояние Rejected с результатом "ERROR 404"
//      rejectFunc('ERROR 404');
//   }, 1000);
//  });
//   console.log( TestPromise );
  // TestPromise.then(
  //   // В then можем передать две функции - для обработки упешного состояния и для обработки ошибки
  //   res => {
  //     console.log('Fulfilled: ' + res );
  //     console.log( TestPromise );
  //     return res;
  //   },
  //   error => {
  //     console.log( TestPromise );
  //     throw new Error('Rejected: ' + error);
  //   }
  // )
  // .then( response => {
  //   let x = [];
  //   response.forEach( (item) => {
  //     item.age = "20";
  //     x.push( item );
  //   });
  //   console.log(x);
  //   return x;
  // }).then( response => {
  //   console.log('x', response);
  // });

  /* LOAD CAT PROMISE */

//  function loadImagePromise( url ){
//    return new Promise( (resolve, reject) => {
//
//      let imageElement = new Image();
//          imageElement.onload = function(){
//            resolve( imageElement );
//          };
//          imageElement.onerror = function(){
//            let message = 'Error on image load at url ' + url;
//            reject(
//              RenderImage('images/cat5.jpg')
//            );
//          };
//
//          imageElement.src = url;
//    });
//  }
  // loadImagePromise('asdasd');
  // loadImagePromise('images/cat1.jpg').then((img) => {
  //   RenderImage(img.src);
  // });

//  Promise.all([
//    loadImagePromise('images/cat1.jpg'),
//    loadImagePromise('images/cat2.jpg'),
//    loadImagePromise('images/cat3.jpg'),
//    loadImagePromise('images/cat4.jpg'),
//    loadImagePromise('images/cat5.jpg'),
//    loadImagePromise('images/cat6.jpg'),
//    loadImagePromise('images/cat7.jpg')
//  ]).then( images => {
//    console.log( images );
//    images.forEach( img => RenderImage( img.src ));
//  }).catch( error => console.log('catch', error));

  /* ASYNC PROMISE
    fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2").then(
      resolve = ( res ) => {
        return res.json();
      }
    ).then(
      (data) => {
        return data[0];
      }
    ).then(
      (data) => {
        console.log('data', data);
        return data.name;
      }
    ).then(
      (data) => {

        // show friends
        return fetch("http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2").then(
            (res) => res.json()
          ).then( dataJson => {
            return {
              name: data,
              friends: dataJson[0]
            };
          });

      }
    ).then(
      (after2Fetch) =>{
        console.log(after2Fetch);
      }
    )
    .catch(error => {
      console(error); // Error: Not Found
    });
  */

	let promise = fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2").then(
		( res ) => {
			return res.json();
		}
	).then( res => {
		let firstArr = [];
		res.forEach(function(item) {
			firstArr.push({index: item.index, name: item.name, age: item.age});
		});	
		//console.log(res);
		return firstArr;
	}).then( 
		fetch("http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2").then(
			(res) => {
				return res.json();
			}).then(
			(firstArr, res) => {
				firstArr.forEach(function(item) {
				item.friends = res.friends;
				})
				console.log(firstArr);
			})		
	)
		
			
	

  /*

    Задание:
    1. Получили список людей c jsonGenerator

    2. Перебераем полученный массив и формируем новый в котором будут
    {
      index: ""
      name: "",
      age: "",
    }
    -> res.json();

    3. Перебираем каждый элемент и добавляем к нему поле друзья
    делая еще один запрос к jsonGenerator
    [{
      name: ""
    }, { ... }
    ]

    4. Выводим на экран списком
    UserName + Age;
    Friends: [FriendName,FriendName,FriendName]

    + 5. Сделать поле поиска по этому списку.

  */
