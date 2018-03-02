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
		faces[i].style.webkitPerspective = w*4 + "px";
		faces[i].style.webkitTransform = "transformOrigin(50%, 50%," + -1*offset + "px)";
	}

}

// centering splash logo and intro
var center = function() {
	cubeSetup();
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
