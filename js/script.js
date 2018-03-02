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

// centering splash logo and intro
var center = function() {
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

