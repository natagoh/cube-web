// matrix stuff
// from https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Matrix_math_for_the_web
function multiplyMatrixAndPoint(matrix, point) {
  
  //Give a simple variable name to each part of the matrix, a column and row number
  var c0r0 = matrix[ 0], c1r0 = matrix[ 1], c2r0 = matrix[ 2], c3r0 = matrix[ 3];
  var c0r1 = matrix[ 4], c1r1 = matrix[ 5], c2r1 = matrix[ 6], c3r1 = matrix[ 7];
  var c0r2 = matrix[ 8], c1r2 = matrix[ 9], c2r2 = matrix[10], c3r2 = matrix[11];
  var c0r3 = matrix[12], c1r3 = matrix[13], c2r3 = matrix[14], c3r3 = matrix[15];
  
  //Now set some simple names for the point
  var x = point[0];
  var y = point[1];
  var z = point[2];
  var w = point[3];
  
  //Multiply the point against each part of the 1st column, then add together
  var resultX = (x * c0r0) + (y * c0r1) + (z * c0r2) + (w * c0r3);
  
  //Multiply the point against each part of the 2nd column, then add together
  var resultY = (x * c1r0) + (y * c1r1) + (z * c1r2) + (w * c1r3);
  
  //Multiply the point against each part of the 3rd column, then add together
  var resultZ = (x * c2r0) + (y * c2r1) + (z * c2r2) + (w * c2r3);
  
  //Multiply the point against each part of the 4th column, then add together
  var resultW = (x * c3r0) + (y * c3r1) + (z * c3r2) + (w * c3r3);
  
  return [resultX, resultY, resultZ, resultW];
}

function multiplyMatrices(matrixA, matrixB) {
  // Slice the second matrix up into columns
  var column0 = [matrixB[0], matrixB[4], matrixB[8], matrixB[12]];
  var column1 = [matrixB[1], matrixB[5], matrixB[9], matrixB[13]];
  var column2 = [matrixB[2], matrixB[6], matrixB[10], matrixB[14]];
  var column3 = [matrixB[3], matrixB[7], matrixB[11], matrixB[15]];
  
  // Multiply each column by the matrix
  var result0 = multiplyMatrixAndPoint(matrixA, column0);
  var result1 = multiplyMatrixAndPoint(matrixA, column1);
  var result2 = multiplyMatrixAndPoint(matrixA, column2);
  var result3 = multiplyMatrixAndPoint(matrixA, column3);
  
  // Turn the result columns back into a single matrix
  return [
    result0[0], result1[0], result2[0], result3[0],
    result0[1], result1[1], result2[1], result3[1],
    result0[2], result1[2], result2[2], result3[2],
    result0[3], result1[3], result2[3], result3[3]
  ];
}

  var sin = Math.sin;
  var cos = Math.cos;

function rotateAroundXAxis(a) {
  return [
       1,       0,        0,     0,
       0,  cos(a),  -sin(a),     0,
       0,  sin(a),   cos(a),     0,
       0,       0,        0,     1
  ];
}

// translation matrix
function translate(x, y, z) {
	return [
	    1,    0,    0,   0,
	    0,    1,    0,   0,
	    0,    0,    1,   0,
	    x,    y,    z,   1
	];
}

// Create the matrix3d style property from a matrix array
function matrixArrayToCssMatrix(array) {
  return 'matrix3d(' + array.join(',') + ')';
}

// initialize cube
var cubeSetup = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;

	console.log(w + " " + h)

	// set sizes of scene
	document.getElementById("scene").style.width = w + "px";
	document.getElementById("scene").style.height = h + "px";

	// set perspective = 4w
	document.getElementById("scene").style.perspective =  w*4 + "px";

	// set the sizes of the cube 
	document.getElementById("cube").style.height = h + "px";
	document.getElementById("cube").style.width = w + "px";

	// set cube translate = h/2
	var trans = translate(0, 0, (-1*h/2));
	var rot = rotateAroundXAxis( 0 );
	var mat = multiplyMatrices(rot, trans);
	var matstyle = matrixArrayToCssMatrix(mat);
	document.getElementById("cube").style.transform = matstyle;

	// set the size of the faces
	var faces = document.getElementById("cube").getElementsByClassName('side');
	for (i = 0; i < faces.length; i++) {
		faces[i].style.width = w + "px";
		faces[i].style.height = h + "px";
	}

	// set face rotations
	// back face
	trans = translate(0, 0, (-1*h/2));
	rot = rotateAroundXAxis( Math.PI );
	mat = multiplyMatrices(rot, trans);
	matstyle = matrixArrayToCssMatrix(mat);

	var back = document.getElementById("cube").getElementsByClassName('side back');
	back[0].style.transform = matstyle;

	// top
	trans = translate(0, (-1*h/2), 0);
	rot = rotateAroundXAxis( Math.PI /2);
	mat = multiplyMatrices(rot, trans);
	matstyle = matrixArrayToCssMatrix(mat);

	var top = document.getElementById("cube").getElementsByClassName('side top');
	top[0].style.transform = matstyle;

	// bottom
	trans = translate(0, h/2, 0);
	rot = rotateAroundXAxis( Math.PI *3/2);
	mat = multiplyMatrices(rot,trans);
	matstyle = matrixArrayToCssMatrix(mat);

	var bottom = document.getElementById("cube").getElementsByClassName('side bottom');
	bottom[0].style.transform = matstyle;

	// front
	var front = document.getElementById("cube").getElementsByClassName('side front');
	front[0].style.transform = "translateZ(" + (h/2) + "px)";

}

// var angle1 = 0;
// document.addEventListener('keydown', function(e) {
//   var prevAngle1 = angle1;
//   switch(e.keyCode) {

//     case 38: // up
//       angle1 += 90;
//       break;

//     case 40: // down
//       angle1 -= 90;
//       if (angle1 < 0) { angle1 = 360 + angle1; }
//       break;
//   };

//    angle1 %= 360;

   
  // var h = window.innerHeight;
  // var trans = translate(0, 0, -1*h/2);
  // var rot = rotateAroundXAxis( Math.PI * angle1 / 180);
  // var mat = multiplyMatrices(rot,trans);
  // var matstyle = matrixArrayToCssMatrix(mat);
  // //document.getElementById("cube").style.transform = "rotateX("+xAngle+"deg)";
  // document.getElementById("cube").style.transform = matstyle;
  

//   var cube = document.getElementById("cube");
//     var rotateclass = " rotate-" + prevAngle1 + "-" + angle1;
//     cube.className = " " + rotateclass;
// }, false);


// get scrolling event without scrollbar
var angle = 0;
function triggerRotation(e) {
    var prevAngle = angle;

    // wheel event
    if (e.type == "wheel") {
      var scroll = parseInt(e.deltaY);
      // scroll down
      if (scroll > 0) {
        angle -= 90;
        if (angle < 0) { angle = 360 + angle; }

      } else {
        angle += 90;
      } 
    } 
    else if (e.type == "keydown") {
      switch(e.keyCode) {
          case 38: // up key
          angle -= 90;
            if (angle < 0) { angle = 360 + angle; }
            break;

          case 40: // down key
            angle += 90;
            break;
        };
    }

    angle %= 360;
    
    // animation jank hacked solution
    var cube = document.getElementById("cube");
    var rotateclass = " rotate-" + prevAngle + "-" + angle;
    cube.className = " " + rotateclass;
}

// throttle scrolling once per animation
document.addEventListener("wheel", _.throttle(triggerRotation, 1000, {leading:true, trailing:false}))
document.addEventListener("keydown", _.throttle(triggerRotation, 1000, {leading:true, trailing:false}))

//converts a string of transform matrix into a matrix
function stringToMatrix(s) {
  var array = s.substring(0, s.length-1).split(", ");
  array[0] = array[0].replace("matrix3d(", "");
  return array;
}

// generate css keyframes with dynamic height attributes for a perfect animation
var gen = function() {
  // first remove old styles from prev resizings
  var oldStyle = document.getElementById("webkit");
  if (oldStyle != null) {
    var sheetParent = oldStyle.parentNode;
    sheetParent.removeChild(oldStyle);
  }

  var style = document.createElement('style');
  style.setAttribute("id", "webkit");
  style.type = 'text/css';
  var keyFrames = '\
    @keyframes rotate-0-90 {\
      0%  {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(0deg); }\
      100% {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(90deg); }\
    }\
    @keyframes rotate-90-180 {\
      0%  {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(90deg); }\
      100% {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(180deg); }\
    }\
    @keyframes rotate-180-270 {\
      0%  {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(180deg); }\
      100% {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(270deg); }\
    }\
    @keyframes rotate-270-360 {\
      0%  {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(270deg); }\
      100% {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(360deg); }\
    }\
    @keyframes rotate-90-0 {\
      0%  {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(90deg); }\
      100% {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(0deg); }\
    }\
    @keyframes rotate-180-90 {\
      0%  {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(180deg); }\
      100% {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(90deg); }\
    }\
    @keyframes rotate-270-180 {\
      0%  {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(270deg); }\
      100% {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(180deg); }\
    }\
    @keyframes rotate-360-270 {\
      0%  {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(360deg); }\
      100% {\ transform: translateZ(-DYNAMIC_VARpx) rotateX(270deg); }\
    }';
     var h = window.innerHeight;
    style.innerHTML = keyFrames.replace(/DYNAMIC_VAR/g, h/2+"");
    document.getElementsByTagName('head')[0].appendChild(style);
}

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
  //var divHeight = document.getElementById("splash-container").clientHeight;
  //var windowHeight = window.innerHeight;
  //var offset = (windowHeight - divHeight)/2 + "px";
  //document.getElementById("splash-container").style.marginTop = offset;
}

// centering splash logo and intro
var initialize = function() {
  cubeSetup();
  gen();
  center();
}

if ( document.readyState === "complete" || ( document.readyState !== "loading" && !document.documentElement.doScroll )) {
  initialize();
} else {
  document.addEventListener("DOMContentLoaded", initialize);
}

// debounce resize 
window.addEventListener("resize", _.debounce(initialize, 500, {leading:false, trailing:true}));