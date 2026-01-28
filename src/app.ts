import * as readline from 'readline-sync';
import { Arena } from './models/Arena';
import { Guerreiro } from './models/Guerreiro';
import { Mago } from './models/Mago';
import { Arqueiro } from './models/Arqueiro';
import { Ladino } from './models/Ladino';
import { PocaoVida } from './items/PocaoVida';

const arena = new Arena();

// Criando um representante único de cada classe (Nome = Classe)
arena.adicionarLutador(new Guerreiro('Guerreiro'));
arena.adicionarLutador(new Mago('Mago'));
arena.adicionarLutador(new Arqueiro('Arqueiro'));
arena.adicionarLutador(new Ladino('Ladino'));

// Adicionando um item para teste no Guerreiro
arena.buscarLutador('Guerreiro').adicionarItem(new PocaoVida());

console.log('--- 🏟️  BEM-VINDO À RPG ARENA 🏟️  ---');

// Listagem dos nomes para seleção
const opcoes = arena.getNomesLutadores();

console.log('\nJogador 1, escolha sua classe:');
const p1Idx = readline.keyInSelect(opcoes, 'Classe:');

console.log('\nJogador 2, escolha seu oponente:');
const p2Idx = readline.keyInSelect(opcoes, 'Classe:');

if (
	p1Idx !== -1 &&
	p2Idx !== -1 &&
	p1Idx !== p2Idx &&
	opcoes[p1Idx] !== undefined &&
	opcoes[p2Idx] !== undefined
) {
	arena.batalhar(opcoes[p1Idx], opcoes[p2Idx]);
} else {
	console.log('Seleção inválida. O duelo não pode ocorrer.');
}
