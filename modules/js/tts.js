  /* multiidioma */
  jQuery(document).ready(function($) {
    var lang = $('html').attr('lang'); // Obtener el valor de la etiqueta lang
  
    $('#tts_button').click(function() {
      if ($('body').hasClass('tts_play')){
        $('body').removeClass('tts_play');
        if(responsiveVoice.isPlaying()) {
          responsiveVoice.cancel();
        }
      }else{
        var text = '';
        var elementText='';
        $('body main:first').find('p,h1,h2,h3,h4,h5').each(function() {
            elementText= $(this).text() || '';
            text += (elementText + (elementText.slice(-1)=='.'?' ':'. '));
        });
        if(responsiveVoice.isPlaying()) {
          responsiveVoice.cancel();
        }
        responsiveVoice.speak(text, "Spanish Female", {locale: lang, rate: 0.9, onstart: is_speaking, onend: not_speaking});
      }
    });
    function is_speaking(){
      $('body').addClass('tts_play');
    }
    function not_speaking(){
      if(!responsiveVoice.isPlaying()) {
        $('body').removeClass('tts_play');
      }
    }
    
    // Actualizar el valor de lang cada vez que cambie la página
    $(document).on('DOMSubtreeModified', 'html', function(){
      lang = $('html').attr('lang');
    });
  });