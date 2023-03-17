<?php


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/* Informaticasa Brand link*/
function informaticasa_link_to_plugin_description( $plugin_meta, $plugin_file ) {
    if ( $plugin_file === plugin_basename( __FILE__ ) ) {
        $company_link = '<a href="https://informaticasa.es/">Informaticasa</a>';
        $plugin_meta[] = $company_link;
    }
    return $plugin_meta;
}
add_filter( 'plugin_row_meta', 'informaticasa_link_to_plugin_description', 10, 2 );

//say no more... zZz
?>