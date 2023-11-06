<?php

function tts_add_button() {
    //wp_enqueue_script( 'responsivevoice', 'https://code.responsivevoice.org/responsivevoice.js?key=YOUR_UNIQUE_KEY' );
    wp_enqueue_script( 'responsivevoice', plugins_url('js/responsivevoice.js', __FILE__));
    wp_enqueue_script( 'tts_script', plugin_dir_url( __FILE__ ) . 'js/tts.js', array( 'jquery','responsivevoice' ), '1.0', true );
    wp_enqueue_style( 'tts_estilos', plugins_url('css/tts.css', __FILE__));
    echo '<div id="tts_button"><span class="dashicons dashicons-controls-volumeon"></span></div>';
}
add_action( 'wp_footer', 'tts_add_button' );


//say no more... zZz
?>