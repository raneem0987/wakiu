var navbarElement = document.querySelector("nav");
var stickyPosition = navbarElement.offsetTop;

window.addEventListener("scroll",function(e){

    if(window.scrollY >= navbarElement.offsetTop){
        navbarElement.classList.add("sticky");
    }else
    {
        navbarElement.classList.remove("sticky");
    }
})
