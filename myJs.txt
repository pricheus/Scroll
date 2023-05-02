//interactive elements
const toggleNav = document.querySelector('#navForPhone');
const linksConatiner = document.querySelector('.navForComputer');
const links = document.querySelector('.links')

//event lsiteners

//dynamic date
const date = document.querySelector('.date');
date.innerHTML= new Date().getFullYear()

//dynamic toggle
const navHeight = toggleNav.getBoundingClientRect();
toggleNav.onclick = function(){
    //nav.classList.toggle('show_nav')

   
    const linksHeight = links.getBoundingClientRect().height;
    if(navHeight === 0){
        navbar.style.height = `${linksHeight}px`
    }
}

const navbar = document.querySelector('header');
//fixed navBar
window.onscroll = function(){
    const scrollHeight = window.pageYOffset ;
    const navHeight = navbar.getBoundingClientRect().height
    if(scrollHeight > navHeight){
      navbar.classList.add('fixed_header') 
    } else {
        navbar.classList.remove('fixed_header') 
    }
}