"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const PersonagemMortoError_1 = require("../errors/PersonagemMortoError");
const InventarioCheioError_1 = require("../errors/InventarioCheioError");
class Personagem {
    constructor(nome, classe, vida, ataque, defesa) {
        this._inventario = [];
        this.nome = nome;
        this.classe = classe;
        this._vidaMaxima = vida;
        this._vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    get inventario() {
        return [...this._inventario]; // Retorna uma cópia para segurança
    }
    get vida() {
        return this._vida;
    }
    set vida(valor) {
        if (valor > this._vidaMaxima) {
            this._vida = this._vidaMaxima;
        }
        else if (valor < 0) {
            this._vida = 0;
        }
        else {
            this._vida = valor;
        }
    }
    getNomeRecurso() {
        return 'Recurso';
    }
    estaVivo() {
        return this._vida > 0;
    }
    atacar(alvo) {
        if (!this.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(this.nome);
        if (!alvo.estaVivo())
            throw new PersonagemMortoError_1.PersonagemMortoError(alvo.nome);
        const dano = Math.max(0, this.ataque - alvo.defesa);
        alvo.vida -= dano;
        console.log(`⚔️ ${this.nome} ergue sua arma e desfere um golpe contra ${alvo.nome}!`);
        if (dano > 0) {
            console.log(`💥 O ataque atinge o alvo, infligindo ${dano} pontos de sofrimento.`);
        }
        else {
            console.log(`🛡️ ${alvo.nome} consegue bloquear o impacto! O golpe não surtiu efeito.`);
        }
        return dano;
    }
    curar(quantidade) {
        const vidaAnterior = this.vida;
        this.vida += quantidade;
        const curaReal = this.vida - vidaAnterior;
        if (curaReal > 0) {
            console.log(`❤️  ${this.nome} recuperou ${curaReal} pontos de vitalidade.`);
            console.log(`   [Vida Atual: ${this.vida}]`);
        }
        else {
            console.log(`✨ ${this.nome} já está em sua plenitude física e não pode ser mais curado.`);
        }
    }
    adicionarItem(item) {
        if (this._inventario.length >= 5) {
            throw new InventarioCheioError_1.InventarioCheioError();
        }
        this._inventario.push(item);
        console.log(`📦 ${this.nome} encontrou [${item.nome}] e o guardou com cuidado em sua bolsa.`);
    }
    usarItem(indice) {
        const item = this._inventario[indice];
        if (item) {
            console.log(`🎒 ${this.nome} abre sua bolsa e decide utilizar ${item.nome}!`);
            item.usar(this);
            this._inventario.splice(indice, 1);
        }
        else {
            console.log(`❌ ${this.nome}, suas mãos tateiam o fundo da bolsa, mas encontram apenas o vazio.`);
            throw new Error('Este compartimento da sua algibeira está desocupado.');
        }
    }
}
exports.Personagem = Personagem;
//# sourceMappingURL=Personagem.js.map