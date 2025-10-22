// Validar contraseña
function checkPassword() {
  const password = document.getElementById("password").value;
  if (password === "28/12/24") {
    window.location.href = "galeria.html";
  } else {
    alert("Contraseña incorrecta 💔");
  }
}

// Lista de 8 fotos
let fotos = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
];

let index = 0;

// Cambiar foto con animación
function cambiarFoto() {
  index = (index + 1) % fotos.length;
  const foto = document.getElementById("foto");
  foto.classList.add("fade-out");
  setTimeout(() => {
    foto.src = fotos[index];
    foto.classList.remove("fade-out");
  }, 500);
}
