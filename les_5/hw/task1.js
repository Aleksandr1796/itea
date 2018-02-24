/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>

*/

function Coment(name, text, url) {
            this.name = name;
            this.text = text;
            this.url = url;
			this.likes = 0;
}

let a = new Coment('Aleksandr', "Atesttext", "1.jpg");
let b = new Coment('Bleksandr', "Btesttext", "1.jpg");
let c = new Coment('Cleksandr', "Ctesttext", "1.jpg");
let d = new Coment('Dleksandr', "Dtesttext", "1.jpg");
let arr = [a,b,c,d];

function showArr(arr) {
	arr.forEach(function(item) {
		document.getElementById("CommentsFeed").innerHTML += item.name + " write: " + item.text + "<br>";
		document.getElementById("CommentsFeed").innerHTML += "<img src = '" + item.url + "'>" + "<br>";
		
	});
}

showArr(arr);