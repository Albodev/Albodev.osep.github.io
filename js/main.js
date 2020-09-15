$(function(){
    //preloader implementation
    $(window).load(function(){
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    //toggle navigation
    var menu = $(".nav ul");

    $("#toggle").on("click",function(e){
        e.preventDefault();
        menu.slideToggle("slow");
    });

   
    $(window).on("resize",function(){
        if($(this).width() > 968){
            menu.css({"display":"block"});
        }else{
            menu.css({"display":"none"});
        }
    });

});
/*modal Implementation
let close = document.querySelector("#close");
let WholeModal = document.querySelector(".modal-interface");
let modal = document.querySelector(".modal-content");
close.addEventListener("click",()=>{
    if(modal.classList.contains("slideInDown")){
        modal.classList.remove("slideInDown");
        modal.classList.add("slideOutUp");
    }
    let Outdelay = setTimeout(()=>{
        WholeModal.style.display = "none";
        if(modal.classList.contains("slideOutUp")){
            modal.classList.remove("slideOutUp");
        }
    },1000)
})
let delay = setTimeout(()=>{
    WholeModal.style.display = "block";
    modal.classList.add("slideInDown");
},7000)

*/


let images = document.querySelectorAll(".image");

for(let i = 0; i < images.length; i++){
    images[i].addEventListener("mouseout",()=>{
        images[i].classList.add('fadeOutUp');
    });
}

//slider implementation

var sliders = document.querySelectorAll(".slide-item"),
   arrowLeft = document.querySelector("#arrow-left"),
   arrowRight = document.querySelector("#arrow-right"),
   current = 0,
   curr = 0;

function reset(){
    for(var i = 0; i < sliders.length; i++){
        sliders[i].style.display = "none";
    }
}
function startSlide(){
    reset();
    sliders[0].style.display = "block";
}

//show previous
function slideLeft(){
    reset();
    sliders[current-1].style.display = "block";
    current--;
}
function slideRight(){
    reset();
    sliders[current+1].style.display = "block";
    current++;
}
arrowLeft.addEventListener("click",function(){
    if(current === 0){
        current = sliders.length;
    }
    slideLeft();
});
arrowRight.addEventListener("click",function(){
    if(current === sliders.length -1){
        current = -1;
    }
    slideRight();
});
function changeSlide(){
    reset();
    curr++;

    if(curr > sliders.length){
        curr = 1;
    }
    sliders[curr-1].style.display = "block";

    setTimeout(changeSlide,5000);
}
changeSlide();
