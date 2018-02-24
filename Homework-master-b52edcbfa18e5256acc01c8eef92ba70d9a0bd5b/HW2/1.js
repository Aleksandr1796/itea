
var buttons=document.querySelectorAll('button');

buttons.forEach(function(item){
	item.onclick=function (event) {
		var tabId=item.dataset.tab;
		var tab=document.querySelector('div.tab[data-tab="'+tabId+'"]');
		tab.classList.add('active');
	};
});

var hideButton=document.createElement('button');
hideButton.classList.add('showButton');
var buttonContainer=document.getElementById('buttonContainer');
hideButton.innerHTML='Hide all buttons';
buttonContainer.appendChild(hideButton);

var hideAllTabs=function(){
	var allTabs=document.querySelectorAll('.tab');
	allTabs.forEach(function(item){
		item.classList.remove('active');
	});
};
hideButton.onclick=hideAllTabs;
