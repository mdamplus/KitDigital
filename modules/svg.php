<?php
//    Permite la subida de archivos SVG animados sin filtrar.

function allow_svg_upload( $mimes ) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter( 'upload_mimes', 'allow_svg_upload' );

function allow_svg_in_media( $status, $file, $type ) {
    if ( $type == 'image/svg+xml' ) {
        $status['ext'] = 'svg';
        $status['mime'] = 'image/svg+xml';
    }
    return $status;
}
add_filter( 'wp_check_filetype_and_ext', 'allow_svg_in_media', 10, 3 );


function fix_svg() {
    echo '<style type="text/css">
          .attachment-266x266, .thumbnail img {
               width: 100% !important;
               height: auto !important;
          }
          </style>';
  }
  add_action( 'admin_head', 'fix_svg' );
//say no more... zZz
?>