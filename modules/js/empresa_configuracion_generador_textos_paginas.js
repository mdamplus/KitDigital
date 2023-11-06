jQuery(document).ready(function($) {
    
    
             var avisoLegal ='<h4>LEY DE LOS SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN (LSSI)</h4>\n' +
                '<p>[nombre_empresa], responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), BOE N º 166, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de uso.</p>\n\n' +
                '<p>Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que fuera de aplicación.</p>\n\n' +
                '<p>El RESPONSABLE se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como  suficiente con la publicación en el sitio web del RESPONSABLE.</p>\n\n' +
                
                '<h4>1. DATOS IDENTIFICATIVOS</h4>' +
                '<p>Nombre de dominio: [dominio]</p>\n' +
                '<p>Nombre comercial: [empresa]</p>\n' +
                '<p>Denominación social: [nombre_empresa]</p>\n' +
                '<p>NIF: [cif]</p>\n' +
                '<p>Domicilio social: [direccion]</p>\n' +
                '<p>Teléfono: [tel]</p>\n' +
                '<p>e-mail: [email]</p>\n' +
                '<p>Inscrita en el Registro (Mercantil / Público): [reg_mercantil]</p>\n' +
                
                '<h4>2. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL</h4>' +
                '<p>El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.</p>\n' +
                '<p>Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del RESPONSABLE. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.</p>\n' +
                '<p>Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el sitio web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos. El RESPONSABLE autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos del sitio web, y en todo caso redirigir al sitio web principal de [dominio]</p>\n' +
                '<p>El RESPONSABLE reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e industrial, no implicando su sola mención o aparición en el sitio web la existencia de derechos o responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo.</p>\n' +
                '<p>Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través del correo electrónico <a href="mailto:info@briososuministros.es">info@briososuministros.es</a></p>\n' +
                
                '<h4>3. EXENCIÓN DE RESPONSABILIDADES</h4>' +
                '<p>El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.</p>\n' +
                '<h5>Política de enlaces</h5>' +
                '<p>Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que el RESPONSABLE no puede controlar siempre los contenidos introducidos por los terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.</p>\n' +
                '<p>El RESPONSABLE no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chats, generadores de blogs, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en la página web del RESPONSABLE. Sin embargo, y en cumplimiento de lo dispuesto en los artículos 11 y 16 de la LSSICE, se pone a disposición de todos los usuarios, autoridades y fuerzas de seguridad, colaborando de forma activa en la retirada o, en su caso, bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, los derechos de terceros o la moral y el orden público.</p>\n' +
                '<p>En caso de que el usuario considere que existe en el sitio web algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del sitio web.</p>\n' +
                '<p>Este sitio web ha sido revisado y probado para que funcione correctamente. En principio, puede garantizarse el correcto funcionamiento los 365 días del año, 24 horas al día. Sin embargo, el RESPONSABLE no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas o circunstancias semejantes que hagan imposible el acceso a la página web.</p>\n' +
                '<h5>Direcciones IP</h5>' +
                '<p>Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un ordenador cuando éste se conecta a Internet. Toda esta información es registra a en un fichero de actividad del servidor debidamente inscrito que permite el posterior procesamiento de los datos con el fin de obtener mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el número de visitas realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.</p>\n' +
                
                '<h4>4. LEY APLICABLE Y JURISDICCIÓN</h4>' +
                '<p>Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales más cercanos al domicilio social del RESPONSABLE.</p>\n'
                ;
        
        
        var politicaPrivacidad ='<h4>Información al usuario</h4>' +
                '<p>[nombre_empresa] en adelante es el Responsable del tratamiento de los datos personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en el Reglamento (UE) 2016/679 de 27 de abril (GDPR) y la Ley Orgánica 3/2018 de 5 de diciembre (LOPDGDD), por lo que se le facilita la siguiente información del tratamiento:</p>\n' +
                
                '<h4>Finalidad del tratamiento</h4>' +
                '<p>Mantener una relación comercial con el Usuario. Las operaciones previstas para realizar el tratamiento son</p>\n' +
                '<ul>' +
                '  <li>Remisión de comunicaciones comerciales o publicitarias por email, fax, SMS, MMS, comunidades sociales o cualquier otro medio electrónico o físico, presente o futuro, que posibilite realizar comunicaciones comerciales. Estas comunicaciones serán realizadas por el RESPONSABLE y relacionadas sobre sus productos y servicios, o de sus colaboradores o proveedores con los que éste haya alcanzado algún acuerdo de promoción. En este caso, los terceros nunca tendrán acceso a los datos personales.</li>' +
                '  <li>Tramitar encargos, solicitudes o cualquier tipo de petición que sea realizada por el usuario a través de cualquiera de las formas de contacto que se ponen a su disposición.</li>' +
                '  <li>Remitir el boletín de noticias de la página web.</li>' +
                '  <li>Realizar estudios estadísticos.</li>' +
                '</ul>' +
                
                '<h4>¿Qué información recopilamos?</h4>' +
                '<p><strong>Comentarios</strong></p>\n' +
                '<p>Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran en el formulario de comentarios, así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.</p>\n' +
                
                '<p><strong>Cookies</strong></p>\n' +
                '<p>Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador.</p>\n' +
                '<p>Cuando accedas, también instalaremos varias cookies para guardar tu información de acceso y tus opciones de visualización de pantalla. Las cookies de acceso duran dos días, y las cookies de opciones de pantalla duran un año. Si seleccionas «Recuérdame», tu acceso perdurará durante dos semanas. Si sales de tu cuenta, las cookies de acceso se eliminarán. También se registrarán varias cookies para la gestión del consentimiento de cookies, estas cookies perdurarán durante un año.</p>\n' +
                '<p>Al visitar la página de acceso se crea una cookie temporal que añade compatibilidad con métodos de acceso alternativos. Esta cookie no contiene datos personales y caduca después de 1 hora.</p>\n' +
                
                '<p><strong>Registros de seguridad</strong></p>\n' +
                '<p>La dirección IP de los visitantes, el ID de los usuarios conectados y el nombre de usuario de los intentos de acceso se registran de manera condicional para comprobar actividad maliciosa y proteger el sitio de tipos específicos de ataques. Ejemplos de condiciones en las que se hace registro son los intentos de acceso, solicitudes de desconexión, solicitudes de URLs sospechosas, cambios en el contenido del sitio y cambios de contraseñas. Esta información se conserva durante 60 días.</p>\n' +
                
                '<p><strong>Contenido incrustado de otros sitios web</strong></p>\n' +
                '<p>Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras webs se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.</p>\n' +
                '<p>Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de tu interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.</p>\n' +
                
                '<h4>Cuánto tiempo conservamos tus datos</h4>' +
                '<p>Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar comentarios sucesivos automáticamente, en lugar de mantenerlos en una cola de moderación.</p>\n' +
                '<p>De los usuarios que se registran en nuestra web (si los hay), también almacenamos la información personal que proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores de la web también pueden ver y editar esa información.</p>\n' +
                '<p>Los registros de seguridad se conservan 60 días.</p>\n' +
                
                '<h4>Qué derechos tienes sobre tus datos</h4>' +
                '<p>Derecho de acceso, rectificación, portabilidad y supresión de sus datos y a la limitación u oposición a su tratamiento.</p>\n' +
                '<p>Puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.</p>\n' +
                '<p>Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportación de los datos personales que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado.</p>\n' +
                '<p>Derecho a presentar una reclamación ante la autoridad de control (<a href="www.aepd.es">www.aepd.es</a>) si considera que el tratamiento no se ajusta a la normativa vigente.</p>\n' +
                
                '<h4>Datos de contacto para ejercer sus derechos:</h4>' +
                '<p>[nombre_empresa] – [direccion] – [email]</p>\n' +
                
                '<h4>Carácter obligatorio o facultativo de la información facilitada por el usuario</h4>' +
                '<p>Los Usuarios, mediante la marcación de las casillas correspondientes y entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados otros formularios como el de finalizar compra, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El Usuario garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.</p>\n' +
                
                '<p>El RESPONSABLE informa y garantiza expresamente a los usuarios que sus datos personales no serán cedidos en ningún caso a terceros, y que siempre que se realizara algún tipo de cesión de datos personales, se pedirá previamente el consentimiento expreso, informado e inequívoco por parte a los Usuarios. Todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al Usuario. En caso de que no sean facilitados todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.</p>\n' +
                
                '<h4>Información sobre la compartición de datos</h4>' +
                '<p>Si solicitas un restablecimiento de contraseña, tu dirección IP será incluida en el correo electrónico de restablecimiento.</p>\n' +
                
                '<h4>Destino de tus datos</h4>' +
                '<p>Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.</p>\n' +
                
                '<h4>Medidas de seguridad</h4>' +
                '<p>Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.</p>\n' +
                '<p>El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR con el fin de proteger los derechos y libertades de los Usuarios y les ha comunicado la información adecuada para que puedan ejercerlos.</p>\n'
                ;
        
        
        var condicionesVenta='<p>[nombre_empresa] con nombre comercial [empresa] dispone de esta página web de venta(en adelante la “Web”) es un comercio electrónico accesible por la red de Internet en la dirección [dominio]</p>\n' +
                '<p>Cualquier usuario (en adelante el “Usuario”), puede acceder a esta web.</p>\n' +
                '<p>[nombre_empresa] (en adelante “[empresa]”), es titular de dicha web, en España, dirección [direccion], CIF [cif] e e-mail de contacto [email]; Inscrita en el Registro de Entidades Jurídicas de la Agencia Estatal de la Administración Tributaria.</p>\n' +
                '<p>La Web permite navegar al Usuario libremente por las diferentes páginas de la web, sin que ello le comprometa de cara a un posible pedido. La Web permite a [empresa] ofrecer a la venta sus productos (en adelante los “Productos”) a Usuarios que naveguen por la misma.</p>\n' +
                '<p>Para la aplicación de las presentes condiciones, queda acordado que el Usuario y [empresa] serán denominados conjuntamente las “Partes” e individualmente la “Parte” y que el Usuario que haya validado un pedido se denominará entonces el “Comprador”. Los derechos y obligaciones del Usuario se aplican necesariamente al Comprador.</p>\n' +
                '<p>Todo pedido de un Producto ofrecido a la venta en la Web, supone la consulta y la aceptación expresa de las presentes condiciones generales de venta, sin que por ello, esta aceptación esté condicionada por la firma manuscrita por parte del Usuario. De conformidad con lo dispuesto en la Ley 59/2003 de 19 de diciembre sobre la firma electrónica, se recuerda que la validación de un pedido tal y como se precisa en el art 4.3 que figura a continuación descrito, en estas condiciones, constituye una firma electrónica, que tiene entre las Partes el mismo valor que una firma manuscrita.</p>\n' +
                '<p>El Usuario que quisiera comprar en la Web, declara ser mayor de 18 años. Los menores de edad deben obtener previamente permiso de sus padres, tutores o representantes legales, quienes serán considerados responsables de todos los actos realizados por menores a su cargo.</p>\n' +
                '<p>El Usuario puede conservar o imprimir estas condiciones de venta siempre que no las modifique.</p>\n' +
                '<p>Las presentes condiciones generales de venta serán válidas a contar desde el 1 de julio de 2012.</p>\n' +
                '<p>[empresa], con el fin de mejorar los servicios y productos ofrecidos en su web, se reserva el derecho de modificar en cualquier momento las presentes Condiciones Generales y específicas de venta, sin previo aviso. Mediante la modificación de las Condiciones Generales expuestas en la página web de [empresa], se entenderá como cumplido el deber de notificación a los usuarios con antelación suficiente, no obstante, se entiende que tales modificaciones no se aplicarán a las reservas o pedidos previamente aceptados y confirmados por el Comprador.</p>\n' +
                '<p>Las presentes condiciones se aplican con exclusión de cualquier otro documento.</p>\n' +
                
                '<h4>Productos comercializados en el Sitio Web de [empresa]</h4>' +
                '<p>Todas las ofertas de Productos propuestas en la Web están limitadas al territorio Peninsular Español, Islas Baleares y Canarias.</p>\n' +
                '<p>Las ofertas promocionales son válidas en las fechas que se indiquen en la web y en función de las existencias disponibles, de las que se informará para cada promoción.</p>\n' +
                '<p>En caso de que no se encuentre disponible uno o varios Productos tras haber realizado la validación del pedido, usted será informado por e-mail. El importe de su pedido será recalculado y se cargará a su cuenta el nuevo importe, descontando en la cantidad la deducción del / los Producto(s) faltantes. Si la totalidad de su pedido no estuviese disponible se le informará por e-mail y no se efectuará ningún cargo en su cuenta, quedando anulada la venta.</p>\n' +
                '<p>Usted también puede anular un pedido efectuado en la Web, contactando con el servicio de atención al cliente en la dirección de [empresa], que figura al inicio del presente documento.</p>\n' +
                '<p>Si el Servicio de atención al cliente le informa de que su pedido ya ha sido procesado, no se podrá anular. En ese caso, deberá rechazar el paquete cuando lo reciba.</p>\n' +
                '<hp>Conforme al art. 40 de la Ley 47/ 2002 de reforma de la Ley 7/1996 de Ordenación al Comercio Minorista de 15 de enero, y la Ley 34/2002 de 11 de julio de servicios de la sociedad de la información y de comercio electrónico, el comprador antes de realizar su pedido tiene derecho a conocer las características esenciales del o de los productos que desea comprar.</p>\n' +
                '<p>Las fotografías, grafismos y las descripciones de los Productos a la venta, no tienen carácter contractual, siendo únicamente ilustrativos, y no comprometen la responsabilidad de [empresa], que hace todo lo posible para garantizar que los colores que muestran los Productos en las fotos expuestas en la Web sean fieles a los Productos originales, pueden darse variaciones debidas sobre todo, a las limitaciones técnicas de las posibilidades de color de un equipo informático.</p>\n' +
                '<h4>Precios de los Productos en venta en el Sitio Web</h4>' +
                '<p>Los precios que figuran en esta Web se indican en Euros e incluyen los impuestos correspondientes, I.V.A. / I.G.I.C. u otros, aplicable en el momento del pedido, cualquier cambio de dicho impuesto repercutirá en el precio de los Productos vendidos por [empresa] en su página Web. Los precios son susceptibles de variación durante el año, quedando claro que los Productos pedidos se facturarán a los precios en vigor en el momento de la realización del pedido.</p>\n' +
                '<p>Los precios no incluyen los gastos de envío, que se añadirán al precio de los productos comprados según el importe del pedido. Los gastos de envío se indicarán antes de que el Comprador valide el pedido.</p>\n' +
                '<p>Todas las facturas por defecto contendrán IVA detallado.</p>\n' +
                '<h4>Información suministrada en el website.</h4>' +
                '<p>Hacemos todo los esfuerzos para ofrecer la información contenida en el sitio web de forma veraz y sin errores tipográficos. En el caso de que en algún momento se produjera algún error de este tipo, ajeno en todo momento a la voluntad de [dominio], se procedería inmediatamente a su corrección. En el caso de fallos informáticos respecto a precios se comunicará al cliente y subsanado el mismo. Todas las informaciones contractuales presentes en [dominio] se muestran en lengua española (castellano), y la comunicación con los clientes y usuarios, así como la formalización del contrato se realizará en dicho idioma.</p>\n' +
                '<h4>Pedidos</h4>' +
                '<p>Todo pedido supone la adhesión sin restricción ni reservas a las presentes condiciones generales de venta.</p>\n' +
                '<p>El importe de cada pedido está limitado a la cantidad de 6.000 euros por pedido, además se especifica, que no podrá el Usuario solicitar más de 1000 unidades de un mismo Producto en un mismo pedido.</p>\n' +
                '<p>Una vez que se confirma el pedido al hacer clic en el botón “Finalizar el pedido”, el Comprador declara aceptar el pedido como las presentes condiciones generales de venta. Desde ese momento, se puede imprimir el resumen de pedido como comprobante de compra.</p>\n' +
                '<p>En cuanto se registra el pedido, el Comprador recibe un mail de confirmación de pedido detallado a la dirección de e-mail que ha indicado.</p>\n' +
                '<p>En este mail de confirmación de pedido se precisará el importe exacto facturado.</p>\n' +
                '<p>Dicho mail de confirmación de pedido tiene el valor de confirmar la aceptación del pedido y validar la operación.</p>\n' +
                '<p>El Comprador acepta que los sistemas de registro de pedido de [empresa] constituyan prueba de la naturaleza de la transacción y de su fecha.</p>\n' +
                '<p>No obstante, si lo desea el Comprador podrá solicitar por medio del servicio de atención al cliente una factura.</p>\n' +
                '<p>[empresa] se reserva el derecho de anular cualquier pedido de un cliente con el que existiese un litigio relacionado con el pago de un pedido anterior, o por cualquier otro motivo legítimo relacionado principalmente, con el carácter anormal del pedido.</p>\n' +
                                
                '<h4>Pagos</h4>' +
                '<p>Todos los pedidos son pagaderos en euros.</p>\n' +
                '<p>Para efectuar el pago de su pedido, el Comprador podrá realizarlo tanto por tarjeta bancaria de crédito como tarjeta de débito.</p>\n' +
                '<p>Las tarjetas bancarias aceptadas en la Web son todas las aceptadas por la plataforma de pago de PAYPAL, será responsabilidad de PAYPAL únicamente.</p>\n' +
                '<p>Así mismo se ofrece el sistema de pago mediante TPV Virtual en el que se aceptarán las tarjetas VISA, Maestro y Mastercard.</p>\n' +
                '<p>Por otra parte es posible pagar mediante transferencia bancaria, indicando en el asunto de la transferencia su número de orden de pedido.</p>\n' +
                '<p>El Comprador garantiza a [empresa] que dispone de las autorizaciones que pudieran ser necesarias para utilizar el modo de pago que haya elegido en el momento de formalizar el pedido.</p>\n' +
                '<p>[empresa] se reserva el derecho de suspender o anular cualquier pedido y/o entrega de cualquier naturaleza y en cualquier etapa del envío, en caso de impago del importe total cualquier suma que sea debida por el Comprador, la entrega de un nuevo pedido podrá ser suspendida en caso de retraso en el pago de un pedido anterior y ello a pesar de las presentes disposiciones.</p>\n' +
                '<p>[empresa], con el fin de garantizar la mayor seguridad de sus clientes, se reserva el derecho de solicitar si lo considerara necesario y previo a la entrega del pedido, una fotocopia del documento de identidad del Comprador para todo pago con tarjeta bancaria. Para los importes superiores a 300 euros impuestos incluidos, [empresa] se reserva el derecho de pedir una fotocopia compulsada del documento de identidad.</p>\n' +
                '<p>Sólo con el objeto de evitar cualquier fraude en Internet o cualquier otro delito, los datos que usted nos facilite al realizar su pedido podrán ser cedidos a un tercero para ser verificados, terceros cuya actividad social permita dicha verificación.</p>\n' +
                '<p>Como sistema de pago electrónico [empresa] tiene instalada una pasarela de pago de comercio electrónico accesible desde la web www.paypal.es y propiedad de la empresa PayPal (Europe) S.à r.l. & Cie, S.C.A. (en adelante "PAYPAL"). La seguridad del proceso de pago electrónico será responsabilidad de PAYPAL y todos los datos proporcionados a estos efectos son encriptados para garantizar la máxima seguridad y confidencialidad de los mismos y se alojan en un servidor seguro certificado según el protocolo SSL (Secure Socket Layer) responsabilidad de PAYPAL, [empresa] no se hará responsable de fallos o incidencias con la pasarela de pago en ningún caso.</p>\n' +
                '<p><a target="_blank" href="https://www.paypal.com/es/webapps/mpp/about-paypal-products">¿Qué es Paypal?</a></p>\n' +
                '<p>La Pasarela de pago TPV Virtual es una pasarela segura del tipo SSL con sistema de validación MasterCard ® SecureCodeTM y Verified by Visa</p>\n' +
                '<p><a target="_blank" href="https://www.mastercard.com/content/mccom-admin/es-region-cam-admin/referenced-content-admin/faq-category-admin/securecode.html">¿Qué es Mastercard SecureCode TM?</a></p>\n' +
                '<p><a target="_blank" href="https://www.visa.es/">Verified by VISA</a></p>\n' +
                '<h4>Entrega de los pedidos</h4>' +
                '<p>Los Productos serán entregados en la dirección indicada por el Comprador en el albarán de pedido en España Peninsular e Islas Baleares por el servicio de mensajería Nacex.</p>\n' +
                '<p>Tiempos de entrega aproximados:</p>\n' +
                '<p>24Hs. Para entrega de productos y servicios indicados con la etiqueta 24Hs.</p>\n' +
                '<p>24-48 Hs. Para entrega de productos y servicios indicados con la etiqueta 24-48Hs.</p>\n' +
                '<p>3 Días. Para entrega de productos y servicios indicados con la etiqueta 3 Días.</p>\n' +
                '<p>5 Días. Para entrega de productos y servicios indicados con la etiqueta 5 Días.</p>\n' +
                '<p>7 Días. Para entrega de productos y servicios indicados con la etiqueta 7 Días.</p>\n' +
                '<p>16 Días. Para entrega de productos y servicios indicados con la etiqueta 16 Días.</p>\n' +
                '<p>Los productos solicitados que superen los 50€ + IVA serán enviados de forma gratuita.</p>\n' +
                '<p>Los pedidos realizados entre los días 9 de Agosto y 1 de Septiembre del vigente año serán procesados a partir del primer día hábil. Durante estos días estaremos cerrados de vacaciones por lo que no estará activo nuestro servicio de atención telefónica y chat por Whatsapp.</p>\n' +
                '<p>Los pedidos realizados a partir de las 17.30hs serán procesados ese mismo día, pero enviados al día hábil siguiente.</p>\n' +
                '<h4>Devolución y reembolso de los Productos</h4>' +
                '<p>Los Productos podrán ser devueltos por el Comprador en las condiciones que se detallan a continuación y siguiendo las instrucciones siguientes:</p>\n' +
                '<p>Los Productos deben ser obligatoriamente devueltos a [empresa] en perfecto estado para su comercialización, en su estado original (de embalaje, accesorios, folletos.) debidamente precintados y acompañados del albarán de devolución firmado.</p>\n' +
                '<p>[empresa] acepta la devolución de cualquier artículo comprado en su Web, si se produce su devolución en los 7 días hábiles, siguientes a la recepción del pedido por el Comprador. El reembolso se efectuará en los 15 días siguientes a la recepción del paquete devuelto, y a más tardar por incidencias, en un máximo 30 días.</p>\n' +
                '<p>En principio los gastos de envío del paquete de devolución corren a cargo del Comprador. En el caso de un producto defectuoso o de un error en las referencias entregadas, [empresa] se hará cargo de los gastos de devolución a la mayor brevedad posible.</p>\n' +
                '<p>[empresa] no acepta ningún paquete a portes debidos. Para devolver un artículo, el Comprador debe seguir las siguientes instrucciones:</p>\n' +
                '<p>- Utilizar el embalaje original para devolver el producto.</p>\n' +
                '<p>- Completar el formulario de Devolución que se facilita en la web y que una vez completado lo recibirá en su e-mail. Ese documento deberá imprimirlo y adjuntarlo al paquete. Las devoluciones sin el documento de devolución no serán aceptadas.</p>\n' +
                '<p>- Enviar el paquete a la dirección de [empresa], indicada al inicio de este documento. Cualquier riesgo relacionado con la devolución del Producto será asumido por el Comprador.</p>\n' +
                '<p>En caso de no cumplir el Comprador con el procedimiento de devolución y los plazos indicados anteriormente, el Comprador no tendrá derecho a formular ninguna reclamación por disconformidad o vicio aparente de los Productos recibidos.</p>\n' +
                '<h4>Derecho de desistimiento.</h4>' +
                '<p>De acuerdo con la Ley de Ordenación del Comercio Minorista, el Comprador dispone de un plazo de 7 días hábiles a partir de la fecha de la recepción, para devolver los Productos comprados asumiendo los gastos de envío para su reembolso.</p>\n' +
                '<p>Los Productos deben obligatoriamente devolverse a [empresa] en un perfecto estado para su comercialización y en su estado de origen (embalaje, accesorios, folletos, etc.) perfectamente sellado y acompañado del documento de devolución según el procedimiento descrito en el artículo 7, mencionado anteriormente.</p>\n' +
                '<p>Si se cumple con todas estas formalidades, el reembolso se efectuará en los 15 días siguientes a la recepción del paquete devuelto.</p>\n' +
                '<p>[empresa] no acepta ningún paquete a portes debidos.</p>\n' +  
                
                '<h4>Reserva de propiedad</h4>' +
                '<p>[empresa] será el único propietario de los productos vendidos hasta que no se realice el cobro total del precio, gastos e impuestos incluidos.</p>\n' +
                
                '<h4>Responsabilidad</h4>' +
                '<p>[empresa] no será responsable del incumplimiento total o parcial de sus obligaciones en la ejecución del presente contrato en caso de que se agoten las existencias o indisponibilidad de Producto como consecuencia de un hecho de fuerza mayor de huelga total o parcial principalmente en los servicios de mensajería, medios de transporte y/o comunicación. [empresa] no será responsable de los daños indirectos que pudiesen sobrevenir como consecuencia de la compra de los Productos.</p>\n' +
                
                '<p>[empresa] no será responsable de cualquier pérdida de datos, ficheros por parte del Comprador que deberá guardar los datos con todas las precauciones necesarias. [empresa] declina cualquier responsabilidad:</p>\n' +
                '<ul>' +
                '  <li>Por cualquier interrupción de la Web</li>' +
                '  <li>Por cualquier anomalía de funcionamiento de los programas.</li>' +
                '  <li>Por cualquier inexactitud u omisión de las informaciones disponibles en esta Web.</li>' +
                '  <li>Por cualquier daño como resultado de una intrusión fraudulenta de un tercero que haya causado una modificación de la información puesta a disposición en la Web.</li>' +
                '  <li>Y, en general de cualquier daño directo o indirecto, cualesquiera que sean las causas, origen naturaleza o consecuencias, incluidos, en particular los costes que puedan derivarse de la adquisición de bienes ofertados en la Web, las pérdidas de beneficios, de clientela, de datos o cualquier otra pérdida de bienes inmateriales que pudiera sobrevenir como consecuencia del acceso de una persona a la Web o de la imposibilidad de acceder a la Web o del crédito que se de a una información que proviene directa o indirectamente de esta última.</li>' +
                '</ul>' +
                
                '<h4>Propiedad Intelectual.</h4>' +
                '<p>De acuerdo con las leyes que rigen la Propiedad de derechos intelectuales u otros derechos similares, el presente sitio Web y todos sus elementos, marcas, diseños, modelos, logotipos, gráficos, etc. que se encuentren en ella incluida su recopilación, son propiedad exclusiva de cada uno de sus propietarios legales.</p>\n' +
                
                '<p>Las marcas citadas en esta web pertenecen a sus respectivos dueños, para más información le invitamos a visitar la web official de cada una de ellas.</p>\n' +
                
                '<p>Sólo se autoriza la reproducción o utilización de una parte o de la totalidad de estos elementos con un fin exclusivamente informativo para un uso personal y privado, cualquier reproducción y utilización de copias realizadas con otros fines quedan expresamente prohibidos. Cualquier otra utilización constituye un delito de copia fraudulenta y es sancionable según la Propiedad Intelectual, excepto autorización previa y escrita de [empresa], la empresa realizadora de las fotografías y los propietarios de las marcas.</p>\n' +
                
                '<h4>Ley aplicable y Jurisdicción competente.</h4>' +
                '<p>Las ventas de los Productos de la sociedad [empresa] están sujetas a la ley española. Cualquier litigio relativo a la interpretación, ejecución o la resolución del contrato realizado entre [empresa] y el comprador, incluso en caso de pluralidad de los demandados, será, a falta de acuerdo amistoso, competencia exclusiva de los Tribunales.</p>\n' +
                
                '<h4>Protección de datos de carácter personal y privacidad.</h4>' +
                '<p>Le informamos que en virtud del Art 5 de la Ley Orgánica de Protección de Datos, los datos de carácter personal introducidos en los distintos formularios de la web, pasarán a formar parte de un fichero automatizado cuyo responsable es [empresa] con la finalidad de gestionar sus relaciones comerciales y contractuales con los usuarios y compradores, así como el envío de promociones.</p>\n' +
                '<p>Con la finalidad de facilitar la realización de futuros pedidos, podrá usted actualizar los mismos a través de la ficha personal que aparece en la sección “Mi perfil”, utilizando su contraseña y nombre de usuario para acceder.</p>\n' +
                '<p>Ud. Podrá ejercer sus derechos de acceso, rectificación, cancelación y oposición en cualquier momento dirigiéndose a [empresa], en la dirección arriba indicada.</p>\n' +
                
                '<p>Los datos bancarios del proceso no son guardados en ningún caso por [empresa], es responsabilidad de PAYPAL todo el proceso de pago electrónico, no haciéndose responsable [empresa], en ningún caso de fallos o incidencias surgidas en este proceso de pago de PAYPAL.</p>\n' +
                '<p>La Web permite navegar al Usuario libremente por las diferentes páginas de la web, sin que ello le comprometa de cara a un posible pedido. La Web permite a [empresa] ofrecer a la venta de  sus Productos a Usuarios que naveguen por la misma.</p>\n'
                ;
        
        
        var garantiaDevolucion ='<p>Devolución y reembolso de los Productos</p>\n' +
                '<p>Los Productos podrán ser devueltos por el Comprador en las condiciones que se detallan a continuación y siguiendo las instrucciones siguientes:' +
                '<p>Los Productos deben ser obligatoriamente devueltos a [empresa] en perfecto estado para su comercialización, en su estado original (de embalaje, accesorios, folletos.) debidamente precintados y acompañados del albarán de devolución firmado.</p>\n' +
                '<p>[empresa] acepta la devolución de cualquier artículo comprado en su Web, si se produce su devolución en los 7 días hábiles, siguientes a la recepción del pedido por el Comprador. El reembolso se efectuará en los 15 días siguientes a la recepción del paquete devuelto, y a más tardar por incidencias, en un máximo de 30 días.</p>\n' +
                '<p>En principio los gastos de envío del paquete de devolución corren a cargo del Comprador. En el caso de un producto defectuoso o de un error en las referencias entregadas, [empresa] se hará cargo de los gastos de devolución a la mayor brevedad posible.</p>\n' +
                '<p>[empresa] no acepta ningún paquete a portes debidos. Para devolver un artículo, el Comprador debe seguir las siguientes instrucciones:</p>\n' +
                '<ul>' +
                    '<li>Utilizar el embalaje original para devolver el producto.</li>' +
                    '<li>Completar el formulario de Devolución que se facilita en la web y que una vez completado lo recibirá en su e-mail. Ese documento deberá imprimirlo y adjuntarlo al paquete. Las devoluciones sin el documento de devolución no serán aceptadas.</li>' +
                    '<li>Enviar el paquete a la dirección de [empresa], indicada al inicio de este documento. Cualquier riesgo relacionado con la devolución del Producto será asumido por el Comprador.</li>' +
                '</ul>' +
                '<p>En caso de no cumplir el Comprador con el procedimiento de devolución y los plazos indicados anteriormente, el Comprador no tendrá derecho a formular ninguna reclamación por disconformidad o vicio aparente de los Productos recibidos</p>\n'
                ;
        
    
        
    //Regresa uno texto u otro en función del título
    function getText(titulo){
        
        if(titulo == 'Aviso Legal'){
            return avisoLegal;
        }else if(titulo == 'Política de Privacidad'){
            return politicaPrivacidad;
        }else if(titulo == 'Condiciones de venta'){
            return condicionesVenta;
        }else if(titulo == 'Garantía de devolución'){
            return garantiaDevolucion;
        }else{
            return '';
        }
    }
    
    
    // ID del editor TinyMCE
    const EDITOR_ID = 'editor';
    // Cargar el texto predeterminado en el editor, todo depende del titulo seleccionado.
    var titulo = document.getElementById('seleccion-titulo').value;
    //Texto que aparecerá en el editor, se establece en función del tñitulo seleccionado
    var texto = getText(titulo);


   
        
    // Función para cargar el texto predeterminado en el editor
    function loadDefaultText() {
        if (typeof tinymce !== 'undefined' ) {
            createText();
        }
    }

    // Esperar un breve período de tiempo antes de cargar el texto predeterminado
    setTimeout(loadDefaultText, 100); // Ajusta el tiempo según sea necesario
        
        
        
        
        
    
    // Evento para detectar cambios en el campo desplegable, cuando hay cambios se llama a la función para escribir texto en el editor
    document.getElementById('seleccion-titulo').addEventListener('change', function() {
        
        var seleccion = this.value; // Obtiene el valor de la opción seleccionada
        texto = getText(seleccion);
        createText();
            
    });


    //Escribe el texto en el editor tinymce
    function createText(){
        
        //Si el editor esta en modo visual al cargar la página
        if (tinymce.get(EDITOR_ID)) {
            tinymce.get(EDITOR_ID).setContent(texto);
        }else{
            //Si al recargar página está en modo HTML se establece el texto de otra forma.
            // Accede al elemento HTML subyacente y modifica su contenido directamente.
            var htmlEditor = document.getElementById(EDITOR_ID);
            if (htmlEditor) {
                htmlEditor.textContent = texto;
            }
        }
    }
       
});


