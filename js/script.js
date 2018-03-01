// animate logo
// async
// delayed
// oneByOne
var logo = new Vivus('logo', {
  	start: 'autostart', 
  	type: 'oneByOne', 
  	duration: 250,
  	animTimingFunction: Vivus.EASE
}, fill)

// debug
// console.table(logo.map);

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