//Este script es llamado cuando se guardan los datos de la empresa, su función es actualizar tanto los shortcodes como los label de copia al portapepeles
jQuery(document).ready(function($) {
    $('#guardar-empresa').click(function(e) {
        e.preventDefault();
        
        var formData = $('#empresa-form').serialize();
        
        $.ajax({
            type: 'POST',
            url: ajaxurl, // Variable global de WordPress para la URL de administración AJAX
            data: {
                action: 'guardar_empresa', // Acción a ejecutar en el servidor
                formData: formData
            },
                success: function(response) {
                    var data = JSON.parse(response);
    
                    if (data.success) {
                        alert("Cambios guardados con éxito.");
                    
                        var updatedFields = data.fields;
                    
                        // Define un array con los nombres de los campos que deseas actualizar
                        var fieldsToUpdate = ['dominio', 'empresa', 'nombre_empresa', 'cif', 'direccion', 'tel', 'email', 'reg_mercantil'];
                        
                        // Itera a través de los campos y actualiza los atributos data-clipboard-text
                        fieldsToUpdate.forEach(function(fieldName) {
                            var labelSelector = '#' + fieldName + '-label';
                            if (updatedFields[fieldName] !== undefined) {
                                $(labelSelector).attr('data-clipboard-text', updatedFields[fieldName]);
                            }
                        });
                        
                    } else {
                        alert("Error al guardar cambios.");
                    }
                }
        });
    });
});