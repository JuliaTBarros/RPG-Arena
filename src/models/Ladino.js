"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ladino = void 0;
const Personagem_1 = require("./Personagem");
const ClassePersonagem_1 = require("../enums/ClassePersonagem");
const PersonagemMortoError_1 = require("../errors/PersonagemMortoError");
const ManaInsuficienteError_1 = require("../errors/ManaInsuficienteError");
class Ladino extends Personagem_1.Personagem {
    constructor(nome, ataque = 14, defesa = 7) {
        super(nome, ClassePersonagem_1.ClassePersonagem.Ladino, 90, ataque, defesa);
        this._manaMaxima = 40;
        this._mana = this._manaMaxima;
    }
    get mana() {
        return this._mana;
    }
    set mana(valor) {
        if (valor > this._manaMaxima) {
            this._mana = this._manaMaxima;
        }
        else if (valor < 0) {
            this._mana = 0;
        }
        else {
            this._mana = valor;
        }
    }
    getNomeRecurso() {
        return 'Energia';
    }
    /**
     * Ataque Furtivo: O Ladino desaparece nas sombras e atinge um ponto vital.
     * Custo: 20 de mana. Dano: 2.5x o ataque (ignora parte da defesa).
     */
    ataqueFurtivo(alvo) {
        if (!this.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(this.nome);
        if (!alvo.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(alvo.nome);
        const custo = 20;
        if (this._mana < custo) {
            throw new ManaInsuficienteError_1.ManaInsuficienteError(this);
        }
        this.mana -= custo;
        const danoBase = this.ataque * 2.5;
        const defesaReduzida = alvo.defesa / 2;
        const danoFinal = Math.max(0, Math.floor(danoBase - defesaReduzida));
        console.log(`👤 ${this.nome} se mistura às sombras e surge instantaneamente atrás de ${alvo.nome}!`);
        console.log(`🗡️  Um golpe preciso de adaga busca o ponto mais vulnerável.`);
        alvo.vida -= danoFinal;
        if (danoFinal > 0) {
            console.log(`💥 Sangue jorra! O ataque furtivo causou ${danoFinal} de dano crítico.`);
        }
        else {
            console.log(`🛡️  ${alvo.nome} sentiu um calafrio e se moveu no último segundo, evitando o pior.`);
        }
        console.log(`✨ Energia restante: ${this._mana}`);
        return danoFinal;
    }
}
exports.Ladino = Ladino;
//# sourceMappingURL=Ladino.js.map