var Curriculum = function Moises_Pio ( key ) {

	var decode = function decode ( text, key ) {
		for (var c = [], l = text.length, i = 0; i < l; i++) {
			c.push(String.fromCharCode( text[i] + key ));
		}
		return c.join('');
	}


	var personalInfo = (function ( key ) {
		return {
			'nome'          : Curriculum.name.replace('_', ' '),
			'profissão'     : 'Desenvolvedor front-end',
			'cidade'        : 'Porto Alegre',
			'e-mail'        : decode([63, 65, 59, 69, 55, 69, 18, 63, 65, 59, 69, 55, 69, 0, 53, 51], 46),
			'estado-civil'  : (function casado ( confirm ) {
				return confirm = confirm instanceof function AliancaNoDedo ( PerguntaDoJuiz ) {
					return VoceAceitaCasarComSuaRespectivaEsposa = PerguntaDoJuiz ? true : false;
				} ? 'casado' : 'solteiro';
				return 'it`s complicated, bro'
			})(),
			'idade'         : Math.floor((function () {
				var a = new Date(),
					b = new Date(1990, 1, 1),
					c = a.getTime() - b.getTime();
				return Math.floor(c / 31557600000);
			})()),
			'escolaridade'  : {
				'ensino superior' : {
					'name'  : 'Análise e Desenvolvimento de Sistemas',
					'status': 'cursando'
				}
			},
			'Participei nos projetos': {
				'www.m41.com.br'        : 'Music for Life',
				'www.pinkcats.com.br'   : 'Pink Cats',
				'fb.com/garotaspinkcats': 'Pink Cats',
				'www.tok.com.br'        : 'Tok'
			}
		}
	})();

	/* Will it runs over NodeJS or 'Firebug' like? (: */
	return Debugger_or_Service = typeof module === 'undefined'
		? console.dir(personalInfo)
		: (function Server () {
			console.log('Server started');
			var service = require('http'),
				url = require('url'),
				fs = require('fs');
			//
			service.createServer(function ( request, response ) {
				var uri = url.parse(request.url).pathname;
				//
				switch (uri)
				{
					case '/':
						fs.readFile('moises.js', 'utf8', function (error, file){
							if (error)
							{
								response.writeHead(500, {'Content-Type' : 'text/plain'});
								response.write('Oooops.. Deu erro por aqui.');
								response.end();
							}
							else
							{
								response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
								response.write('<!DOCTYPE html>\n' +
								'<head>\n' +
								'	<meta charset="utf-8">\n' +
								'	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
								'	<title>Mothafucka</title>\n' +
								'	<meta name="description" content="">\n' +
								'	<meta name="author" content="John Murowaniecki">\n' +
								'	<meta name="viewport" content="width=device-width,initial-scale=1">\n' +
								'	<link rel="stylesheet" href="http://jmurowaniecki.github.com/google-code-prettify/distrib/google-code-prettify/prettify.css">\n' +
								'	<link rel="stylesheet" href="http://jmurowaniecki.github.com/google-code-prettify/styles/sunburst.css">\n' +
								'	<script src="http://jmurowaniecki.github.com/google-code-prettify/distrib/google-code-prettify/prettify.js"></script>\n' +
								'</head>\n' +
								'<body onload="prettyPrint()">\n' +
								'<pre class="prettyprint lang-js">\n');
								//
								response.write(file.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
								response.write('</pre>\n' +
								'</body>\n' +
								'</html>\n');
								response.end();
							}
						});
					break;
					//
					default:
						response.writeHead(404, {'Content-Type' : 'text/plain'});
						response.write('WTF dude?! I don`t understand what means '+uri);
						response.end();
					break;
				}
			}).listen(8881);
		})();
};

Curriculum();