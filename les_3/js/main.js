var Counter = 0;
var clickButton = document.getElementById('AddToList');
var text = document.getElementById('Receiver');

function setElem() {
		var newElem = document.createElement('div');
		newElem.className = 'new';
		newElem.innerText = text.value;
		text.value = '';
		text.focus();
		var newButton = document.createElement('button');
		newButton.className = 'butt';
		newButton.innerText = 'x';
		newButton.addEventListener('click', Close);
		document.getElementById('list').appendChild(newElem);
		newElem.appendChild(newButton);
		Counter++;
		if(Counter == 5) {
			clickButton.removeEventListener('click', setElem);
			clickButton.setAttribute('disabled', true);
			document.getElementById('error').innerText = "There are cannot be more then 5 elements";
		}
	}

function Close() {
	var div = this.parentElement;
	document.getElementById('list').removeChild(div);
	Counter--;
	if(Counter < 5) {
		clickButton.removeAttribute('disabled');
		clickButton.addEventListener('click', setElem);
		document.getElementById('error').innerText = "";
	}
	text.focus();
}

text.focus();	
clickButton.addEventListener('click', setElem);

