<?php
/*
Plugin Name: Configuracion de empresa
Description: Plugin para gestionar los datos principales de una empresa y generar páginas útiles.
Version: 1.0
Author: Víctor José Pérez Blanco
*/



// Función para agregar el submenú en Ajustes
function empresa_settings_menu() {
    add_submenu_page(
        'options-general.php',
        'Empresa',
        'Empresa',
        'manage_options',
        'empresa-settings',
        'empresa_settings_page'
    );
}
add_action('admin_menu', 'empresa_settings_menu');








// Función para la página principal de configuración de la empresa
function empresa_settings_page() {
    ?>
    <div class="wrap">
        
        
        <h2>Configuración de la Empresa</h2>
        <div class="nav-tab-wrapper">
            <a class="nav-tab nav-tab-active" href="#datos-empresa">Datos de Empresa</a>
            <a class="nav-tab" href="#generador_paginas">Generar páginas</a>
        </div>



        <div id="datos-empresa" class="settings-section">
            <form id="empresa-form">
                <!-- Agrega campos ocultos para el nonce y la acción -->
                <?php
                settings_fields('empresa-settings');
                do_settings_sections('empresa-settings');
                ?>
                
                <div class="centered-button little_margin">
                    <button id="guardar-empresa" class="button-primary">Guardar</button>
                </div>
                
            </form>
        </div>
        
        
        
        <!--Esto actuará como otra pestaña y permanecerá oculto hasta se se pinche el enlace de la parte superior de la ventana ""-->
        <div id="generador_paginas" class="settings-section">
         
            <form method="post" action="">
                <div class = "little_margin">
                    <!-- Campo de texto para el título de la página -->
                    <label class = "label-bold" for="seleccion-titulo">SELECCIONE EL TIPO DE PÁGINA QUE DESEA GENERAR:</label>

                    <!--Añade un selector múltiple para elegir entre distintas opciones-->
                    <select id="seleccion-titulo" name="seleccion_titulo">
                        <option value="Aviso Legal" selected>Aviso Legal</option>
                        <option value="Política de Privacidad">Política de Privacidad</option>
                        <option value="Condiciones de venta">Condiciones de venta</option>
                        <option value="Garantía de devolución">Garantía de devolución</option>
                    </select>
                </div>
                
                <!--Añade el editor TinyEMC-->
                <div id = "editor_ifr">
                    <?php wp_nonce_field('mi_plugin_actualizar_avisos', 'mi_plugin_nonce'); ?>
                    <?php
                    $content = '';
                    $editor_id = 'editor';
                    wp_editor($content, $editor_id);
                    ?>
                </div>
                
                <!--Botón para generar la página-->
                <div class="centered-button little_margin">
                    <button id="generar-pagina" type="button">Generar Página</button>
                </div>

            </form>
        </div>
    </div>
    <?php
}














/*====================================================================================================================
Funciones para mostrar los campos del formulario para los datos de la empresa.
======================================================================================================================*/


// Función para registrar los campos del formulario
function register_empresa_settings() {
    register_setting('empresa-settings', 'dominio');
    register_setting('empresa-settings', 'empresa');
    register_setting('empresa-settings', 'nombre_empresa');
    register_setting('empresa-settings', 'cif');
    register_setting('empresa-settings', 'direccion');
    register_setting('empresa-settings', 'tel');
    register_setting('empresa-settings', 'email');
    register_setting('empresa-settings', 'reg_mercantil');
}
add_action('admin_init', 'register_empresa_settings');



// Función para mostrar los campos del formulario
function empresa_settings_fields() {
    add_settings_section('empresa-settings', 'Datos de la Empresa', null, 'empresa-settings');
    add_settings_field('dominio', 'Nombre de Dominio', 'display_dominio_field', 'empresa-settings', 'empresa-settings');
    add_settings_field('empresa', 'Nombre Comercial', 'display_empresa_field', 'empresa-settings', 'empresa-settings');
    add_settings_field('nombre_empresa', 'Denominación Social', 'display_nombre_empresa_field', 'empresa-settings', 'empresa-settings');
    add_settings_field('cif', 'CIF', 'display_cif_field', 'empresa-settings', 'empresa-settings');
    add_settings_field('direccion', 'Domicilio Social', 'display_direccion_field', 'empresa-settings', 'empresa-settings');
    add_settings_field('tel', 'Teléfono', 'display_tel_field', 'empresa-settings', 'empresa-settings');
    add_settings_field('email', 'E-mail', 'display_email_field', 'empresa-settings', 'empresa-settings');
    add_settings_field('reg_mercantil', 'Inscrita en el Registro', 'display_reg_mercantil_field', 'empresa-settings', 'empresa-settings');
}
add_action('admin_init', 'empresa_settings_fields');


//Funciones para generar cada campo, compuesto por un input con su campo de texto y una etiqueta con link para copiado de shortcode
function display_dominio_field() {
    $dominio = esc_attr(get_option('dominio'));
    echo "<input type='text' name='dominio' value='$dominio' />";
    echo "<label class='copy-label mi-boton' title='Copiar' id= 'dominio-label' data-clipboard-text='$dominio'>[dominio]</label>";
}

function display_empresa_field() {
    $empresa = esc_attr(get_option('empresa'));
    echo "<input type='text' name='empresa' value='$empresa' />";
    echo "<label class='copy-label mi-boton' title='Copiar' id= 'empresa-label' data-clipboard-text='$empresa'>[empresa]</label>";
}

function display_nombre_empresa_field() {
    $nombre_empresa = esc_attr(get_option('nombre_empresa'));
    echo "<input type='text' name='nombre_empresa' value='$nombre_empresa' />";
    echo "<label class='copy-label mi-boton' title='Copiar' id= 'nombre_empresa-label' data-clipboard-text='$nombre_empresa'>[nombre_empresa]</label>";
}

function display_cif_field() {
    $cif = esc_attr(get_option('cif'));
    echo "<input type='text' name='cif' value='$cif' />";
    echo "<label class='copy-label mi-boton' title='Copiar' id= 'cif-label' data-clipboard-text='$cif'>[cif]</label>";
}

function display_direccion_field() {
    $direccion = esc_attr(get_option('direccion'));
    echo "<input type='text' name='direccion' value='$direccion' />";
    echo "<label class='copy-label mi-boton' title='Copiar' id= 'direccion-label' data-clipboard-text='$direccion'>[direccion]</label>";
}

function display_tel_field() {
    $tel = esc_attr(get_option('tel'));
    echo "<input type='text' name='tel' value='$tel' />";
    echo "<label class='copy-label mi-boton' title='Copiar' id= 'tel-label' data-clipboard-text='$tel'>[tel]</label>";
}

function display_email_field() {
    $email = esc_attr(get_option('email'));
    echo "<input type='text' name='email' value='$email' />";
    echo "<label class='copy-label mi-boton' title='Copiar' id= 'email-label' data-clipboard-text='$email'>[email]</label>";
}

function display_reg_mercantil_field() {
    $reg_mercantil = esc_attr(get_option('reg_mercantil'));
    echo "<input type='text' name='reg_mercantil' value='$reg_mercantil' />";
    echo "<label class='copy-label mi-boton' title='Copiar' id= 'reg_mercantil-label' data-clipboard-text='$reg_mercantil'>[reg_mercantil]</label>";
}






/*========================================================================================================================
Funciones para sustituir los datos contenidos en los shortcodes para la página web
(dominio, empresa, nombre_empresa, cif, direccion, telefono, email, reg_mercantil)
==========================================================================================================================*/


function shortcode_dominio(){
    $dominio = get_option('dominio');
    return '<a href = "' . $dominio . '" title = "Dominio">' . $dominio . '</a>';
}
add_shortcode('dominio', 'shortcode_dominio');



function shortcode_empresa() {
    $empresa = get_option('empresa');
    return $empresa;
}
add_shortcode('empresa', 'shortcode_empresa');



function shortcode_nombre_empresa(){
    $nombre_empresa = get_option('nombre_empresa');
    return $nombre_empresa;
}
add_shortcode('nombre_empresa', 'shortcode_nombre_empresa');



function shortcode_cif(){
    $cif = get_option('cif');
    return $cif;
}
add_shortcode('cif', 'shortcode_cif');



function shortcode_direccion(){
    $direccion = get_option('direccion');
    return $direccion;
}
add_shortcode('direccion', 'shortcode_direccion');



function shortcode_telefono(){
    $tel = get_option('tel');
    return '<a href = "tel:' . $tel . '" title = "Teléfono">' . $tel . '</a>';
}
add_shortcode('tel', 'shortcode_telefono');



function shortcode_email(){

    $email = get_option('email');

    // Verifica si se proporcionó un correo electrónico válido
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Si es válido, genera un enlace de correo electrónico
        return '<a href="mailto:' . $email . '" tittle = "Email" >' . $email . '</a>';
    } else {
        // Si no es válido, muestra el texto tal cual
        return $email;
    }
}
add_shortcode('email', 'shortcode_email');



function shortcode_reg_mercantil(){
    $reg_mercantil = get_option('reg_mercantil');
    return $reg_mercantil;
}
add_shortcode('reg_mercantil', 'shortcode_reg_mercantil');












/*====================================================================================================================
Funciones específicas
======================================================================================================================*/


/*Genera una página con el título seleccionado y el texto indicado en el editor*/

function generate_page() {
    
    
    if (isset($_POST['text']) && isset($_POST['titulo'])) {
        // Sanitiza el texto ingresado por el usuario
        $texto = wp_kses_post($_POST['text']);
            
        $titulo_pagina = sanitize_text_field($_POST['titulo']);
        
        // Verifica si ya existe una página con el título "Avisos Legales"
        $pagina_existente = get_page_by_title($titulo_pagina, OBJECT, 'page');

        if ($pagina_existente) {
            // Actualiza el contenido de la página existente
            $pagina_id = wp_update_post(array(
                'ID' => $pagina_existente->ID,
                'post_content' => wpautop($texto), // Aplica formato
            ));
        } else {
            // Crea una nueva página de avisos legales
            $pagina = array(
                'post_title' => $titulo_pagina,
                'post_content' => wpautop($texto), // Aplica formato
                'post_status' => 'publish',
                'post_type' => 'page'
            );
            $pagina_id = wp_insert_post($pagina);
        }


        if ($pagina_id) {
            wp_send_json_success(array('url' => get_permalink($pagina_id)));
        } else {
            wp_send_json_error();
        }

    }
}
add_action('wp_ajax_generate_page', 'generate_page');
add_action('wp_ajax_nopriv_generate_page', 'generate_page');








/*====================================================================================================================
Carga de scripts y estilos de la página.
======================================================================================================================*/

//Asegura que los scripts solo se cargan en la página que los necesita, es decir, en Ajustes/Empresa (la que genera este plugin).
if (isset($_GET['page']) && $_GET['page'] === 'empresa-settings') {

        //Agregar todos los scripts ".js" necesarios al plugin
        
        function agregar_scripts() {

            wp_enqueue_script('empresa-configuracion-mostrar-ocultar-elementos',plugin_dir_url( __FILE__ ) . 'js/empresa_configuracion_mostrar_ocultar_elementos.js', array('jquery'), '1.0', true);
            wp_enqueue_script('empresa-configuracion-generador-paginas-script', plugin_dir_url( __FILE__ ) . 'js/empresa_configuracion_generador_paginas_script.js', array('jquery'), '1.0', true);
            wp_enqueue_script('empresa-configuracion-generador-textos-paginas', plugin_dir_url( __FILE__ ) . 'js/empresa_configuracion_generador_textos_paginas.js', array('jquery'), '1.0', true);
            wp_enqueue_script('empresa-configuracion-copiar-al-portapapeles', plugin_dir_url( __FILE__ ) . 'js/empresa_configuracion_copiar_al_portapapeles.js', array('jquery'), '1.0', true);
            wp_enqueue_script('empresa-configuracion-actualizar-enlaces-shortcode.js', plugin_dir_url( __FILE__ ) . 'js/empresa_configuracion_actualizar_enlaces_shortcode.js', array('jquery'), '1.0', true);
        }
        // Agrega los scripts al gancho 'wp_enqueue_scripts'
        add_action('admin_enqueue_scripts', 'agregar_scripts');
        
        
        
        //Agregar todos los estilos necesarios al plugin
        
        function enqueue_plugin_styles() {
            // Encola tu archivo CSS personalizado
            wp_enqueue_style('empresa-configuracion-mi-plugin-styles', plugin_dir_url(__FILE__) . 'css/empresa_configuracion_estilos.css');
        }
        // Asegúrate de agregar estilos solo en la página de ajustes de tu plugin
        if (isset($_GET['page']) && $_GET['page'] === 'empresa-settings') {
            add_action('admin_enqueue_scripts', 'enqueue_plugin_styles');
        }

}






// Manejar la solicitud AJAX para guardar los datos de la empresa
function guardar_empresa_callback() {
    parse_str($_POST['formData'], $empresa_data);
    
    // Un array para almacenar los campos y sus valores
    $fields_to_update = array();

    // Recorre los datos del formulario y actualiza las opciones
    foreach ($empresa_data as $key => $value) {
        $key = sanitize_text_field($key);
        $value = sanitize_text_field($value);
        update_option($key, $value);

        // Agrega el campo y su valor al array
        $fields_to_update[$key] = $value;
    }

    // Devuelve los valores actualizados como JSON
    $response = array(
        'success' => true,
        'fields' => $fields_to_update
    );

    echo json_encode($response);

    wp_die(); // Finaliza la respuesta de AJAX
}

add_action('wp_ajax_guardar_empresa', 'guardar_empresa_callback'); // Para usuarios autenticados
add_action('wp_ajax_nopriv_guardar_empresa', 'guardar_empresa_callback'); // Para usuarios no autenticados

