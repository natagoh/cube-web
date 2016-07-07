/*jQuery(document).ready(function(){
    var navOffset = jQuery("nav").offset().top;
    jQuery(window).scroll(function() {
        var scrollPos = jQuery(window).scrollTop();
        jQuery(".status").html(scrollPos);
        
        if(scrollPos >= navoffset){
            jQuery("nav").addClass("fixed");
        }
        else{
            jQuery("nav").removeClass("fixed");
        }
    })  
})*/

//parallax on-off tester
function parallaxOn() {
    document.getElementById("master").className = "parallaxOn";
    alert("Parallax is turned on.")
}
function parallaxOff() {
    document.getElementById("master").className = "parallaxOff";
    alert("Parallax is turned off.")
}

//background changer
function b1() {
    document.getElementById("master").className = "b1";
}
function b2() {
    document.getElementById("master").className = "b2";
}
function b3() {
    document.getElementById("master").className = "b3";
}
//smooth scroller
var scrollY = 0;
var distance = 40;
function smoothScroll(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('smoothScroll(\''+el+'\')',22);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} 
    else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } 
        else {
		    clearTimeout(animator);
	    }
	}
}

//back to top
function backSmoother(target){
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(target).offsetTop;
    var animator = setTimeout('backSmoother(\''+target+'\')',10);
    if(currentY > targetY){
        scrollY = currentY - distance;
        window.scroll(0,scrollY);
    }
    else{
        clearTimeout(animator);
    }
}
