//back to top btn
function userScroll(){
const navbar = document.querySelector('.navbar');
const backtoTop = document.querySelector('#back-to-top');
window.addEventListener('scroll', () =>{
  if(window.scrollY > 50){
    navbar.classList.add('navbar-sticky');
    //navbar.classList.add('about-bg');
    backtoTop.classList.add('show');
  }else{
    navbar.classList.remove('navbar-sticky');
    //navbar.classList.add('about-bg');
    backtoTop.classList.remove('show');
  }
});
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//eventlistener
document.addEventListener('DOMContentLoaded', userScroll);
document.querySelector('#back-to-top'), addEventListener('click',scrollToTop);
//prvent the back to top function from interfering with carousel buttons
document.querySelectorAll('.carousel-control-prev, .navbar-toggler, .carousel-control-next, .nav-tabs, .accordion, [data-bs-toggle=popover], [data-bs-toggle=tooltip]').forEach(button =>{
  button.addEventListener('click', function(event){
      event.preventDefault();
      event.stopPropagation();
  });
 });