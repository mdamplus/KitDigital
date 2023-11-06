//Este scrip se ejecuta al pulsar el botón con id generar-pagina, recoge los datos de titulo y texto necesarios y los envia a una función que genera la página.

jQuery(document).ready(function($) {
            
            jQuery('#generar-pagina').click(function() {

                var avisosLegalesText;
                var editorId = 'editor'; //id del editor TinyMCE
                
                //Cuando el editor está en modo visual cuando se carga la página (por defecto)
                if (tinymce.get('editor') !== null) {
                    avisosLegalesText = tinymce.get(editorId).getContent();//Obtén el texto del editor
                }
                //Si al cargar página el editor esta en modo html "tinymce.get('editor')" será null, por lo que debe acceder al texto de otra forma.
                else{
                    avisosLegalesText = document.getElementById(editorId).textContent;
                }
                
                
                
                var atitulo = $('#seleccion-titulo').val(); // Obtén el valor del campo pagina-titulo

                // Envía el texto al servidor utilizando AJAX
                jQuery.ajax({
                    type: 'POST',
                    url: ajaxurl,
                    data: {
                        action: 'generate_page', //Función a la que llama
                        text: avisosLegalesText, //Agrega el texto al objeto de datos
                        titulo: atitulo // Agrega el título al objeto de datos
                    },
                    //dependiendo del resultado saldrá un alert u otro.
                    success: function(response) {
                        if (response.success) {
                            alert('Página ' + atitulo + ' generada con éxito.');
                        } else {
                            alert('Error al generar la página.');
                        }
                    }
                });
            });
        });