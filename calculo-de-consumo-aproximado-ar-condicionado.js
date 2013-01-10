/*  calculo-de-consumo-aproximado-ar-condicionado.js
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
* Cálculo de consumo aproximado para Ar Condicionados - Função com retorno do
* texto contendo o cálculo de consumo convertido em R$ (Reais).
*
* @param {Number} horasPorDia
* @param {Number} diasPorMes
* @param {Number} consumoEnergetico
* @param {Number} precoKWpH
* @param {String} idRetornoMensagem - caso o ID solicitado não exista, seu
*                 resultado será o retorno da função. Podem ser vinculados IDs
*                 de campos INPUT ou blocos HTML que contenham o atributo ".innerText".
*/
/*jslint browser: true, devel: true */
function calculoDeConsumo(horasPorDia, diasPorMes, consumoEnergetico, precoKWpH, idRetornoMensagem) {
    "use strict";
    var j, o, h, n, M, u = document.getElementById(idRetornoMensagem);
    j = parseFloat(horasPorDia);
    o = parseFloat(diasPorMes);
    h = parseFloat(consumoEnergetico);
    n = parseFloat(precoKWpH.replace ? precoKWpH.replace(",", ".") : precoKWpH);
    if (u !== null) {
        if (u.value !== undefined) {
            u.innerText = "Aguarde.. Calculando.";
        } else {
            u.value = "Aguarde.. Calculando.";
        }
    }
    if ((String() + j + o + h + n).indexOf("NaN") > -1) {
        alert("Informe os valores corretamente.");
    } else {
        M = (j * o * h * n) / 30;
        if (M.toFixed) {
            M = Math.ceil(M * 100) / 100;
            M = M.toFixed(2);
        }
        if (u === null) {
            return "R$ " + M + " p/mês";
        }
        if (u.value !== undefined) {
            u.innerText = "R$ " + M + " p/mês";
        } else {
            u.value = "R$ " + M + " p/mês";
        }
    }
}