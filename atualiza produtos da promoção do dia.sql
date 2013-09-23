
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE	produto.uri LIKE '%ar-condicionado-split-7000-btu-frio-estilo-midea-220v-mss-07cr%'
			AND	pl.posicao = 1
	) TEMP
);
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE	produto.uri LIKE '%ar-condicionado-split-12000-btu-frio-estilo-midea-220v-mss-12cr%'
			AND	pl.posicao = 1
	) TEMP
);
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE	produto.uri LIKE '%ar-condicionado-split-7000-btu-quente-frio-rheem-220v-rb1hw07hp2be%'
			AND	pl.posicao = 1
	) TEMP
);
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE	produto.uri LIKE '%ar-condicionado-split-9000-btu-quente-frio-smile-lg-220v-ts-h092yma0%'
			AND	pl.posicao = 1
	) TEMP
);
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE	produto.uri LIKE '%ar-condicionado-split-9000-btu-frio-inverter-panasonic-220v-cs-s9kkq-7%'
			AND	pl.posicao = 1
	) TEMP
);
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE	produto.uri LIKE '%ar-condicionado-split-9000-btu-frio-panasonic-220-cs-ys9nkv-7%'
			AND	pl.posicao = 1
	) TEMP
);
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE	produto.uri LIKE '%ar-condicionado-janela-mecanico-7000-btu-frio-gree-220v-gj7-12l-d%'
			AND	pl.posicao = 1
	) TEMP
);
UPDATE produto_loja
SET relevancia = 1
WHERE id IN (
	SELECT ID
	FROM (
		SELECT pl.id AS ID
		FROM produto
		INNER JOIN produto_loja pl ON pl.produto = produto.id
		WHERE	produto.uri LIKE '%ar-condicionado-janela-eletronico-7000-btu-frio-gree-110v-gj7-12l-d%'
			AND	pl.posicao = 1
	) TEMP
);