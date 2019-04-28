function slideShow(){
  var slideshow = $(".slideshow");

  setInterval(function(){ slideshow.toggleClass("slideshow-img-2"); }, 2000);

};

















function init(){

  slideShow();

}



$(document).ready(init)
