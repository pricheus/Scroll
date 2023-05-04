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
   };

   const homeHeight = Home.getBoundingClientRect().height;
   if(window.pageYOffset > homeHeight ){
    topBtn.classList.add('material-symbols-outlined')
   } else {
    topBtn.classList.remove('material-symbols-outlined')
   }
   
   
}

//adjust links with sections
const navLinks  = document.querySelectorAll('scroll_links');
navLinks.forEach(function(links){
    links.onclick = function(e){
        e.preventDefault();

        const id = e.currentTarget;
        console.log(id)
    }
})

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

//get to the top BUTTON
const topBtn = document.querySelector('#getTop');
topBtn.onclick = function(){
    window.scrollTo({
        top:0
    });
};

