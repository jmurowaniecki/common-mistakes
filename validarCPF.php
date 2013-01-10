<?php
/* Função PHP para validação de CPFs - eu sei que já existem muitos por aí (inclusive um meu em JS), mas eu gosto de refazer a roda..

- John Murowaniecki
http://twitter.com/jmurowaniecki
*/
function validarCPF ($cpf) {
	$cpf = str_replace(array('-', '.', '/'), '', $cpf);
	#
	if (strlen($cpf) != 11 || str_replace(substr($cpf, 1, 1), '', $cpf) == '')
		return FALSE;
	#
	for ($n = 9; $n < 11; $n ++)
	{
		for ($d = $c = 0; $c < $n; $c++)
			$d += ($f = substr($cpf, $c, 1)) * (($n + 1) - $c);
		$d = ((10 * $d) % 11) % 10;
		if (substr($cpf, $n, 1) != $d)
			return FALSE;
	}
	return TRUE;
}
?>