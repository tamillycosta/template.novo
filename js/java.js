window.addEventListener("scroll", function(){
    var header = document.querySelector("cabeçalho");
    header.classList.toggle("sticky", window.scrolly > 0)
} )