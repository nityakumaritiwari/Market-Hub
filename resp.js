Burger=document.querySelector('.Burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')

Burger.addEventListener('click',()=>{
       rightNav.classList.toggle('v-class');
       navList.classList.toggle('v-class');
       navbar.classList.toggle('h-nav');
})