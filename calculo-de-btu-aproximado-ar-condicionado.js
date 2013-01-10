/*  calculo-de-btu-aproximado-ar-condicionado.js
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
* @param {String} idRetornoMensagem - caso o ID solicitado não exista, seu
*                 resultado será o retorno da função. Podem ser vinculados IDs
*                 de campos INPUT ou blocos HTML que contenham o atributo ".innerText".
*/
/*jslint browser: true, devel: true */
function calculoDeBTU(areaMetroQuadrado, qtdePessoas, qtdeEletronicos, idRetornoMensagem) {
    "use strict";
    var j, o, h, n, M, u = document.getElementById(idRetornoMensagem);
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
        n = n + " BTUh";
        if (u === null) {
            return n;
        }
        if (u.value === undefined) {
            u.innerText = n;
        } else {
            u.value = n;
        }
    }
}