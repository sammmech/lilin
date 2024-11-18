

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