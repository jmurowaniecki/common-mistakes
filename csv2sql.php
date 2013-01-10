<?php
/**
 * @author john - jmurowaniecki@gmail.com
 * @abstract read csv files and returns sql insertion codes.
*/

class csv2sql
{
	function csvInsert ($csv = NULL)
	{
		$strSql = FALSE;
		if ($csv
		&& file_exists($csv))
		{
			$arq = fopen($csv, 'r');
			$dta = fread($arq, filesize($csv));
			fclose($arq);
			$dados	= explode(chr(13), $dta);
			$tabela	= substr($csv, 0, strlen($csv) - 4);
			$campos	= str_replace('"', '', $dados[0]);
			unset($dados[0]);
			$dados	= implode('), (', $dados);
			$strSql	= "INSERT INTO $tabela ($campos) VALUES ($dados)";
			$strSql = substr($strSql, 0, strlen($strSql) - 5);
		}
		return($strSql);
	}

}

$converte = new csv2sql();
print($converte->csvInsert('arquivo.csv'));

?>
