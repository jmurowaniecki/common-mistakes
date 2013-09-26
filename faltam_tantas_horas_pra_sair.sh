#!/bin/bash

echo -n "Mensal..: "
echo "SELECT SEC_TO_TIME((40 * 60 * 60 * 4) + 150 - SUM(TIME_TO_SEC(horas))) AS horas
FROM
(
    SELECT funcionario_id, DATA, SEC_TO_TIME(SUM(TIME_TO_SEC(saida)) - SUM(TIME_TO_SEC(entrada))) AS horas
    FROM horarios
    INNER JOIN funcionario f
        ON  f.id = horarios.funcionario_id
        AND f.logname = '${LOGNAME}'
    GROUP BY MONTH(DATA)
) AS SUB
WHERE MONTH(DATA) = MONTH(NOW())
GROUP BY MONTH(DATA);" | mysql --user=livroponto --password=livro --database=livroponto --column-names=false


echo -n "Semanal.: "
echo "
    SELECT SEC_TO_TIME((44 * 60 * 60) - (SUM(TIME_TO_SEC(saida)) - SUM(TIME_TO_SEC(entrada)))) AS horas
    FROM horarios
    INNER JOIN funcionario f
        ON  f.id = horarios.funcionario_id
        AND f.logname = '${LOGNAME}'
	WHERE WEEK(DATA) = WEEK(NOW())
    GROUP BY WEEK(DATA)" | mysql --user=livroponto --password=livro --database=livroponto --column-names=false

echo -n "Diário..: "
echo "
    SELECT SEC_TO_TIME((8.8 * 60 * 60) - (SUM(TIME_TO_SEC(saida)) - SUM(TIME_TO_SEC(entrada)))) AS horas
    FROM horarios
    INNER JOIN funcionario f
        ON  f.id = horarios.funcionario_id
        AND f.logname = '${LOGNAME}'
    WHERE DATE(DATA) = DATE(NOW())
    GROUP BY DATE(DATA)" | mysql --user=livroponto --password=livro --database=livroponto --column-names=false