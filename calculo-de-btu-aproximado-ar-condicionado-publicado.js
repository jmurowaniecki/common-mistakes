/*  calculo-de-btu-aproximado-ar-condicionado-publicado.js
    This file is part of common-mistakes

    Copyright (C) 2013 - John Murowaniecki

    common-mistakes is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    common-mistakes is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with common-mistakes. If not, see <http://www.gnu.org/licenses/>.

    For further informations on https://github.com/jmurowaniecki/common-mistakes
*/

/**
* Cálculo de BTUs aproximado para Ar Condicionados - Função com retorno do
* texto contendo o cálculo de BTUs.
*
* @param {Number} areaMetroQuadrado
* @param {Number} qtdePessoas
* @param {Number} qtdeEletronicos
* @param {String} idObjetoRetorno - caso o ID solicitado não exista, seu
*                 resultado será o retorno da função. Podem ser vinculados IDs
*                 de campos INPUT ou blocos HTML que contenham o atributo ".innerText".
* @return {Number} BTUh.
*/
/*jslint browser: true, devel: true */
function calculoDeBTU(areaMetroQuadrado, qtdePessoas, qtdeEletronicos, idObjetoRetorno, callbackWithResult) {
    "use strict";
    var j, o, h, n, M, u = document.getElementById(idObjetoRetorno), BTUh = false;
    j = parseFloat(areaMetroQuadrado);
    o = parseFloat(qtdePessoas);
    h = parseFloat(qtdeEletronicos);
    n = 0;
    M = 600;
    if ((String() + j + o + h + n).indexOf("NaN") > -1) {
        alert("Digite os dados corretamente");
    } else {
        n = j * M + h * M;
        if (o > 2) {
            n += (o - 2) * M;
        }
        n = (BTUh = n) + " BTUh";
        if (u !== null) {
            if (u.value === undefined) {
                u.innerText = n;
            } else {
                u.value = n;
            }
        }
    }
    if (callbackWithResult !== undefined) {
        callbackWithResult(BTUh);
    }
    return BTUh;
}

/**
* Cria link de busca para a quantidade de BTUs informada.
*
* @param {Number} BTUh
* @param {String} idObjetoRetorno - caso o ID solicitado não exista, seu
*                 resultado será o retorno da função. Podem ser vinculados IDs
*                 de campos INPUT ou blocos HTML que contenham o atributo ".innerText".
* @return {String} Link da busca de produtos para a carga de BTUs solicitada
*
*
* Exemplo de utilização:
*   calculoDeBTU(2, 3, 4, "resultadoCalculo", function (btus) {
*       return linkDeBusca(btus, 'linkDaBusca');
*   });
*/
/*jslint browser: true, devel: true */
function linkDeBusca(BTUh, idObjetoRetorno) {
    "use strict";
    var i, link = "Ache ar condicionados com {{BTUs}} BTUhs", idObj = document.getElementById(idObjetoRetorno), BTUs = {
        7000 : 9000,
        9000 : 12000,
        12000 : 18000,
        18000 : 24000,
        24000 : 30000,
        30000 : 36000,
        36000 : 48000,
        48000 : 60000,
        60000 : 99999999
    };
    for (i in BTUs) {
        if (BTUs.hasOwnProperty(i) && BTUh <= BTUs[i]) {
            break;
        }
    }
    link = link.replace('{{BTUs}}', i).link("/busca/?btu=" + i + "&ordem=menor-preco");
    if (idObj !== null) {
        if (idObj.value === undefined) {
            idObj.innerHTML = link;
        } else {
            idObj.value = link;
        }
    }
    return link;
}

// caller function
function test1(formulario) {
    "use strict";
    var area = formulario.text1.value, pessoas = formulario.text2.value, eletronicos = formulario.text3.value;
    if ((String() + area + pessoas + eletronicos).indexOf('NaN') > -1) {
        alert('Digite os dados corretamente');
    } else {
        calculoDeBTU(area, pessoas, eletronicos, "resultadoCalculo", function (btus) {
            return linkDeBusca(btus, 'linkDaBusca');
        });
    }
}