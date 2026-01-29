"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arqueiro = void 0;
const Personagem_1 = require("./Personagem");
const ClassePersonagem_1 = require("../enums/ClassePersonagem");
const ManaInsuficienteError_1 = require("../errors/ManaInsuficienteError");
const PersonagemMortoError_1 = require("../errors/PersonagemMortoError");
class Arqueiro extends Personagem_1.Personagem {
    constructor(nome, ataque = 15, defesa = 8) {
        super(nome, ClassePersonagem_1.ClassePersonagem.Arqueiro, 100, ataque, defesa);
        this._manaMaxima = 50;
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
    atacar(alvo) {
        if (!this.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(this.nome);
        if (!alvo.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(alvo.nome);
        let multiplicador = 1;
        const chanceCritico = Math.random();
        console.log(`🏹 ${this.nome} tensiona a corda de seu arco e dispara uma flecha sibilante contra ${alvo.nome}!`);
        if (chanceCritico <= 0.3) {
            multiplicador = 2;
            console.log(`✨ Acerto Crítico! A flecha atinge um ponto vital com precisão implacável!`);
        }
        const dano = Math.max(0, this.ataque * multiplicador - alvo.defesa);
        alvo.vida -= dano;
        if (dano > 0) {
            console.log(`💥 O impacto perfura as defesas, causando ${dano} de dano.`);
        }
        else {
            console.log(`🛡️  ${alvo.nome} consegue se esquivar do projétil no último milésimo!`);
        }
        return dano;
    }
    flechaPrecisa(alvo) {
        if (!this.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(this.nome);
        if (!alvo.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(alvo.nome);
        const custo = 15;
        if (this._mana < custo) {
            throw new ManaInsuficienteError_1.ManaInsuficienteError(this);
        }
        this.mana -= custo;
        const danoBase = this.ataque * 2;
        const danoFinal = Math.max(0, danoBase - alvo.defesa);
        console.log(`🎯 ${this.nome} fecha um dos olhos, controla a respiração e solta uma Flecha Precisa!`);
        alvo.vida -= danoFinal;
        if (danoFinal > 0) {
            console.log(`💥 A flecha atravessa o ar e atinge o alvo em cheio, infligindo ${danoFinal} de dano.`);
        }
        else {
            console.log(`🛡️  Incrível! ${alvo.nome} bloqueou a flecha com seu equipamento.`);
        }
        console.log(`✨ Energia restante: ${this._mana}`);
        return danoFinal;
    }
}
exports.Arqueiro = Arqueiro;
//# sourceMappingURL=Arqueiro.js.map