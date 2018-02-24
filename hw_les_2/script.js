var buttonContainer = document.getElementById('buttonContainer');
var buttons = buttonContainer.querySelectorAll('button');
var tabContainer = document.getElementById('tabContainer');
var tabs = tabContainer.querySelectorAll('.tab');

buttons[0].onclick = function() {
	if(!tabs[0].classList.contains('active')) {
		tabs[0].classList.add('active');
	}
	tabs[1].classList.remove('active');
	tabs[2].classList.remove('active');
}

buttons[1].onclick = function() {
	if(!tabs[1].classList.contains('active')) {
		tabs[1].classList.add('active');
	}
	tabs[0].classList.remove('active');
	tabs[2].classList.remove('active');
}

buttons[2].onclick = function() {
	if(!tabs[2].classList.contains('active')) {
		tabs[2].classList.add('active');
	}
	tabs[0].classList.remove('active');
	tabs[1].classList.remove('active');
}

