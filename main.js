// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11.1.14/+esm'
//  let search = document.querySelector('#search-icon');
//  let navbar = document.querySelector('.search-form');


//  search.onclick = () =>{
//      search.classList.toggle('search-form');
//       navbar.classList.toggle('active');
//  }




// //  window.onscroll = () =>{
// //      form.classList.remove('fa-times');
// //      navbar.classList.remove('#search-form');
// //  }




  document.querySelector('#search-icon').onclick = () =>{
    console.log("it hit here")
     document.querySelector('#search-form').classList.toggle('active');
 }

 document.querySelector('#close').onclick = () =>{
     document.querySelector('#search-form').classList.remove('active');  }

    //  var swiper = new Swiper('.swiper', {
    //   spaceBetween: 30,
    //   centeredSlides: true,
    //   autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //  loop:true,
     
    // });