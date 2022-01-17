const btnSp=document.querySelector('.sp'),
    hide=document.querySelector('.hide'),
    tabContainer=document.querySelector('.tabs-container'),
    tabSaidbar=document.querySelector('.tab-saidbar');

    btnSp.addEventListener('click', ()=>{
        tabContainer.classList.toggle('tab-swiper');
        tabSaidbar.classList.toggle('tab-swiper');
    })


    hide.addEventListener('click', ()=>{
        tabContainer.classList.toggle('tab-swiper');
        tabSaidbar.classList.toggle('tab-swiper');
    })