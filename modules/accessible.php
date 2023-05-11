<?php



// Enlazar archivos CSS y JS
function agregar_accesibilidad() {
    wp_enqueue_style('estilos-accesibilidad', plugins_url('css/accessible.css', __FILE__));
    wp_enqueue_script('jquery');
    wp_enqueue_script('accesibilidad', plugins_url('js/accessible.js', __FILE__), array('jquery'), '1.0', true);
  }
  
  add_action('wp_enqueue_scripts', 'agregar_accesibilidad');
  

  function agregar_boton_accesibilidad() {
    echo '<div id="boton-accesibilidad">';
    echo '<span class="dashicons dashicons-universal-access"></span>';
    echo '<div id="menu-accesibilidad">';
    echo '<ul class="zamenu">';
    echo '<li class="zamenuz"><a href="#" id="aumentar-font-size">Aumentar tamaño de la fuente</a></li>';
    echo '<li class="zamenuz"><a href="#" id="disminuir-font-size">Disminuir tamaño de la fuente</a></li>';
    echo '<li class="zamenuz"><a href="#" id="escala-grises">Escala de grises</a></li>';
    echo '<li class="zamenuz"><a href="#" id="contraste-negativo">Contraste negativo</a></li>';
    echo '<li class="zamenuz"><a href="#" id="alto-contraste">Alto contraste</a></li>';
    echo '<li class="zamenuz"><a href="#" id="solo-texto">Solo texto</a></li>';
    echo '<li class="zamenuz"><a href="#" id="color-original">Resetear</a></li>';
    echo '</ul>';
    echo '</div>';
    echo '</div>';
  }
  
  add_action('wp_footer', 'agregar_boton_accesibilidad');
  