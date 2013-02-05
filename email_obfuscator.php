<?php

$emails = array('jmurowaniecki@gmail.com', 'darknss888@hotmail.com', 'mandapraputaquepariu@gmail.com');

function email_obfuscator($email) {
	$pos = strpos($email, '@');
	return substr($email, 0, 1) . str_repeat('*', $pos - 1) . substr($email, $pos);
}

foreach ($emails as $email) {
	echo $email . "\n" . email_obfuscator($email) . "\n";
}
?>