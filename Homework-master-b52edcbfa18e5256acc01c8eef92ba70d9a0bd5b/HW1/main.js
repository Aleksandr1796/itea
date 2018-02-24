/*
    Задание 2.

    Сложить в элементе с id App следующую размету HTML:

    <header>
      <a href="http://google.com.ua">
        <img src="https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png">
      </a>
      <div class="menu">
        <a href="#1"> link 1</a>
        <a href="#1"> link 2</a>
        <a href="#1"> link 3</a>
      </div>
    </header>


    Используя следующие методы для работы:
    getElementById
    createElement
    element.innerText
    element.className
    element.setAttribute
    element.appendChild

*/
var app = document.getElementById ('app');
var header = document.createElement('header');
var href = document.createElement ('a');
var href1 = document.createElement ('a');
var href2 = document.createElement ('a');
var href3 = document.createElement ('a');
var image = document.createElement ('img');
var menu = document.createElement ('div');

href.setAttribute ('href', 'http://google.com.ua');
image.setAttribute ('src', 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png');
menu.className = 'menu';
href1.setAttribute ('href','#');
href2.setAttribute ('href','#');
href3.setAttribute ('href','#');
href1.innerText = 'Link 1';
href2.innerText = 'Link 2';
href3.innerText = 'Link 3';

app.appendChild (header);
header.appendChild (href);
header.appendChild(menu);
href.appendChild (image);

menu.appendChild(href1);
menu.appendChild(href2);
menu.appendChild(href3);
