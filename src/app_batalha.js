import { Arena } from './models/Arena.js';
import { Guerreiro } from './models/Guerreiro.js';
import { Mago } from './models/Mago.js';
import { Arqueiro } from './models/Arqueiro.js';
import { Ladino } from './models/Ladino.js';
import { PocaoVida } from './items/PocaoVida.js';
const arena = new Arena();
// 🏰 Inicializar os heróis (necessário para a lógica da Arena encontrar as instâncias)
const h1 = new Guerreiro('Aragorn');
const h2 = new Mago('Gandalf');
const h3 = new Arqueiro('Legolas');
const h4 = new Ladino('Bilbo');
h1.adicionarItem(new PocaoVida()); // Um presente dos elfos para o guerreiro
arena.adicionarLutador(h1);
arena.adicionarLutador(h2);
arena.adicionarLutador(h3);
arena.adicionarLutador(h4);
// 📜 Redirecionar Console para o Pergaminho Visual
const pergaminho = document.getElementById('pergaminho-batalha');
console.log = (...args) => {
    const p = document.createElement('p');
    p.textContent = args.join(' ');
    pergaminho.appendChild(p);
    pergaminho.scrollTop = pergaminho.scrollHeight;
};
// ⚔️ Recuperar Seleção e Iniciar Duelo
const p1Nome = sessionStorage.getItem('heroi_p1');
const p2Nome = sessionStorage.getItem('heroi_p2');
if (p1Nome && p2Nome) {
    console.log('--- 🛡️ O CAMPO DE HONRA FOI DEFINIDO ---');
    arena.prepararDuelo(p1Nome, p2Nome);
}
else {
    // Se alguém tentar entrar direto no batalha.html sem escolher, volta para o início
    window.location.href = 'index.html';
}
// 🎮 Comandos de Batalha
document
    .getElementById('btn-atacar')
    ?.addEventListener('click', () => arena.executarTurno('atacar'));
document
    .getElementById('btn-especial')
    ?.addEventListener('click', () => arena.executarTurno('especial'));
document
    .getElementById('btn-item')
    ?.addEventListener('click', () => arena.executarTurno('item', 0));
document
    .getElementById('btn-passar')
    ?.addEventListener('click', () => arena.executarTurno('passar'));
//# sourceMappingURL=app_batalha.js.map