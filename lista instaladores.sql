SELECT COUNT(instalador.id) AS TOTAL FROM instaladores instalador
INNER JOIN instaladores_unidades unidades ON unidades.id_instalador = instalador.id
WHERE instalador.status = 1