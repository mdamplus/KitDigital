
var botonAccesibilidad = document.getElementById('boton-accesibilidad');
var menuAccesibilidad = document.getElementById('menu-accesibilidad');

botonAccesibilidad.addEventListener('click', function () {
  menuAccesibilidad.classList.toggle('mostrar');
});

jQuery(document).ready(function ($) {
  // Cambiar tamaño de la fuente
  $('#aumentar-font-size').click(function () {
    $('body').css('font-size', '+=2');
    $('h1').css('font-size', '+=2');
    $('h2').css('font-size', '+=2');
    $('h3').css('font-size', '+=2');
  });

  $('#disminuir-font-size').click(function () {
    $('body').css('font-size', '-=2');
    $('h1').css('font-size', '-=2');
    $('h2').css('font-size', '-=2');
    $('h3').css('font-size', '-=2');
  });

  // Pasar a escala de grises 
  $('#escala-grises').click(function () {
    $('body').toggleClass('escala-grises');
  });

  // Activar / desactivar Contraste negativo
  $('#contraste-negativo').click(function () {
    $('body').toggleClass('contraste-negativo');
  });

  // Visualizar web en alto contraste
  $('#alto-contraste').click(function () {
    $('body').toggleClass('alto-contraste');//or addClass
  });


  // no logos, no videos, no imagen
  $('#solo-texto').click(function () {
    //$('img').css('display','none');
    // $('svg').css('display','none');
    //  $('video').css('display','none');
    // $('*').css('background','transparent');
    /*$('img').hide();
    $('svg').hide();
    $('video').hide();*/
    $('body').toggleClass('ocultar-bg');
  });

  // Volver a color original
  $('#color-original').click(function () {
    $('body').removeClass('escala-grises');
    $('body').removeClass('contraste-negativo');
    $('body').removeClass('alto-contraste');
    /*$('img').show();
    $('svg').show();
    $('video').show();*/
    $('body').removeClass('ocultar-bg');
    $('body').css({'font-size':''});
    $('h1').css({'font-size':''});
    $('h2').css({'font-size':''});
    $('h3').css({'font-size':''});
  });
});





