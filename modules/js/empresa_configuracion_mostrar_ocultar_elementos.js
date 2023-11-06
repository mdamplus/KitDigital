jQuery(document).ready(function($) {
    // Ocultar todas las pestañ excepto la primera por defecto
    jQuery('.settings-section').not(':first').hide();
    
    // Manejar el clic en las pestañas
    jQuery('.nav-tab-wrapper a').on('click', function(e) {
        e.preventDefault();
        $('.settings-section').hide();
        $($(this).attr('href')).show();
        $('.nav-tab').removeClass('nav-tab-active');
        $(this).addClass('nav-tab-active');
    });
});
