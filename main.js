var navOffset = $("nav").offset().top;
var isNavClosed = false;

$(document).ready(function(){
    $("nav").wrap('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height($("nav").outerHeight());
    $(".x-button").hide();
    $("#shrunk-nav").hide();
    $("div#shrunk-nav").removeClass("float-with-nav");
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        
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
                $("nav").addClass("fixed");
                $("header").addClass("no-shadow");
                $(".x-button").show();
            } 
            else{
                $("nav").removeClass("fixed");
                $("header").removeClass("no-shadow");
                $(".x-button").hide();
                $("#shrunk-nav").hide();
            }
        }
    })  
})

//close navigation tab
function closeNav() {
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
