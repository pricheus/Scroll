// dynamic date
const date =  document.getElementsByClassName('dynamicDate')[0];
date.innerHTML = new Date().getFullYear()

//dynamic scroll
const header =  document.querySelector('header');
const Home = document.getElementById('home');
window.onscroll = function(){
   
   const headerHeight = header.getBoundingClientRect().height;
   if (window.pageYOffset > headerHeight){
        header.classList.add('onScroll')
   } else{
    header.classList.remove('onScroll')
   }                                                                                 
}

//dynamic toggle
const toggleBtn = document.querySelector('.toggleBtn');
const linksContainer = document.querySelector('nav');
const links =  document.querySelector('.links')

toggleBtn.onclick = function(){
    const navHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(navHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
        linksContainer.style.transitionDuration = '0.5s';
    } else {
        linksContainer.style.height = 0;
    }
        

}
