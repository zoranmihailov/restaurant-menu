let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('yellow');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    navbar.classList.remove("active");
    menu.classList.remove("yellow");
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menu.classList.remove("yellow");
    });
});


let openShopCart=document.querySelector('.shop-cart-container');
let closeShopCart=document.querySelector('.close');
let body=document.querySelector('body');

openShopCart.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopCart.addEventListener('click', ()=>{
    body.classList.remove('active');
})

