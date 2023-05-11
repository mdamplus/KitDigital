<?php

add_action('admin_enqueue_scripts', 'ahanz');
add_action('login_enqueue_scripts', 'ahanz');
function ahanz() {
	
		echo '<!--esto quita del medio todas las notificaciones, pero siguen estando zZ-->
		    <style>.notice, .notice-warning, .update-nag, .updated, .error, .is-dismissible { display:none; }</style>';
	
}

?>