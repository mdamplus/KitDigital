document.addEventListener('DOMContentLoaded', function () {
    // Espera a que el documento se cargue completamente
    var botones = document.querySelectorAll('.mi-boton');

    botones.forEach(function (boton) {
        boton.addEventListener('click', function () {
            //----var target = this.getAttribute('data-clipboard-target');
            //var textToCopy = document.querySelector(target).value; No funciona
            
            //var textToCopy = document.querySelector('.campo-dominio').value; //Funciona, pero accede directamente a la clase, no al elemento con data-clipboard-target
            
            //Forma más segura.
            //---var textToCopy = jQuery(target).val();
            
            
            var textToCopy = this.getAttribute('data-clipboard-text');
            var tempInput = document.createElement('input');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            alert('Shortcode copiado: ' + textToCopy);
        });
    });
});