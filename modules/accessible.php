<?php



// Enlazar archivos CSS y JS
function agregar_accesibilidad() {
    
    wp_enqueue_script('jquery');
    wp_enqueue_script('accesibilidad', plugins_url('js/accessible.js', __FILE__), array('jquery'), '1.0', true);
    wp_enqueue_style( 'dashicons' );
}
add_action('wp_enqueue_scripts', 'agregar_accesibilidad');


function agregar_boton_accesibilidad() {
    wp_enqueue_style('estilos-accesibilidad', plugins_url('css/accessible.css', __FILE__));

    echo '<div id="boton-accesibilidad">';
    echo '<span class="dashicons dashicons-universal-access-alt"></span>';
    echo '<div id="menu-accesibilidad">';
    echo '<ul class="zamenu">';
    echo '<li class="zamenuz"><a href="#" id="aumentar-font-size"><span class="dashicons dashicons-insert"></span> Aumentar tamaño de fuente</a></li>';
    echo '<li class="zamenuz"><a href="#" id="disminuir-font-size"><span class="dashicons dashicons-remove"></span> Disminuir tamaño de fuente</a></li>';
    echo '<li class="zamenuz"><a href="#" id="escala-grises"><span class="dashicons dashicons-admin-appearance"></span> Escala de grises</a></li>';
    echo '<li class="zamenuz"><a href="#" id="contraste-negativo"><span class="dashicons dashicons-star-half"></span> Contraste negativo</a></li>';
    echo '<li class="zamenuz"><a href="#" id="alto-contraste"><span class="dashicons dashicons-image-filter"></span> Alto contraste</a></li>';
    echo '<li class="zamenuz"><a href="#" id="solo-texto"><span class="dashicons dashicons-text-page"></span> Solo texto</a></li>';
    echo '<li class="zamenuz"><a href="#" id="color-original"><span class="dashicons dashicons-image-rotate"></span> Restablecer</a></li>';
    echo '</ul>';
    echo '</div>';
    echo '</div>';
    
}
add_action('wp_footer', 'agregar_boton_accesibilidad');
  