import * as readline from 'readline-sync';
import { Arena } from './models/Arena';
import { Guerreiro } from './models/Guerreiro';
import { Mago } from './models/Mago';
import { Arqueiro } from './models/Arqueiro';
import { Ladino } from './models/Ladino';
import { PocaoVida } from './items/PocaoVida';

// 1. Instanciar a Arena
const arena = new Arena();

// 2. Criar personagens de classes diferentes
const guerreiro = new Guerreiro('Aragorn');
const mago = new Mago('Gandalf');
const arqueiro = new Arqueiro('Legolas');
const ladino = new Ladino('Bilbo');

// 3. Adicionar itens aos personagens
guerreiro.adicionarItem(new PocaoVida());

// 4. Adicionar lutadores à Arena
arena.adicionarLutador(guerreiro);
arena.adicionarLutador(mago);
arena.adicionarLutador(arqueiro);
arena.adicionarLutador(ladino);

console.log('--- 🏟️  BEM-VINDO À RPG ARENA 🏟️  ---');

// 5. Requisito: Listar os lutadores cadastrados
arena.listarLutadores();

// 6. Requisito: Demonstrar tratamento de erro (ex: usar habilidade sem mana)
console.log('\n--- 🧪 TESTE DE SEGURANÇA: Habilidade sem Mana ---');
try {
	const magoTeste = arena.buscarLutador('Gandalf') as Mago;
	magoTeste.mana = 0; // Forçamos a mana a zero para o teste
	console.log(`Tentando lançar Bola de Fogo com ${magoTeste.mana} de mana...`);
	magoTeste.bolaDeFogo(guerreiro);
} catch (error: any) {
	console.log(`✅ Tratamento de erro confirmado: ${error.message}`);
}

// 7. Executar a batalha principal
console.log('\n--- ⚔️ PREPARAÇÃO PARA O DUELO ---');
const opcoes = arena.getNomesLutadores();

console.log('Jogador 1, escolha sua classe:');
const p1Idx = readline.keyInSelect(opcoes, 'Classe:');

console.log('\nJogador 2, escolha seu oponente:');
const p2Idx = readline.keyInSelect(opcoes, 'Classe:');

// Validação e Início do Duelo
if (
	p1Idx !== -1 &&
	p2Idx !== -1 &&
	p1Idx !== p2Idx &&
	opcoes[p1Idx] !== undefined &&
	opcoes[p2Idx] !== undefined
) {
	// Restaurar mana do mago caso ele tenha sido usado no teste acima
	const lutador1 = arena.buscarLutador(opcoes[p1Idx]!);
	if (lutador1 instanceof Mago) lutador1.mana = 100;

	arena.batalhar(opcoes[p1Idx]!, opcoes[p2Idx]!);
} else {
	console.log('Os astros não se alinharam. Este confronto é impossível.');
}
