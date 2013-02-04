--------------------------------------------------------------------------------
-- POR DIA --
select funcionario_id, DATA, SEC_TO_TIME(SUM(TIME_TO_SEC(saida)) - SUM(TIME_TO_SEC(entrada))) AS horas from horarios GROUP BY DATA
--------------------------------------------------------------------------------

--------------------------------------------------------------------------------
-- POR SEMANA --
SELECT funcionario_id, WEEK(DATA), SEC_TO_TIME((40 * 60 * 60) - SUM(TIME_TO_SEC(horas)))
FROM
(
	SELECT funcionario_id, DATA, SEC_TO_TIME(SUM(TIME_TO_SEC(saida)) - SUM(TIME_TO_SEC(entrada))) AS horas
	FROM horarios
	INNER JOIN funcionario
		ON	funcionario.id = horarios.funcionario_id
		AND	funcionario.logname = 'john'
	GROUP BY WEEK(DATA)
) AS SUB
WHERE WEEK(DATA) = WEEK(NOW())
GROUP BY WEEK(DATA)
--------------------------------------------------------------------------------