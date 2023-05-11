<?php
//deshabilita compresión de imagenes por parte de wordpress. Ideal para subir archivos webp en condiciones.
function disable_jpeg_compression() {
    add_filter( 'jpeg_quality', function( $arg ) {
        return 100;
    });
}
add_action( 'init', 'disable_jpeg_compression' );
//say no more... zZz
?>