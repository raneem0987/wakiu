var navbarElement = document.querySelector("nav");
var stickyPosition = navbarElement.offsetTop;

window.addEventListener("scroll",function(e){

    if(window.scrollY >= navbarElement.offsetTop){
        if(mobileNavElement.classList.contains("hide")){

            navbarElement.classList.add("sticky");
        }else
        {
            navbarElement.classList.remove("sticky");
        }
    }else
    {
        navbarElement.classList.remove("sticky");
    }
})

     /////mobile navbar/////

var menuvarbar = document.querySelector(".menubar-icon");

var closeMenuElement = document.querySelector(".close-menu");

var mobileNavElement = document.querySelector(".mobile-nav");

menuvarbar.addEventListener("click", function (e) {

    mobileNavElement.classList.remove("hide");
    navbarElement.classList.remove("sticky");
    mobileNavElement.classList.remove("animate-fadeOutRight");
    mobileNavElement.classList.add("animate-fadeInRight");

})

closeMenuElement.addEventListener("click", function(){
    mobileNavElement.classList.add("hide");
    mobileNavElement.classList.remove("animate-fadeInRight");
    mobileNavElement.classList.add("animate-fadeOutRight");
})
