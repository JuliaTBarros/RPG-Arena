"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline-sync");
const Arena_1 = require("./models/Arena");
const Guerreiro_1 = require("./models/Guerreiro");
const Mago_1 = require("./models/Mago");
const Arqueiro_1 = require("./models/Arqueiro");
const Ladino_1 = require("./models/Ladino");
const PocaoVida_1 = require("./items/PocaoVida");
const arena = new Arena_1.Arena();
const guerreiro = new Guerreiro_1.Guerreiro('Aragorn');
const mago = new Mago_1.Mago('Gandalf');
const arqueiro = new Arqueiro_1.Arqueiro('Legolas');
const ladino = new Ladino_1.Ladino('Bilbo');
guerreiro.adicionarItem(new PocaoVida_1.PocaoVida());
arena.adicionarLutador(guerreiro);
arena.adicionarLutador(mago);
arena.adicionarLutador(arqueiro);
arena.adicionarLutador(ladino);
console.log('--- 🏰 OS PORTÕES DA ARENA SE ABREM 🏰 ---');
console.log('\nEm campo, heróis aguardam o sinal do destino:');
arena.listarLutadores();
console.log('\n--- 📖 PRÓLOGO: O ESGOTAMENTO ARCANO ---');
try {
    const magoTeste = arena.buscarLutadorPorClasse('Mago');
    magoTeste.mana = 0;
    console.log(`Gandalf tenta convocar as chamas, mas sente suas veias místicas vazias...`);
    magoTeste.atacar(guerreiro);
}
catch (error) {
    console.log(`\n${error.message}`);
}
console.log('\n--- ⚔️ PREPARAÇÃO PARA O CONFRONTO ---');
const opcoes = arena.getClassesLutadores();
console.log('Comandante 1, escolha a classe do seu campeão:');
const p1Idx = readline.keyInSelect(opcoes, 'Classe Escolhida:');
console.log('\nComandante 2, escolha quem desafiará este destino:');
const p2Idx = readline.keyInSelect(opcoes, 'Classe Escolhida:');
if (p1Idx !== -1 && p2Idx !== -1 && p1Idx !== p2Idx) {
    const lutador1 = arena.buscarLutadorPorClasse(opcoes[p1Idx]);
    if (lutador1 instanceof Mago_1.Mago)
        lutador1.mana = 100;
    // Resetar mana do segundo lutador se for Mago também
    const lutador2 = arena.buscarLutadorPorClasse(opcoes[p2Idx]);
    if (lutador2 instanceof Mago_1.Mago)
        lutador2.mana = 100;
    arena.batalhar(opcoes[p1Idx], opcoes[p2Idx]);
}
else {
    console.log('Os deuses da guerra desviam o olhar. O embate foi cancelado.');
}
//# sourceMappingURL=app.js.map