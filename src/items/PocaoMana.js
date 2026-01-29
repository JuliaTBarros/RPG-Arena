import { Raridade } from '../enums/Raridade.js';
export class PocaoMana {
    constructor() {
        this.nome = 'Poção de Mana';
        this.descricao = 'Um elixir azul profundo que restaura o fluxo de energia arcana.';
        this.raridade = Raridade.Incomum;
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
//# sourceMappingURL=PocaoMana.js.map