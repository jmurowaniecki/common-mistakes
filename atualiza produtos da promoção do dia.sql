
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE produto.uri LIKE '%link_do_produto%'
		ORDER BY preco_min ASC
		LIMIT 1
	) TEMP
);