"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const ClassePersonagem_1 = require("../enums/ClassePersonagem");
const PersonagemMortoError_1 = require("../errors/PersonagemMortoError");
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    constructor(nome, defesa = 10) {
        // Ordem: nome, classe, vida, ataque, defesa
        super(nome, ClassePersonagem_1.ClassePersonagem.Guerreiro, 150, 18, defesa);
    }
    golpeBrutal(alvo) {
        if (!this.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(this.nome);
        if (!alvo.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(alvo.nome);
        const danoBase = this.ataque * 2;
        const danoFinal = Math.max(0, danoBase - alvo.defesa);
        console.log(`🛡️  ${this.nome} concentra toda sua fúria em um Golpe Brutal!`);
        alvo.vida -= danoFinal;
        if (danoFinal > 0) {
            console.log(`💥 O impacto é avassalador! ${alvo.nome} cambaleia ao sofrer ${danoFinal} de dano.`);
        }
        else {
            console.log(`🛡️  Inacreditável! Mesmo com tal força, ${alvo.nome} permaneceu inabalável.`);
        }
        return danoFinal;
    }
}
exports.Guerreiro = Guerreiro;
//# sourceMappingURL=Guerreiro.js.map