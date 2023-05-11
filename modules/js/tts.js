/* INGLES

jQuery(document).ready(function($) {
    $('#tts_button').click(function() {
      var text = '';
      $('p').each(function() {
        text += $(this).text() + ' ';
      });
      responsiveVoice.speak(text);
    });
  });

*/

/* Español */
/*  jQuery(document).ready(function($) {
    $('#tts_button').click(function() {
      var text = '';
      $('p').each(function() {
        text += $(this).text() + ' ';
      });
      responsiveVoice.speak(text, "Spanish Latin American Female", {locale: 'es-ES'});
    });
  });*/


  /* multiidioma */
  jQuery(document).ready(function($) {
    var lang = $('html').attr('lang'); // Obtener el valor de la etiqueta lang
  
    $('#tts_button').click(function() {
      var text = '';
      $('p').each(function() {
        text += $(this).text() + '';
      });
      responsiveVoice.speak(text, "Spanish Latin American Female", {locale: lang, rate: 0.8});

      //responsiveVoice.speak(text, "Spanish Latin American Female", {locale: lang, rate:0.5}); // Pasar el valor de lang a la función y con rate la velocidad de lectura
    });
  
    // Actualizar el valor de lang cada vez que cambie la página
    $(document).on('DOMSubtreeModified', 'html', function(){
      lang = $('html').attr('lang');
    });
  });