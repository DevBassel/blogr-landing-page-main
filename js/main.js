let meida = window.matchMedia("(max-width: 767px)");
let img = document.querySelector('.future img');
let img2 = document.querySelector('.featur img');
if (meida.matches) {
  img.src = 'imgs/illustration-editor-mobile.svg'
  img2.src = 'imgs/illustration-laptop-mobile.svg'

}

