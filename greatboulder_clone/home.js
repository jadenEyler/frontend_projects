//slider
const sliderItems=document.querySelector('.slides');
const sliderImages=document.querySelectorAll('.slider .slides .slide');
const img=document.querySelectorAll('.slider .slides .slide img')
const header =document.querySelector('header')
//buttons
const prevBtn =document.querySelector('#prevbtn');
const nextBtn =document.querySelector('#nextbtn');

//counter
let counter=1;
const size=sliderImages[0].clientWidth;

sliderItems.style.transform='translateX('+(-size *counter)+'px)';



//buttons2
nextBtn.addEventListener('click',()=>{
    if(counter>=sliderImages.length-1) return;

    sliderItems.style.transition="transform 1s ease-in-out";
    counter++;
    sliderItems.style.transform='translateX('+(-size *counter)+'px)';

});
prevBtn.addEventListener('click',()=>{
    if(counter<=0) return;
    sliderItems.style.transition="transform 1s ease-in-out";
    counter--;
    sliderItems.style.transform='translateX('+(-size *counter)+'px)';

});

//slide listenter
sliderItems.addEventListener('transitionend',()=>{
if(sliderImages[counter].id==='lastc'){
    sliderItems.style.transition="none";
    counter=sliderImages.length-2;
    sliderItems.style.transform='translateX('+(-size *counter)+'px)';

}
if(sliderImages[counter].id==='firstc'){
    sliderItems.style.transition="none";
    counter=sliderImages.length-counter;
    sliderItems.style.transform='translateX('+(-size *counter)+'px)';

}

});

//navbar
const toggleButton=document.getElementsByClassName('toggle-button')[0];
const navbarLinks=document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active')
})