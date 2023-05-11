<?php

// Función para agregar enlace con icono de soporte en la barra de administración
function z_soporte_admin_bar() {
    global $wp_admin_bar;

    // Agregar enlace con icono de soporte SOS
    $args = array(
        'id' => 'enlace-soporte',
        'title' => '<span class="ab-icon dashicons dashicons-sos"></span> Soporte Técnico',
        'href' => 'https://informaticasa.es/soporte-tecnico/', // Reemplaza con la URL de soporte
        'meta' => array(
            'class' => 'soportez', // Clase CSS opcional
            'title' => 'Soporte Técnico Escritorio Remoto', // Título emergente opcional
        ),
    );
    $wp_admin_bar->add_node($args);
}
add_action('admin_bar_menu', 'z_soporte_admin_bar', 999);
//función para agregar llamada teléfono
function z_toolbar_items($wp_admin_bar) {
			$wp_admin_bar->add_node( array(
			'id'		=> 'supportlink',
			'title' => '<span class="ab-icon dashicons dashicons-laptop" aria-hidden="true"></span><span class="ab-label">Informaticasa: 959 128 851</span>',
			'href' => 'tel:959128851',
			
		) );
}

add_action('admin_bar_menu', 'z_toolbar_items', 999);

function agregar_boton_login() {
    // Verificar si estamos en la página de login
    if (in_array($GLOBALS['pagenow'], array('wp-login.php'))) {
        // Estilos CSS para el botón
        echo '<style>
                .boton-login {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 50%;
                    left: -40px;
                    width: 100px;
                    height: 60px;
/*background-color: /*#36b9cc*/ rgba(0,157,184,0.9);*/
                    cursor: pointer;
                    transition: transform 0.3s ease;
                    z-index: 9999;
                    border:1px solid #fff;
                }
                .boton-login:hover {
                    transform: translateX(10px);
                }
                .boton-login a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    font-size: 24px;
                    color: #ffffff;
                    text-decoration: none;
                }
                .dashiconz {
    font-size: 48px;
    margin-right: 10px;
    margin-left: 23px;
    margin-top: -26px;
}
                }
            </style>';
            
            echo '<style>
            
            @media screen and (max-width: 782px) {
                
                form#language-switcher {display: none;}
                #login {
    margin: 0 auto;
    height: 100%;
    border-left: 0;
    border-right: 0;
    margin-top: 23px;
                    float:none;
                    background:none;
                }
                .boton-login{bottom:5%;top:unset;}
                /* Agrega tus estilos personalizados para el panel de administración en pantallas de hasta 782px */
            }
        </style>';

        // HTML del botón
        echo '<div class="boton-login">
                <a href="https://informaticasa.es/soporte-tecnico/" target="_blank">
                    <span class="dashicons dashicons-sos dashiconz"></span>
                </a>
            </div>';
    }
}
add_action('login_footer', 'agregar_boton_login');
//say no more... zZz
?>