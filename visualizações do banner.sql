SELECT SUM(SUB.VISUALIZACOES) AS TOTAL, SUB.DIA, SUB.TITULO FROM (

	SELECT DATE(visualizacoes.created) AS DIA, HOUR(visualizacoes.created) AS HORA, COUNT(visualizacoes.id) AS VISUALIZACOES, banner.posicao AS POSICAO, banner.titulo AS TITULO, banner.id AS BANNER
	FROM `banner_views` visualizacoes
	INNER JOIN banner ON banner.id = visualizacoes.banner_id
	WHERE banner.posicao = 'topo-blog' AND created BETWEEN '2013-01-22 15:00' AND  '2013-01-23 00:00'
	GROUP BY DIA, HORA, BANNER
	ORDER BY DIA ASC, HORA ASC

) AS SUB
GROUP BY DIA ASC, BANNER ASC, TOTAL DESC




-- relatório Eduardo
SELECT SUM(SUB.VISUALIZACOES) AS TOTAL, SUB.DIA, SUB.TITULO, SUB.POSICAO, SUB.BANNER FROM (

	SELECT DATE(visualizacoes.created) AS DIA, HOUR(visualizacoes.created) AS HORA, COUNT(visualizacoes.id) AS VISUALIZACOES, banner.posicao AS POSICAO, banner.titulo AS TITULO, banner.id AS BANNER
	FROM `banner_views` visualizacoes
	INNER JOIN banner ON banner.id = visualizacoes.banner_id
	WHERE created BETWEEN '2013-01-24 00:00' AND NOW()
	GROUP BY visualizacoes.banner_id, DIA, HORA
	ORDER BY DIA ASC, HORA ASC
) AS SUB
GROUP BY SUB.DIA, SUB.BANNER
ORDER BY SUB.DIA ASC, TOTAL DESC, POSICAO ASC




SELECT SUM(SUB.VISUALIZACOES) AS TOTAL, SUB.DIA, SUB.TITULO, SUB.POSICAO, SUB.BANNER FROM (

	SELECT DATE(visualizacoes.created) AS DIA, COUNT(visualizacoes.id) AS VISUALIZACOES, banner.posicao AS POSICAO, banner.titulo AS TITULO, banner.id AS BANNER
	FROM `banner_views` visualizacoes
	INNER JOIN banner ON banner.id = visualizacoes.banner_id
	WHERE created BETWEEN '2013-01-25 00:00' AND '2013-01-28 00:00'
	GROUP BY visualizacoes.banner_id, DIA
	ORDER BY DIA ASC
) AS SUB
GROUP BY SUB.DIA, SUB.BANNER
ORDER BY SUB.DIA ASC, TOTAL DESC, POSICAO ASC