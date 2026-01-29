import { Guerreiro } from './Guerreiro.js';
import { Mago } from './Mago.js';
import { Arqueiro } from './Arqueiro.js';
import { Ladino } from './Ladino.js';
export class Arena {
    constructor() {
        this._lutadores = [];
        this._atacante = null;
        this._defensor = null;
    }
    adicionarLutador(lutador) {
        this._lutadores.push(lutador);
    }
    getClassesLutadores() {
        return this._lutadores.map((l) => l.classe);
    }
    buscarLutadorPorClasse(classe) {
        const encontrado = this._lutadores.find((l) => l.classe === classe);
        if (!encontrado)
            throw new Error('A linhagem deste guerreiro é desconhecida nesta arena.');
        return encontrado;
    }
    listarLutadores() {
        console.log('\n--- 📜 LISTA DE LUTADORES NA ARENA ---');
        if (this._lutadores.length === 0) {
            console.log('A arena está vazia.');
            return;
        }
        this._lutadores.forEach((l, index) => {
            console.log(`${index + 1}. [${l.classe}] ${l.nome} - ❤️ Vida: ${l.vida}`);
        });
    }
    /**
     * Inicia o duelo com os textos épicos originais.
     */
    prepararDuelo(classe1, classe2) {
        this._atacante = this.buscarLutadorPorClasse(classe1);
        this._defensor = this.buscarLutadorPorClasse(classe2);
        console.log(`\n⚔️  O DUELO COMEÇOU: ${this._atacante.nome} (${this._atacante.classe}) VS ${this._defensor.nome} (${this._defensor.classe}) ⚔️`);
        this.exibirStatusTurno();
    }
    /**
     * Processa a ação mantendo as mensagens de erro e interações.
     */
    executarTurno(acao, itemIdx) {
        if (!this._atacante || !this._defensor)
            return;
        try {
            switch (acao) {
                case 'atacar':
                    this._atacante.atacar(this._defensor);
                    break;
                case 'especial':
                    this.executarHabilidade(this._atacante, this._defensor);
                    break;
                case 'item':
                    if (itemIdx === undefined)
                        return;
                    this._atacante.usarItem(itemIdx);
                    break;
                case 'passar':
                    console.log(`💤 ${this._atacante.nome} aguarda o momento certo.`);
                    break;
            }
            if (this.verificarFimDeJogo())
                return;
            this.alternarTurno();
        }
        catch (error) {
            console.log(`\n⚠️  ${error.message}`);
            console.log(`   Tente outra ação para este turno.`);
        }
    }
    exibirStatusTurno() {
        if (!this._atacante || !this._defensor)
            return;
        console.log(`\n--- 🌒 TURNO DE: ${this._atacante.nome} ---`);
        console.log(`❤️  Vitalidade: ${this._atacante.vida} | 🛡️  Oponente: ${this._defensor.vida}`);
    }
    alternarTurno() {
        if (this._atacante && this._defensor) {
            [this._atacante, this._defensor] = [this._defensor, this._atacante];
            this.exibirStatusTurno();
        }
    }
    verificarFimDeJogo() {
        if (this._atacante && this._defensor) {
            if (!this._atacante.estaVivo() || !this._defensor.estaVivo()) {
                const vencedor = this._atacante.estaVivo()
                    ? this._atacante
                    : this._defensor;
                console.log(`\n🏆 O GRANDE CAMPEÃO É: ${vencedor.nome}!`);
                return true;
            }
        }
        return false;
    }
    executarHabilidade(at, df) {
        // Mantém as chamadas que ativam os textos específicos de cada classe
        if (at instanceof Guerreiro)
            at.golpeBrutal(df);
        else if (at instanceof Mago)
            at.meditar();
        else if (at instanceof Arqueiro)
            at.flechaPrecisa(df);
        else if (at instanceof Ladino)
            at.ataqueFurtivo(df);
    }
}
//# sourceMappingURL=Arena.js.map