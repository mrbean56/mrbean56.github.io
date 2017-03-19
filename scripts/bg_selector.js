var redData = 100;
var greenData = 111;
var blueData = 103;

function setRed(redValue){
  document.getElementById("redValue").innerHTML = redValue;
  redData = redValue;
}

function setGreen(greenValue){
  document.getElementById("greenValue").innerHTML = greenValue;
  greenData = greenValue;
}

function setBlue(blueValue){
  document.getElementById("blueValue").innerHTML = blueValue;
  blueData = blueValue
}

function setBG(){
	document.body.style.background = "rgb(" + redData + ", " + greenData + ", " + blueData + ")";
}

function showMenu() {
	document.getElementById("optionsWrapper").style.display = "block";
	document.getElementById("optionsIcon").style.display = "none";
	document.getElementById("xIcon").style.display = "block";

}

function hideMenu() {
	document.getElementById("optionsWrapper").style.display = "none";
	document.getElementById("optionsIcon").style.display = "block";
	document.getElementById("xIcon").style.display = "none";
}