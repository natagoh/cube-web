/*//loading screen lmao fake its actully just a timer xD
$(document).ready(function(){
    setTimeout(function() {
            document.getElementById("load_screen").className = "remove"; 
        }, 1500);
})*/

//real loading screen
$(document).ready(function(){
    window.addEventListener("load", function(){
	   var load_screen = document.getElementById("load_screen");
	   document.body.removeChild(load_screen);
    });
})

//ensures accurate info for nav bar stuff
/*
$( window ).resize(function() {
    location.reload();
})
*/
//navigation bar stuff
var isNavClosed = false;
$(document).ready(function(){
    $(".x-button").hide();
    $("#shrunk-nav").hide();
    $("div#shrunk-nav").removeClass("float-with-nav");
    $("#splash").height($(window).height());
    $("nav-alt").height($("#shrunk-nav-button").outerHeight());
    
    var $nav = $("nav");
    var navOffset = $nav.offset().top;
    $nav.wrap('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height($nav.outerHeight());
    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();
        
        //if nav bar is shrunk just do normal bar
        if(isNavClosed){
            $("nav").removeClass("fixed");
            $("header").removeClass("no-shadow");
            $(".x-button").hide();
            
            //if scroll above navOffset, reset to as if navbar not shrunk
            if(scrollPos < navOffset) {
                $(".x-button").hide();
                isNavClosed = false;
            }
        }
        //do the normal sticky thingy
        else{
            if(scrollPos >= navOffset){
                $nav.addClass("fixed");
                $(".x-button").show();
                $("header").addClass("no-shadow");
            } 
            else{
                $nav.removeClass("fixed");
                $(".x-button").hide();
                $("#shrunk-nav").hide();
                $("header").removeClass("no-shadow"); 
            }
        }
    })  
})

//close navigation tab
function closeNav() {
    var navOffset = $("nav").offset().top;
    closeNav;
    $("#shrunk-nav").show();
    isNavClosed=true;
    var scrollPos = $(window).scrollTop();
    if(scrollPos >= navOffset){
        $("nav").removeClass("fixed");
    }
}

//open nav bar
function openNav() {
    $("#shrunk-nav").hide();
    isNavClosed=false;
    $("nav").addClass("fixed");
    $("header").addClass("no-shadow");
    $(".x-button").show();
}
//mobile navigation
function openNav_phone(){
    $("#dropdown").toggle();
}

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

//back to top
var scrollY = 0;
var distance = 40;
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

//add smmoth scrolling to all links
$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function() {
                window.location.hash = hash;
            });
        }
    });
});

//splash screen
$(document).ready(function(){
    $("h1").mouseover(function(){
        $("h1").css("display", "none");
        $(".explore").css("display", "block");
        $(".explore").height($("h1").innerHeight());
    });
    $("h1").mouseout(function(){
        $("h1").css("display", "block");
        $(".explore").css("display", "none");
    });
});
/*media query
$(window).resize(function(){
	if ($(window).width() <= 667){	
		$("nav").detach();
	}	
    else{
        $("nav").appendTo("#nav-space");
    }
});*/