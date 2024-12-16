//  const burger = document.querySelector('.cacher');
 const nav = document.querySelector('.navbar_header');
 const menuburger = document.querySelector('.navMenuBurg')
 const divburger = document.querySelector('.imgburgers')

//  burger.addEventListener('click', () => {
//     menuburger.classList.add('menuderoulant');
//     nav.classList.add('navbarHeader');
//     nav.classList.remove('navbar_header');
//     menuburger.classList.add('bidule');
//  });

 menuburger.addEventListener('click', () => {
    divburger.classList.toggle('menuderoulant');
    nav.classList.toggle('navbarHeader');
    menuburger.classList.toggle('bidule');
 });


// const croix = document.querySelector('.croix');

// croix.addEventListener('click', () => {
//     menuburger.classList.remove('menuderoulant');
//     nav.classList.remove('navbarHeader');
//     nav.classList.add('navbar_header');
//     menuburger.classList.remove('bidule');
// })
