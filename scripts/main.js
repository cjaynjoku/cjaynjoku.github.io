let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/Manitoba.jpg') {
      myImage.setAttribute('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute('src','images/Manitoba.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
	let myName = prompt('Please enter your name!');
	if(!myName){
		setUserName();
	} else {
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Immigrate to Manitoba, ' + myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
} else{
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Immigrate to Manitoba, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
