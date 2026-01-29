"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PocaoVida = void 0;
const Raridade_1 = require("../enums/Raridade");
class PocaoVida {
    constructor() {
        this.nome = 'Poção de Vida';
        this.descricao = 'Um frasco com um líquido vermelho efervescente que fecha feridas.';
        this.raridade = Raridade_1.Raridade.Comum;
    }
    usar(personagem) {
        console.log(`✨ O líquido vermelho efervescente brilha enquanto é ingerido!`);
        personagem.curar(20);
    }
}
exports.PocaoVida = PocaoVida;
//# sourceMappingURL=PocaoVida.js.map