var navbar = document.getElementById("nav");

var sticky = nav.offsetTop;

window.onscroll = function(){
    if(window.scrollY > sticky){
navbar.classList.add("sticky")
    }else
    {
        navbar.classList.remove("sticky")
    }
}
