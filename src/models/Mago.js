"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personagem_1 = require("./Personagem");
const ClassePersonagem_1 = require("../enums/ClassePersonagem");
const ManaInsuficienteError_1 = require("../errors/ManaInsuficienteError");
const PersonagemMortoError_1 = require("../errors/PersonagemMortoError");
class Mago extends Personagem_1.Personagem {
    constructor(nome, ataque = 12, defesa = 5) {
        super(nome, ClassePersonagem_1.ClassePersonagem.Mago, 80, ataque, defesa);
        this._manaMaxima = 100;
        this._mana = this._manaMaxima;
    }
    // Getters e Setters para gestão de mana
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
        return 'Mana';
    }
    /**
     * Bola de Fogo: Uma explosão arcana devastadora.
     * Custo: 30 de mana. Dano: Triplo do ataque.
     */
    atacar(alvo) {
        if (!this.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(this.nome);
        if (!alvo.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(alvo.nome);
        const custo = 30;
        if (this.mana < custo) {
            // Usando getter
            throw new ManaInsuficienteError_1.ManaInsuficienteError(this);
        }
        this.mana -= custo;
        const danoBase = this.ataque * 3;
        const danoFinal = Math.max(0, danoBase - alvo.defesa);
        console.log(`🔥 ${this.nome} entoa cânticos antigos e projeta uma imensa Bola de Fogo!`);
        alvo.vida -= danoFinal;
        if (danoFinal > 0) {
            console.log(`💥 As chamas consomem ${alvo.nome}, causando ${danoFinal} de dano ardente.`);
        }
        else {
            console.log(`🛡️  Incrível! ${alvo.nome} resistiu ao calor intenso do feitiço.`);
        }
        console.log(`✨ Energia arcana restante: ${this.mana}`);
        return danoFinal;
    }
    /**
     * Meditar: O Mago se conecta com o cosmos para recuperar suas energias.
     * Recupera 25 pontos de mana.
     */
    meditar() {
        if (!this.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(this.nome);
        const recuperacao = 25;
        this.mana += recuperacao;
        console.log(`🧘 ${this.nome} fecha os olhos e entra em um estado de transe profundo...`);
        console.log(`🌀 A energia mística do ambiente é absorvida! (+${recuperacao} de mana).`);
        console.log(`✨ Mana atual: ${this.mana}`);
    }
}
exports.Mago = Mago;
//# sourceMappingURL=Mago.js.map