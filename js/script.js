// initialize cube
var cubeSetup = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	console.log(w + " " + h)

	// set scene
	document.getElementById("scene").style.width = w + "px";
	document.getElementById("scene").style.height = h + "px";

	// set cube
	/*
	 .cube {
	  position: relative;
	  width: 1200px;
	  height: 600px;
	  transform: perspective(4800px) translateZ(-600px);
	}
	*/
	document.getElementById("cube").style.width = w + "px";
	document.getElementById("cube").style.height = h + "px";
	document.getElementById("cube").style.webkitTransform = "perspective(" + w*4 + "px)";
	document.getElementById("cube").style.webkitTransform = "translateZ(" + (-1*w/2) + "px)";

	// set the size of the faces
	/* 
		width: 1200px;
	  	height: 600px;
	  	transform-origin: 50% 50% -300px;
	  	transform: perspective(4800px)
  	*/
	var faces = document.getElementById("cube").getElementsByClassName('face');
	for (i = 0; i < faces.length; i++) {
		faces[i].style.width = w + "px";
		faces[i].style.height = h + "px";
		faces[i].style.transform = "perspective(" + w*4 + "px)";
		faces[i].style.transformOrigin = "50 50 " + -1*h/2 + "px";
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


function rotateScenes(){
  var scroll = window.pageYOffset,
      relPos = scroll / height,
      angle = 90 * relPos;
  
  if(scroll >= height){
    section1.style.transform = "rotateX(90deg)";
    section2.style.transform = "rotateX(0deg)";
  }
  
  section1.style.transform = "rotateX(" + (angle) + "deg)";
  section2.style.transform = "rotateX(-" + (90 - angle) + "deg)";
}

var section1 = document.querySelector("#top"),
    section2 = document.querySelector("#content"),
    height = window.innerHeight;
window.addEventListener("scroll", rotateScenes);