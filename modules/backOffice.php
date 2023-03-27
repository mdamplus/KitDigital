<?php

//esta función carga los estilos de wp-login.php y del /wp-admin/
function z_estilo_login() {
    echo '<link rel="stylesheet" type="text/css" href="' . plugins_url('css/zLogin.css', __FILE__) . '" />';
}
add_action('login_head', 'z_estilo_login');

// Esta función agrega un js que agrega las olas en el backoffice del login.
function z_wave_login_js() {
    wp_enqueue_script( 'wave-login', plugin_dir_url( __FILE__ ) . 'js/wave-login.js', array('jquery'), '1.0', true );
}
add_action( 'login_enqueue_scripts', 'z_wave_login_js' );


//esta función cambia la url.
function z_login_logo_url() {
    return 'https://informaticasa.es/servicios/kit-digital/?ztrack=login';
}
add_filter( 'login_headerurl', 'z_login_logo_url' );
//esta función cambia el título.
function z_login_logo_url_title() {
    return 'Informaticasa - Desarrollo Web Kit Digital';
}
add_filter( 'login_headertitle', 'z_login_logo_url_title' );


function custom_admin_css() {
  echo '<style>
    #wpadminbar {background: rgba(0,157,184,1); color:#fff;}
    #adminmenu, #adminmenu .wp-submenu, #adminmenuback, #adminmenuwrap {background: rgba(0,157,184,0.9); color:#fff;}
    #adminmenu .wp-has-current-submenu .wp-submenu .wp-submenu-head, #adminmenu .wp-menu-arrow, #adminmenu .wp-menu-arrow div, #adminmenu li.current a.menu-top, #adminmenu li.wp-has-current-submenu a.wp-has-current-submenu {background: rgba(248,177,51,1);}
    wpadminbar:hover, #adminmenu li.menu-top:hover, #adminmenu li.opensub>a.menu-top, #adminmenu li>a.menu-top:focus{color:#fff; background:rgba(0,92,102,1);}
    #adminmenu .wp-submenu a, #collapse-button, #adminmenu div.wp-menu-image {color:rgba(255,255,255,0.9)}
    #adminmenu .wp-submenu a, #collapse-button, #adminmenu div.wp-menu-name{font-size:15px;}
#adminmenu limenu-top:hover, #adminmenu li.opensub>a.menu-top, #adminmenu li>a.menu-top: focus {color:rgba(255,255,255,0.9);background-color:red;}
#wpadminbar .quicklinks .menupop ul li a, #wpadminbar .quicklinks .menupop ul li a strong, #wpadminbar .quicklinks .menupop.hover ul li a, #wpadminbar.nojs .quicklinks .menupop:hover ul li a 
#wpadminbar:not(.mobile) .ab-top-menu>li:hover>.ab-item {background:rgba(0,92,102,1) !important; color:#fff !important;}
#wpadminbar #wp-admin-bar-supportlink .ab-item ab-icon:before { content: "\f484; top: 3px;}

  </style>';
}
add_action('admin_head', 'custom_admin_css');

function z_toolbar_items($wp_admin_bar) {
			$wp_admin_bar->add_node( array(
			'id'		=> 'supportlink',
			'title' => '<span class="ab-icon" aria-hidden="true"></span><span class="ab-label">Soporte Técnico 959 128 851</span>',
			'href' => 'tel:959128851',
			
		) );
}

add_action('admin_bar_menu', 'z_toolbar_items', 999);