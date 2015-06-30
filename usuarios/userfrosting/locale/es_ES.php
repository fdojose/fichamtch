<?php

/*
{{name}} - Dymamic markers which are replaced at run time by the relevant index.
*/

$lang = array();

// Site Content
$lang = array_merge($lang, [
	"REGISTER_WELCOME" => "El registro es rápido y sencillo.",
	"MENU_USERS" => "Usuarios",
	"MENU_CONFIGURATION" => "Configuración",
	"MENU_SITE_SETTINGS" => "Configuración del Sitio",
	"MENU_GROUPS" => "Grupos",
	"HEADER_MESSAGE_ROOT" => "Que haya iniciado sesión como usuario root"
]);

// Installer
$lang = array_merge($lang,array(
	"INSTALLER_INCOMPLETE" => "No puedes registrar una cuenta hasta que el instalador haya finalizado!",
	"MASTER_ACCOUNT_EXISTS" => "Ya existe una cuenta maestra!",
	"MASTER_ACCOUNT_NOT_EXISTS" => "Primero debes registrar la cuenta maestra!",
	"CONFIG_TOKEN_MISMATCH" => "Lo sentimos, el token no es correcto."
));

// Account
$lang = array_merge($lang,array(
	"ACCOUNT_SPECIFY_USERNAME" => "Por favor, introduzca su nombre de usuario",
	"ACCOUNT_SPECIFY_PASSWORD" => "Por favor, introduzca su contraseña",
	"ACCOUNT_SPECIFY_EMAIL" => "Por favor, introduzca su dirección de correo electrónico",
	"ACCOUNT_INVALID_EMAIL" => "Dirección de correo electrónico no válida",
	"ACCOUNT_INVALID_USER_ID" => "No existe el identificador de usuario solicitado.",
	"ACCOUNT_USER_OR_EMAIL_INVALID" => "Nombre de usuario o dirección de correo electrónico no válido",
	"ACCOUNT_USER_OR_PASS_INVALID" => "Nombre de usuario o contraseña no válido",
	"ACCOUNT_ALREADY_ACTIVE" => "Su cuenta ya está activada",
	"ACCOUNT_REGISTRATION_DISABLED" => "Lo sentimos, el registro cuenta ha sido inhabilitada.",
	"ACCOUNT_INACTIVE" => "Su cuenta está desactivada. Compruebe su carpeta de mensajes de correo electrónico / correo no deseado para ver las instrucciones de activación de la cuenta",
	"ACCOUNT_DISABLED" => "Esta cuenta ha sido inhabilitada. Póngase en contacto con nosotros para obtener más información.",
	"ACCOUNT_USER_CHAR_LIMIT" => "Su nombre de usuario debe estar entre {{min}} y {{max}} caracteres de longitud",
	"ACCOUNT_DISPLAY_CHAR_LIMIT" => "Su nombre de usuario debe estar entre {{min}} y {{max}} caracteres de longitud",
	"ACCOUNT_PASS_CHAR_LIMIT" => "La contraseña debe tener entre {{min}} y {{max}} caracteres de longitud",
	"ACCOUNT_TITLE_CHAR_LIMIT" => "Los títulos deben estar entre {{min}} y {{max}} caracteres de longitud",
	"ACCOUNT_PASS_MISMATCH" => "Su contraseña y confirmación de contraseña debe coincidir",
	"ACCOUNT_DISPLAY_INVALID_CHARACTERS" => "El nombre para mostrar sólo pueden incluir caracteres alfanuméricos",
	"ACCOUNT_USERNAME_IN_USE" => "Usuario {{user_name}} ya está en uso",
	"ACCOUNT_DISPLAYNAME_IN_USE" => "El nombre para mostrar {{display_name}} ya está en uso",
	"ACCOUNT_EMAIL_IN_USE" => "El correo electrónico '{{email}}' ya está en uso",
	"ACCOUNT_LINK_ALREADY_SENT" => "Un email de activación ya ha sido enviado a esta dirección de correo electrónico en los últimos {{resend_activation_threshold}} hora (s)",
	"ACCOUNT_NEW_ACTIVATION_SENT" => "Le hemos enviado un correo electrónico de un nuevo enlace de activación, por favor revise su correo electrónico",
	"ACCOUNT_SPECIFY_NEW_PASSWORD" => "Por favor, introduzca su nueva contraseña",
	"ACCOUNT_SPECIFY_CONFIRM_PASSWORD" => "Por favor, confirme su nueva contraseña",
	"ACCOUNT_NEW_PASSWORD_LENGTH" => "la nueva contraseña debe tener entre {{min}} y {{max}} caracteres de longitud",
	"ACCOUNT_PASSWORD_INVALID" => "La contraseña actual no coincide con la que tenemos constancia",
	"ACCOUNT_DETAILS_UPDATED" => "Detalles de la cuenta actualizados",
	"ACCOUNT_CREATION_COMPLETE" => "Se ha creado la cuenta de usuario '{{user_name}}'.",
	"ACCOUNT_ACTIVATION_COMPLETE" => "Ha activado su cuenta. Ahora puede iniciar la sesión.",
	"ACCOUNT_REGISTRATION_COMPLETE_TYPE1" => "Usted se ha registrado con éxito. Ahora puede iniciar la sesión.",
	"ACCOUNT_REGISTRATION_COMPLETE_TYPE2" => "Usted se ha registrado con éxito. En breve recibirá un correo electrónico de activación. 
	Usted debe activar su cuenta antes de iniciar sesión",
	"ACCOUNT_PASSWORD_NOTHING_TO_UPDATE" => "No se puede actualizar con la misma contraseña",
	"ACCOUNT_PASSWORD_UPDATED" => "Contraseña de la cuenta de actualización",
	"ACCOUNT_EMAIL_UPDATED" => "Cuenta de correo electrónico de actualización",
	"ACCOUNT_TOKEN_NOT_FOUND" => "El token no existe / La cuenta ya está activada",
	"ACCOUNT_USER_INVALID_CHARACTERS" => "El nombre de usuario sólo pueden incluir caracteres alfanuméricos",
	"ACCOUNT_DELETE_MASTER" => "No se puede eliminar la cuenta maestra!",
	"ACCOUNT_DISABLE_MASTER" => "No se puede deshabilitar la cuenta maestra!",
	"ACCOUNT_DISABLE_SUCCESSFUL" => "La cuenta se ha desactivado con éxito.",
	"ACCOUNT_ENABLE_SUCCESSFUL" => "La cuenta se activada con éxito.",
	"ACCOUNT_MANUALLY_ACTIVATED" => "La cuenta {{user_name}}'s se ha activado de forma manual",
	"ACCOUNT_DISPLAYNAME_UPDATED" => "Nombre de visualización cambia a {{display_name}}",
	"ACCOUNT_TITLE_UPDATED" => "Los títulos cambiado a '{{title}}'",
	"ACCOUNT_GROUP_ADDED" => "Usuario añadido al grupo '{{name}}'.",
	"ACCOUNT_GROUP_REMOVED" => "Usuario eliminado del grupo '{{name}}'.",
	"ACCOUNT_GROUP_NOT_MEMBER" => "El usuario no es miembro del grupo '{{name}}'.",
	"ACCOUNT_GROUP_ALREADY_MEMBER" => "El usuario ya es miembro del grupo '{{name}}'.",
	"ACCOUNT_INVALID_USERNAME" => "Nombre de usuario no válido",
	"ACCOUNT_PRIMARY_GROUP_SET" => "Grupo asignado con éxito al usuario principal."
));

// Configuration
$lang = array_merge($lang,array(
	"CONFIG_NAME_CHAR_LIMIT" => "Nombre del sitio debe tener entre {{min}} y {{max}} caracteres de longitud",
	"CONFIG_URL_CHAR_LIMIT" => "La url del sitio debe tener entre {{min}} y {{max}} caracteres de longitud",
	"CONFIG_EMAIL_CHAR_LIMIT" => "El correo electrónico del sitio debe tener entre {{min}} y {{max}} caracteres de longitud",
	"CONFIG_TITLE_CHAR_LIMIT" => "Nuevo título de usuario debe tener entre {{min}} y {{max}} caracteres de longitud",
	"CONFIG_ACTIVATION_TRUE_FALSE" => "La activación de correo electrónico debe ser` true `o` false `",
	"CONFIG_REGISTRATION_TRUE_FALSE" => "El registro de usuarios debe ser` true `o` false `",
	"CONFIG_ACTIVATION_RESEND_RANGE" => "El umbral de activación debe estar entre {{min}} y {{max}} horas",
	"CONFIG_EMAIL_INVALID" => "El correo electrónico introducido no es válido",
	"CONFIG_UPDATE_SUCCESSFUL" => "La configuración de su sitio se ha actualizado. Debe actualizar la página para que los valores tengan efecto"
));

// Forgot Password
$lang = array_merge($lang,array(
	"FORGOTPASS_INVALID_TOKEN" => "El token de activación no es válido",
	"FORGOTPASS_OLD_TOKEN" => "fecha de caducidad pasada",
	"FORGOTPASS_COULD_NOT_UPDATE" => "No se pudo actualizar la contraseña",
	"FORGOTPASS_NEW_PASS_EMAIL" => "Le hemos enviado por correo electrónico una nueva contraseña",
	"FORGOTPASS_REQUEST_CANNED" => "petición de contraseña perdida cancelada",
	"FORGOTPASS_REQUEST_EXISTS" => "Ya existe una solicitud de contraseña perdida en esta cuenta",
	"FORGOTPASS_REQUEST_SUCCESS" => "Le hemos enviado por correo electrónico las instrucciones para recuperar el acceso a su cuenta"
));

// Mail
$lang = array_merge($lang,array(
	"MAIL_ERROR" => "Error fatal, contacte al administrador del sistema",
));

// Miscellaneous
$lang = array_merge($lang,array(
	"NO_DATA" => "No hay fecha / mala fecha de envío",
	"CAPTCHA_FAIL" => "Error en pregunta de seguridad",
	"CONFIRM" => "Confirmar",
	"DENY" => "Denegar",
	"SUCCESS" => "Éxito",
	"ERROR" => "Error",
	"NOTHING_TO_UPDATE" => "No hay nada que actualizar",
	"SQL_ERROR" => "Error de SQL fatal",
	"FEATURE_DISABLED" => "Esta característica se encuentra actualmente desactivada",
	"ACCESS_DENIED" => "Mmm, parece que usted no tiene permiso para hacer eso."
));

// Permissions
$lang = array_merge($lang,array(
	"GROUP_CHAR_LIMIT" => "Los nombres de grupos deben estar entre {{min}} y {{max}} caracteres de longitud",
	"GROUP_NAME_IN_USE" => "El nombre de grupo '{{name}}' ya está en uso",
	"GROUP_DELETION_SUCCESSFUL" => "Se ha borrado el grupo '{{name}}'",
	"GROUP_CREATION_SUCCESSFUL" => "creado con éxito el nivel de grupos de '{{name}}'",
	"GROUP_UPDATE" => "Grupo `{{name}}` actualizado correctamente.",
	"CANNOT_DELETE_GROUP" => "No se puede eliminar el grupo '{{name}}'"
));

return $lang;
