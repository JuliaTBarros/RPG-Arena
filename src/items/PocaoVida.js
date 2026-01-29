import { Raridade } from '../enums/Raridade.js';
export class PocaoVida {
    constructor() {
        this.nome = 'Poção de Vida';
        this.descricao = 'Um frasco com um líquido vermelho efervescente que fecha feridas.';
        this.raridade = Raridade.Comum;
    }
    usar(personagem) {
        console.log(`✨ O líquido vermelho efervescente brilha enquanto é ingerido!`);
        personagem.curar(20);
    }
}
//# sourceMappingURL=PocaoVida.js.map