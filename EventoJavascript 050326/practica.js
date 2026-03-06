const caja = document.getElementById("caja");

caja.addEventListener("mouseover", function(){
    caja.style.background = "purple";
});

caja.addEventListener("mouseout", function(){
    caja.style.background = "pink";
});

caja.addEventListener("click", function(){
    alert("¡Caja clickeada!");
});