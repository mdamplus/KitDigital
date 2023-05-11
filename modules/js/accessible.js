/*jQuery(document).ready(function($) {
    $('#boton-accesibilidad button').click(function() {
      $('#menu-accesibilidad').toggle();
    });



    $('.accessibility-menu a').click(function(){
        var action = $(this).attr('data-action');
        if(action == 'aumentar-fuente'){
            $('body').css('font-size', '+=2');
        } else if(action == 'disminuir-fuente'){
            $('body').css('font-size', '-=2');
        } else if(action == 'escala-grises'){
            $('body').css('filter', 'grayscale(100%)');
        } else if(action == 'contraste-negativo'){
            $('body').css('filter', 'invert(100%)');
        } else if(action == 'alto-contraste'){
            $('body').css('background-color', '#000');
            $('body').css('color', '#fff');
        } else if(action == 'modo-texto'){
            $('body').css('background-color', '#fff');
            $('body').css('color', '#000');
            $('img').css('display', 'none');
        } else if(action == 'subrayar-enlaces'){
            $('a').css('text-decoration', 'underline');
        } else if(action == 'fuente-legible'){
            $('body').css('font-family', 'Arial, sans-serif');
        }
        return false;
    });
});

*/

/* Anterior
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
  });

  $('#disminuir-font-size').click(function () {
    $('body').css('font-size', '-=2');
  });

  // Pasar a escala de grises 
  $('#escala-grises').click(function () {
    $('body').toggle('filter', 'grayscale(100%)');
  });

  // Activar / desactivar Contraste negativo
  $('#contraste-negativo').click(function () {
    $('body').toggleClass('contraste-negativo');
  });

  // Visualizar web en alto contraste
  $('#alto-contraste').click(function () {
    $('body').toggleClass('alto-contraste');
  });

  
  // Volver a color original
  $('#color-original').click(function () {
    $('body').css('filter', 'grayscale(0%)');
  });
});*/


/*jQuery(document).ready(function($) {
    $('#boton-accesibilidad button').click(function() {
      $('#menu-accesibilidad').toggle();
    });



    $('.accessibility-menu a').click(function(){
        var action = $(this).attr('data-action');
        if(action == 'aumentar-fuente'){
            $('body').css('font-size', '+=2');
        } else if(action == 'disminuir-fuente'){
            $('body').css('font-size', '-=2');
        } else if(action == 'escala-grises'){
            $('body').css('filter', 'grayscale(100%)');
        } else if(action == 'contraste-negativo'){
            $('body').css('filter', 'invert(100%)');
        } else if(action == 'alto-contraste'){
            $('body').css('background-color', '#000');
            $('body').css('color', '#fff');
        } else if(action == 'modo-texto'){
            $('body').css('background-color', '#fff');
            $('body').css('color', '#000');
            $('img').css('display', 'none');
        } else if(action == 'subrayar-enlaces'){
            $('a').css('text-decoration', 'underline');
        } else if(action == 'fuente-legible'){
            $('body').css('font-family', 'Arial, sans-serif');
        }
        return false;
    });
});

*/


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
  });

  $('#disminuir-font-size').click(function () {
    $('body').css('font-size', '-=2');
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

    $('*').addClass('alto-contraste');//or addClass
  });


  // no logos, no videos, no imagen
  $('#solo-texto').click(function () {
    //$('img').css('display','none');
    // $('svg').css('display','none');
    //  $('video').css('display','none');
    // $('*').css('background','transparent');
    $('img').hide();
    $('svg').hide();
    $('video').hide();
    $('*').addClass('ocultar-bg');
  });

  // Volver a color original
  $('#color-original').click(function () {
    $('body').removeClass('escala-grises');
    $('body').removeClass('contraste-negativo');
    $('*').removeClass('alto-contraste');
    $('img').show();
    $('svg').show();
    $('video').show();
    $('*').removeClass('ocultar-bg');
  });
});





