let selArr = [];
let radioArr = [];

function radioObj() {
	
}

//document.getElementById('text').addEventListener('click', ShowHideText);
//document.getElementById('textarea').addEventListener('click', ShowHideArea);
//document.getElementById('textselect').addEventListener('click', ShowHideSelect);
//document.getElementById('textradio').addEventListener('click', ShowHideRadio);
//document.getElementById('date').addEventListener('click', ShowHideDate);
//document.getElementById('color').addEventListener('click', ShowHideColor);
//document.getElementById('mail').addEventListener('click', ShowHideMail);
//document.getElementById('pass').addEventListener('click', ShowHidePass);
document.getElementById('butt_add_text').addEventListener('click', AddText);
document.getElementById('butt_add_area').addEventListener('click', AddTextArea);
document.getElementById('butt_add_selectOpt').addEventListener('click', AddSelectOpt);
document.getElementById('butt_add_select').addEventListener('click', AddSelect);
document.getElementById('butt_add_radioOpt').addEventListener('click', AddRadioOpt);
document.getElementById('butt_add_radio').addEventListener('click', AddRadio);
document.getElementById('butt_add_date').addEventListener('click', AddDate);
document.getElementById('butt_add_color').addEventListener('click', AddColor);
document.getElementById('butt_add_mail').addEventListener('click', AddMail);
document.getElementById('butt_add_pass').addEventListener('click', AddPass);
document.getElementById('submit').addEventListener('click', Submit);
document.getElementById('reset').addEventListener('click', Reset);

let arr = Array.from(document.getElementById('right').children);
arr.forEach(function(item) {
	item.addEventListener('click', function (){ 
		let arrHide = Array.from(this.children);
		arrHide.forEach(function(item) {
			if(item.style.display == "block") {
				if(item.tagName == 'DIV') {
					item.style.display = "none";
				}
			}
			else {
				if(item.tagName == "DIV") {
					item.style.display = "block";
					item.style.backgroundColor = "#d1d2d4";
				}
			}			
		});
	});
})
																  
										  
//function ShowHideText() {
//	if (document.getElementById('showhidetext').style.display == "block") {
//		document.getElementById('showhidetext').style.display = "none";
//	} else {
//		document.getElementById('showhidetext').style.display = "block";
//		document.getElementById('text').style.backgroundColor = "#d1d2d4";
//	}
//}
//
//function ShowHideArea() {
//	if (document.getElementById('showhidetextarea').style.display == "block") {
//		document.getElementById('showhidetextarea').style.display = "none";
//	} else {
//		document.getElementById('showhidetextarea').style.display = "block";
//		document.getElementById('textarea').style.backgroundColor = "#d1d2d4;";
//	}
//}
//
//function ShowHideSelect() {
//	if (document.getElementById('showhideselect').style.display == "block") {
//		document.getElementById('showhideselect').style.display = "none";
//	} else {
//		document.getElementById('showhideselect').style.display = "block";
//		document.getElementById('textselect').style.backgroundColor = "#d1d2d4;";
//	}
//}
//
//function ShowHideRadio() {
//	if (document.getElementById('showhideradio').style.display == "block") {
//		document.getElementById('showhideradio').style.display = "none";
//	} else {
//		document.getElementById('showhideradio').style.display = "block";
//		document.getElementById('textradio').style.backgroundColor = "#d1d2d4;";
//	}
//}
//
//function ShowHideDate() {
//	if (document.getElementById('showhidedate').style.display == "block") {
//		document.getElementById('showhidedate').style.display = "none";;
//	} else {
//		document.getElementById('showhidedate').style.display = "block";
//		document.getElementById('date').style.backgroundColor = "#d1d2d4;";
//	}
//}
//
//function ShowHideColor() {
//	if (document.getElementById('showhidecolor').style.display == "block") {
//		document.getElementById('showhidecolor').style.display = "none";
//	} else {
//		document.getElementById('showhidecolor').style.display = "block";
//		document.getElementById('color').style.backgroundColor = "#d1d2d4;";
//	}
//}
//function ShowHideMail() {
//	if (document.getElementById('showhidemail').style.display == "block") {
//		document.getElementById('showhidemail').style.display = "none";
//	} else {
//		document.getElementById('showhidemail').style.display = "block";
//		document.getElementById('mail').style.backgroundColor = "#d1d2d4;";
//	}
//}
//
//function ShowHidePass() {
//	if (document.getElementById('showhidepass').style.display == "block") {
//		document.getElementById('showhidepass').style.display = "none";
//	} else {
//		document.getElementById('showhidepass').style.display = "block";
//		document.getElementById('pass').style.backgroundColor = "#d1d2d4;";
//	}
//}

function AddText() {
	let input = document.getElementById('inputText').value;
	let Text = document.createElement('input');
	Text.type = "text";
	Text.value = input;
	Text.className = 'leftText';
	Text.addEventListener('click', function() {this.value = ""});
	document.getElementById('result').appendChild(Text);
}

function AddTextArea() {
	let input = document.getElementById('inputArea').value;
	let Area = document.createElement('textarea');
	Area.setAttribute('rows', document.getElementById('inputAreaRows').value);
	Area.setAttribute('cols', document.getElementById('inputAreaCols').value);
	Area.innerHTML = input;
	Area.className = "leftArea";
	Area.addEventListener('click', function() {Area.value = ""});
	document.getElementById('result').appendChild(Area);
}

function AddSelectOpt() {
	let opt = new Option();
	opt.value = document.getElementById('inputSelectOptVal').value;
	opt.name = document.getElementById('inputSelectOptName').value;
	opt.innerHTML = document.getElementById('inputSelectOptVal').value;
	selArr.push(opt);
}

function AddSelect() {
	let headerSel = document.createElement('p');
	headerSel.className = "selTitle";
	headerSel.innerHTML = document.getElementById('inputSelect').value;
	document.getElementById('result').appendChild(headerSel);
	let sel = document.createElement('select');
	sel.className = 'select';
	selArr.forEach(function (item) {
		sel.appendChild(item);
	});
	document.getElementById('result').appendChild(sel);
	selArr = [];
}

function AddRadioOpt() {
	let RadioLabel = document.createElement('label');
	RadioLabel.setAttribute('for', document.getElementById('inputRadioLabel').value);
	RadioLabel.innerHTML = document.getElementById('inputRadioLabel').value;
	let opt = document.createElement('input');
	opt.type = 'radio';
	opt.value = document.getElementById('inputRadioOptVal').value;
	opt.name = document.getElementById('inputRadio').value;
	let o = new radioObj();
	o.label = RadioLabel;
	o.opt = opt;
	radioArr.push(o);
}

function AddRadio() {
	let headerRad = document.createElement('p');
	headerRad.className = "radTitle";
	headerRad.innerHTML = document.getElementById('inputRadio').value;
	document.getElementById('result').appendChild(headerRad);
	radioArr.forEach(function (item) {
		document.getElementById('result').appendChild(item.label);
		document.getElementById('result').appendChild(item.opt);
	});
	radioArr = [];
}

function AddDate() {
	let date = document.createElement('p');
	date.className = 'dateRes';
	date.innerHTML = document.getElementById("dateTab").value;
	document.getElementById('result').appendChild(date);
}

function AddColor() {
	document.body.style.backgroundColor = document.getElementById('colorTab').value;
}
function AddMail() {
	let title = document.createElement('p');
	title.className = "mailTitle";
	title.innerHTML = document.getElementById('mailInput').value;
	document.getElementById('result').appendChild(title);
	let Mail = document.createElement('input');
	Mail.type = "login";
	Mail.value = "Login";
	Mail.className = 'leftText';
	Mail.addEventListener('click', function() {Mail.value = ""});
	document.getElementById('result').appendChild(Mail);
}
function AddPass() {
	let title = document.createElement('p');
	title.className = "passTitle";
	title.innerHTML = document.getElementById('passInput').value;
	document.getElementById('result').appendChild(title);
	let pass = document.createElement('input');
	pass.type = "password";
	pass.value = "";
	pass.className = 'leftText';
	document.getElementById('result').appendChild(pass);
}
function Submit() {
	let count = confirm("Are you sure to submit form?");
	if(count === true) {
		alert("Submited");
	}
}
function Reset() {
	let count = confirm("Are you sure to reset form?");
	if(count === true) {
		document.getElementById('result').innerHTML = "";
		document.body.style.backgroundColor = "#e7e8ea";
		setTimeout(function() { alert("Form was successfully clearned"); } , 100);
	}
}
