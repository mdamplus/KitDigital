<?php

function tts_add_button() {
    wp_enqueue_script( 'responsivevoice', 'https://code.responsivevoice.org/responsivevoice.js' );
    wp_enqueue_script( 'tts_script', plugin_dir_url( __FILE__ ) . 'js/tts.js', array( 'jquery' ), '1.0', true );
    wp_enqueue_style( 'tts_style', plugin_dir_url( __FILE__ ) . 'css/tts.css', array(), '1.0', 'all' );
    echo '<div id="tts_button"><i class="fa fa-volume-up" aria-hidden="true"></i></div>';
}
add_action( 'wp_footer', 'tts_add_button' );


//say no more... zZz
?>