"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PocaoMana = void 0;
const Raridade_1 = require("../enums/Raridade");
class PocaoMana {
    constructor() {
        this.nome = 'Poção de Mana';
        this.descricao = 'Um elixir azul profundo que restaura o fluxo de energia arcana.';
        this.raridade = Raridade_1.Raridade.Incomum;
    }
    usar(personagem) {
        if ('mana' in personagem) {
            const pComMana = personagem;
            pComMana.mana += 30;
            const recurso = personagem.getNomeRecurso();
            console.log(`🌀 Uma essência azulada envolve ${personagem.nome}, restaurando seu fluxo de ${recurso}!`);
            console.log(`🧪 ${recurso} atual: ${pComMana.mana}`);
        }
        else {
            console.log(`⚠️ ${personagem.nome} observa o líquido azul brilhar no frasco, mas a energia se dissipa...`);
            console.log(`   O vigor físico de um ${personagem.classe} não encontra ressonância com esta essência mística.`);
        }
    }
}
exports.PocaoMana = PocaoMana;
//# sourceMappingURL=PocaoMana.js.map