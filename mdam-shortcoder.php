<?php

/*
Plugin Name: Accesibilidad - Kit Digital Informaticasa
Plugin URI: https://informaticasa.es
Description: Este plugin permite crear e insertar shortcodes con información legal sobre la empresa y permite insertar la publicidad gráfica obligatoria sobre Kit Digital e informáticasa en formato vectorial svg. Por otro lado, se han agregado funcionalidades de accesibilidad y la capacidad de crear de forma predeterminada las páginas de "Avisos legales", "Política de privacidad", "Condiciones de Venta" y "Garantía de devolución"

<strong>Descripción del plugin.</strong> <a href="https://github.com/mdamplus/KitDigital">Git Hub Plugin DATA</a> | <a href="https://martinarnedo.es/">Author Website</a> | <a href="https://informaticasa.es/servicios/kit-digital/">Kit Digital</a> 

Version:2023.4
Author: Martín D. Arnedo Mahr
Author URI: https://github.com/mdamplus/KitDigital

License: GPL2
Text Domain:mdamz
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

require_once(plugin_dir_path(__FILE__) . 'modules/text-to-speech.php');
require_once(plugin_dir_path(__FILE__) . 'modules/accessible.php');
require_once(plugin_dir_path(__FILE__) . 'modules/informaticasa.php');
require_once(plugin_dir_path(__FILE__) . 'modules/kitdigital.php');
require_once(plugin_dir_path(__FILE__) . 'modules/brand.php');
require_once(plugin_dir_path(__FILE__) . 'modules/back.php');
require_once(plugin_dir_path(__FILE__) . 'modules/backOffice.php');
require_once(plugin_dir_path(__FILE__) . 'modules/svg.php');
require_once(plugin_dir_path(__FILE__) . 'modules/nofilter.php');
require_once(plugin_dir_path(__FILE__) . 'modules/soporte.php');
require_once(plugin_dir_path(__FILE__) . 'modules/notice.php');
require_once(plugin_dir_path(__FILE__) . 'modules/empresa_configuracion.php');




/** Shortcode en color [color_kit_digital color="red" ancho="500"]

    El conjunto de logos del kit digital se puede poner sin un ancho determinado, tomando 1020px * 73px como medida original.
    Si utilizamos color="green" variaremos el color del título.
    Si utilizamos ancho="valornumerico" variaremos el ancho maximo del vector y de forma escalada su altura.
    
    Para modificar el titulo por css hay que modificar la clase KitColor.
    Ej.
    h3.kitColor {
    color: black !important;
    font-size: 30px;}
    
    Nota: El conjunto vectorial en svg y a color, posee una clase llamada kitColorLogos.
    
    Las variaciones son:
    
    [color_kit_digital]  => color="" ancho=""   CSS: .kitColor  .kitColorLogos
    
    [negro_kit_digital]  => ancho=""            CSS: .kitNegro  .kitNegroLogos
    
    [blanco_kit_digital]  => ancho=""           CSS: .kitBlanco  .kitBlancoLogos
    
    [Custom_kit_digital]  => color="" ancho=""  CSS: .kitCustom  .kitCustomLogos
    
    [color_informaticasa] => ancho=""           CSS: .inforzz
    
    [blanco_informaticasa] => ancho=""          CSS: .inforzz
    
    [negro_informaticasa] => ancho=""           CSS: .inforzz
    
*/