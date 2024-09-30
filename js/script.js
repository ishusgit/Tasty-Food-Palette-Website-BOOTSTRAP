//back to top btn
function userScroll(){
const navbar = document.querySelector('.navbar');
const backtoTop = document.querySelector('#back-to-top');
window.addEventListener('scroll', () =>{
  if(window.scrollY > 50){
    navbar.classList.add('navbar-sticky');
    backtoTop.classList.add('show');
  }else{
    navbar.classList.remove('navbar-sticky');
    backtoTop.classList.remove('show');
  }
});
}
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// //eventlistener
document.addEventListener('DOMContentLoaded', userScroll);
document.querySelector('#back-to-top'), addEventListener('click',scrollToTop);
//prvent the back to top function from interfering with carousel buttons
document.querySelectorAll('.carousel-control-prev, .navbar-toggler, .carousel-control-next, .nav-tabs, .accordion, [data-bs-toggle=popover], [data-bs-toggle=tooltip]').forEach(button =>{
  button.addEventListener('click', function(event){
      event.preventDefault();
      event.stopPropagation();
  });
 });


//scroll triggered animation- scroll to corresponding section content should come from left and right
 document.addEventListener('DOMContentLoaded', function(){
  const sections = document.querySelectorAll('.scroll-section');
  const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
       }
    });
  }, { threshold:0.1 });
  
    sections.forEach(section =>{
      observer.observe(section);
  });
 });



// window.onscroll = function(){
//   const button = document.getElementById('back-to-top');
//   const scrollSections = document.querySelectorAll('.scroll-section');
//   const threshold = 100;
//   if(document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold) {
//       button.classList.add('visible');
//       button.style.display = "block";
//   } else {
//     button.classList.remove('visible');
//       button.style.display = "none";
//   }
//   scrollSections.forEach(section => {
//     const rect = section.getBoundingClientRect();
//     if(rect.top < window.innerHeight && rect.bottom >= 0) {
//       section.classList.add('show');
//     } else {
//       section.classList.remove('show');
//     }
//   });
// };