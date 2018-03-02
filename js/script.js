// animate logo
// options: async, delayed, oneByOne
var logo = new Vivus('logo', {
  	start: 'autostart', 
  	type: 'oneByOne', 
  	duration: 250,
  	animTimingFunction: Vivus.EASE
}, fillupdate)

// debug
// console.table(logo.map);

// fills and updates more text
function fillupdate() {
	fill();
	document.getElementById("about").style.visibility = "visible";
}

// fill in logo with color
function fill() {
	// fill logo
	var light = document.getElementsByClassName('cls-1 light');
	var med = document.getElementsByClassName('cls-1 med');
	var dark = document.getElementsByClassName('cls-1 dark');

	for (i = 0; i < light.length; i++) {
		light[i].style.fill = '#fdbc3a';
		light[i].style.stroke = 'none';
	}

	for (i = 0; i < med.length; i++) {
		med[i].style.fill = '#f6931b';
		med[i].style.stroke = 'none';
	}

	for (i = 0; i < dark.length; i++) {
		dark[i].style.fill = '#f2652a';
		dark[i].style.stroke = 'none';
	}
}

// initialize cube
var cubeSetup = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	var offset = h/2;

	// set the perspective
	document.getElementById("viewbox").style.webkitPerspective = w*4 + "px";
	document.getElementById("viewbox").style.perspectiveOrigin = w + "px" + "50%";

	// set the sizes of the cube 
	document.getElementById("cube").style.height = h + "px";
	document.getElementById("cube").style.width = w + "px";

	// set the size of the faces
	var faces = document.getElementById("cube").getElementsByClassName('face');
	for (i = 0; i < faces.length; i++) {
		faces[i].style.height = h + "px";
		faces[i].style.width = w + "px";

		// set rotations
		//faces[i].style.webkitTransform = "translateZ(" + offset + "px)";
	}

}

// centering splash logo and intro
var center = function() {
	cubeSetup();

	var divHeight = document.getElementById("splash-container").clientHeight;
	var windowHeight = window.innerHeight;
	var offset = (windowHeight - divHeight)/2 + "px";
	document.getElementById("splash-container").style.marginTop = offset;
}

if ( document.readyState === "complete" || ( document.readyState !== "loading" && !document.documentElement.doScroll )) {
	center();
} else {
	document.addEventListener("DOMContentLoaded", center);
}

// handle resize
window.onresize = function(event) {
	center();
};

var xAngle = 0, yAngle = 0;
document.addEventListener('keydown', function(e) {
  switch(e.keyCode) {

    case 37: // left
      yAngle -= 90;
      break;

    case 38: // up
      xAngle += 90;
      break;

    case 39: // right
      yAngle += 90;
      break;

    case 40: // down
      xAngle -= 90;
      break;
  };

  document.getElementById("cube").style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);
