 //		Task_1

/*
var span = document.createElement('span');
	span.className = 'center_block';
	document.body.appendChild(span);

setColorRGB();

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
	document.body.style.background = color;
	viewColor();
}

function setColorHEX() {
	var r = getRandomIntInclusive(0, 255);
	var g = getRandomIntInclusive(0, 255);
	var b = getRandomIntInclusive(0, 255);
	var color = "#"+r.toString(16)+g.toString(16)+b.toString(16);
	if(r < 10) {
		var color = "#"+ '0' + r.toString(16)+g.toString(16)+b.toString(16);
	}
	if(g < 10) {
		var color = "#"+r.toString(16)+'0'+g.toString(16)+b.toString(16);
	}
	if(b < 10) {
		var color = "#"+r.toString(16)+g.toString(16)+'0'+b.toString(16);
	}
	
	document.body.style.background = color;
	viewColor();
	console.log(color);
}

function viewColor() {
	var colorRGB = document.body.style.background;
	span.innerText = "RGB color: " + colorRGB;
}

*/


 //  	Task_2

/*

var newElement = document.createElement('header');
var link = document.createElement('a');
var img = document.createElement('img');
var div = document.createElement('div');
div.className = "menu";
var divLink1 = document.createElement('a');
var divLink2 = document.createElement('a');
var divLink3 = document.createElement('a');
divLink1.setAttribute('href', '#1');
divLink1.innerText = "Link 1";
divLink2.setAttribute('href', '#2');
divLink2.innerText = "Link 2";
divLink3.setAttribute('href', '#3');
divLink3.innerText = "Link 3";
div.appendChild(divLink1);
div.appendChild(divLink2);
div.appendChild(divLink3);
img.setAttribute('src', 'first-bitcoin-capital.png')
link.setAttribute('href', 'http://google.com.ua');
link.appendChild(img);
newElement.appendChild(link);
newElement.appendChild(div);
var currentEl = document.getElementById("app");
currentEl.appendChild(newElement);
console.log(newElement);

*/










