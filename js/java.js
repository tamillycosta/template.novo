const Hamburguer = document.querySelector(".hamburguer");
const mobMenu = document.querySelector(".main-links")

Hamburguer.addEventListener('click' , ()=>{
   Hamburguer.classList.toggle('action');
   mobMenu.classList.toggle('action');
}
)