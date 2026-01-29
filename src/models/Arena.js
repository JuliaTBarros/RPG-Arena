"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arena = void 0;
const readline = require("readline-sync");
const Guerreiro_1 = require("./Guerreiro");
const Mago_1 = require("./Mago");
const Arqueiro_1 = require("./Arqueiro");
const Ladino_1 = require("./Ladino");
class Arena {
    constructor() {
        this._lutadores = [];
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
    batalhar(classe1, classe2) {
        const p1 = this.buscarLutadorPorClasse(classe1);
        const p2 = this.buscarLutadorPorClasse(classe2);
        let atacante = p1;
        let defensor = p2;
        console.log(`\n⚔️  O DUELO COMEÇOU: ${p1.nome} (${p1.classe}) VS ${p2.nome} (${p2.classe}) ⚔️`);
        while (p1.estaVivo() && p2.estaVivo()) {
            console.log(`\n--- 🌒 TURNO DE: ${atacante.nome} ---`);
            console.log(`❤️  Vitalidade: ${atacante.vida} | 🛡️  Oponente: ${defensor.vida}`);
            const acoes = [
                'Desferir Ataque Básico',
                'Canalizar Habilidade Especial',
                'Vasculhar a Bolsa de Itens',
                'Aguardar o Momento Certo (Passar Vez)',
            ];
            const escolha = readline.keyInSelect(acoes, 'O que farás neste turno, bravo combatente?');
            if (escolha === -1) {
                console.log('🏳️ O lutador fugiu da arena! O destino interveio e o combate foi interrompido.');
                return;
            }
            try {
                let acaoFinalizada = true;
                switch (escolha) {
                    case 0: // Ataque Básico
                        atacante.atacar(defensor);
                        break;
                    case 1: // Habilidade Especial
                        this.executarHabilidade(atacante, defensor);
                        break;
                    case 2: // Escolha de Item Interativa
                        acaoFinalizada = this.menuEscolhaItem(atacante);
                        break;
                    case 3:
                        console.log(`💤 ${atacante.nome} aguarda o momento certo.`);
                        break;
                }
                // Se a ação falhou (ex: cancelou o item), não muda o turno
                if (acaoFinalizada) {
                    [atacante, defensor] = [defensor, atacante];
                }
            }
            catch (error) {
                console.log(`\n⚠️  ${error.message}`);
                console.log(`   Tente outra ação para este turno.`);
            }
        }
        const vencedor = p1.estaVivo() ? p1 : p2;
        console.log(`\n🏆 O GRANDE CAMPEÃO É: ${vencedor.nome}!`);
    }
    menuEscolhaItem(personagem) {
        const itens = personagem.inventario.map((i) => i.nome);
        if (itens.length === 0) {
            console.log('🎒 Sua bolsa está vazia!');
            return false; // Não finaliza a ação, permite escolher outra
        }
        const itemIdx = readline.keyInSelect(itens, 'Qual item deseja usar?');
        if (itemIdx === -1)
            return false; // Voltou do menu
        personagem.usarItem(itemIdx);
        return true;
    }
    executarHabilidade(at, df) {
        if (at instanceof Guerreiro_1.Guerreiro)
            at.golpeBrutal(df);
        else if (at instanceof Mago_1.Mago)
            at.meditar;
        else if (at instanceof Arqueiro_1.Arqueiro)
            at.flechaPrecisa(df);
        else if (at instanceof Ladino_1.Ladino)
            at.ataqueFurtivo(df);
    }
}
exports.Arena = Arena;
//# sourceMappingURL=Arena.js.map