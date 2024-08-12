// Obtén los elementos necesarios
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en la imagen, muestra el modal
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Cuando se hace clic en el botón de cerrar, oculta el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace clic en cualquier lugar fuera del modal, oculta el modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
