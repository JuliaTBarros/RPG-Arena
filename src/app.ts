import * as readline from 'readline-sync';
import { Arena } from './models/Arena';
import { Guerreiro } from './models/Guerreiro';
import { Mago } from './models/Mago';
import { Arqueiro } from './models/Arqueiro';
import { Ladino } from './models/Ladino';
import { PocaoVida } from './items/PocaoVida';

const arena = new Arena();

const guerreiro = new Guerreiro('Aragorn');
const mago = new Mago('Gandalf');
const arqueiro = new Arqueiro('Legolas');
const ladino = new Ladino('Bilbo');

guerreiro.adicionarItem(new PocaoVida());

arena.adicionarLutador(guerreiro);
arena.adicionarLutador(mago);
arena.adicionarLutador(arqueiro);
arena.adicionarLutador(ladino);

console.log('--- 🏰 OS PORTÕES DA ARENA SE ABREM 🏰 ---');

console.log('\nEm campo, heróis aguardam o sinal do destino:');
arena.listarLutadores();

console.log('\n--- ⚔️ PREPARAÇÃO PARA O CONFRONTO ---');
const opcoes = arena.getClassesLutadores();

console.log('Comandante 1, escolha a classe do seu campeão:');
const p1Idx = readline.keyInSelect(opcoes, 'Classe Escolhida:');

console.log('\nComandante 2, escolha quem desafiará este destino:');
const p2Idx = readline.keyInSelect(opcoes, 'Classe Escolhida:');

if (p1Idx !== -1 && p2Idx !== -1 && p1Idx !== p2Idx) {
	const lutador1 = arena.buscarLutadorPorClasse(opcoes[p1Idx]!);
	if (lutador1 instanceof Mago) lutador1.mana = 100;

	// Resetar mana do segundo lutador se for Mago também
	const lutador2 = arena.buscarLutadorPorClasse(opcoes[p2Idx]!);
	if (lutador2 instanceof Mago) lutador2.mana = 100;

	arena.batalhar(opcoes[p1Idx]!, opcoes[p2Idx]!);
} else {
	console.log('Os deuses da guerra desviam o olhar. O embate foi cancelado.');
}
