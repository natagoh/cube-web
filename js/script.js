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

  document.getElementById("cube").style.transform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}, false);


// get scrolling event without scrollbar
var angle = 0;
document.addEventListener("wheel", function(e) {
    // 1 scroll unit seems to be 200 (scroll down)
    var scroll = parseInt(e.deltaY);

    // scroll down
    if (scroll > 0) {
      angle -= 90;
    } else {
      angle += 90;
    }
    console.log("angle: " + angle);
    document.getElementById("cube").style.transform = "rotateX("+angle+"deg)";
});