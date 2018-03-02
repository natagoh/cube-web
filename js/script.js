// initialize cube
var cubeSetup = function() {
	// var w = window.innerWidth/2;
	// var h = window.innerHeight/2;

	var w = 1200;
	var h = 600;
		
	console.log(w + " " + h)

	// set sizes of scene
	document.getElementById("scene").style.width = w + "px";
	document.getElementById("scene").style.height = h + "px";

	// set perspective = 4w
	document.getElementById("scene").style.transform = "perspective(" + w*4 + "px)";

	// set the sizes of the cube 
	document.getElementById("cube").style.height = h + "px";
	document.getElementById("cube").style.width = w + "px";

	// set cube translate = h/2
	// document.getElementById("cube").style.transform = "perspective(" + w*4 + "px)";
	document.getElementById("cube").style.transform = "translateZ(" + (-1*h/2) + "px)";

	// set the size of the faces
	var faces = document.getElementById("cube").getElementsByClassName('side');
	for (i = 0; i < faces.length; i++) {
		faces[i].style.width = w + "px";
		faces[i].style.height = h + "px";
		// faces[i].style.transform = "perspective(" + w*4 + "px)";
		// faces[i].style.transform = "transformOrigin(50% 50% " + -1*h/2 + "px)";
	}

	// set face rotations
	/*
		.back {
			transform: translateZ(-300px) rotateX(180deg);
		}
		.top {
			transform: translateY(-300px) rotateX(90deg);
		}
		.bottom {
			transform: translateY(300px) rotateX(270deg);
		}
		.front {
			transform: translateZ(300px);
		}
	*/
	// set the size of the faces
	var faces1 = document.getElementById("cube").getElementsByClassName('side back');
	faces1[0].style.transform = "translateZ(" + (-1*h/2) + "px)";

	var faces2 = document.getElementById("cube").getElementsByClassName('side top');
		faces2[0].style.transform = "translateY(" + (-1*h/2) + "px)";

	var faces3 = document.getElementById("cube").getElementsByClassName('side bottom');
		faces3[0].style.transform = "translateY(" + (h/2) + "px)";

	var faces4 = document.getElementById("cube").getElementsByClassName('side front');
		faces4[0].style.transform = "translateZ(" + (h/2) + "px)";

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
