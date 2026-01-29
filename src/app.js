import { Arena } from './models/Arena.js';
import { Guerreiro } from './models/Guerreiro.js';
import { Mago } from './models/Mago.js';
import { Arqueiro } from './models/Arqueiro.js';
import { Ladino } from './models/Ladino.js';
import { PocaoVida } from './items/PocaoVida.js';
const arena = new Arena();
// 🏰 1. Criar e Adicionar Lutadores (Isso DEVE vir antes de preencher o dropdown)
const h1 = new Guerreiro('Aragorn');
const h2 = new Mago('Gandalf');
const h3 = new Arqueiro('Legolas');
const h4 = new Ladino('Bilbo');
h1.adicionarItem(new PocaoVida());
arena.adicionarLutador(h1);
arena.adicionarLutador(h2);
arena.adicionarLutador(h3);
arena.adicionarLutador(h4);
// 📜 2. Referências da Interface
const pergaminho = document.getElementById('pergaminho-batalha');
const selectP1 = document.getElementById('select-p1');
const selectP2 = document.getElementById('select-p2');
const btnIniciar = document.getElementById('btn-iniciar');
const painelComandos = document.getElementById('painel-comandos');
const painelSelecao = document.getElementById('painel-selecao');
// Redirecionar Logs para o Pergaminho
console.log = (...args) => {
    const p = document.createElement('p');
    p.textContent = args.join(' ');
    pergaminho.appendChild(p);
    pergaminho.scrollTop = pergaminho.scrollHeight;
};
// 📋 3. Preencher Dropdowns
const classesDisponiveis = arena.getClassesLutadores();
const heroisParaGrimorio = [
    {
        classe: 'Guerreiro',
        hp: 150,
        atk: 18,
        def: 10,
        especial: 'Golpe Brutal (Dano 2x)',
    },
    {
        classe: 'Mago',
        hp: 80,
        atk: 12,
        def: 5,
        especial: 'Bola de Fogo (Dano 3x)',
    },
    {
        classe: 'Arqueiro',
        hp: 100,
        atk: 15,
        def: 8,
        especial: 'Flecha Precisa (Dano 2x)',
    },
    {
        classe: 'Ladino',
        hp: 90,
        atk: 14,
        def: 7,
        especial: 'Ataque Furtivo (Dano 2.5x)',
    },
];
const painelCards = document.getElementById('grimorio-herois');
if (painelCards) {
    heroisParaGrimorio.forEach((h) => {
        const card = document.createElement('div');
        card.className = 'card-heroi';
        card.innerHTML = `
            <h4>${h.classe}</h4>
            <div><span class="stats-label">❤️ Vida:</span> ${h.hp}</div>
            <div><span class="stats-label">⚔️ Atk:</span> ${h.atk}</div>
            <div><span class="stats-label">🛡️ Def:</span> ${h.def}</div>
            <div style="margin-top:5px; font-style: italic; color: #e0d5b1;">
                ✨ ${h.especial}
            </div>
        `;
        painelCards.appendChild(card);
    });
}
// O novo texto épico de inicialização
console.log('--- 📜 AS CRÔNICAS SE REVELAM ---');
console.log('O pergaminho brilha com nomes de antigas linhagens: os destemidos Guerreiros, os sábios Magos, os ágeis Arqueiros e os astutos Ladinos apresentam-se diante do destino.');
if (classesDisponiveis.length === 0) {
    console.log('⚠️ Erro: Nenhum lutador foi adicionado à arena!');
}
classesDisponiveis.forEach((classe) => {
    selectP1.add(new Option(classe, classe));
    selectP2.add(new Option(classe, classe));
});
// ⚔️ 4. Iniciar Duelo
btnIniciar?.addEventListener('click', () => {
    if (selectP1.value === selectP2.value) {
        alert('Escolha combatentes de classes diferentes!');
        return;
    }
    arena.prepararDuelo(selectP1.value, selectP2.value);
    if (painelSelecao)
        painelSelecao.style.display = 'none';
    if (painelComandos)
        painelComandos.style.display = 'grid';
});
// 🎮 5. Botões de Ação
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
console.log('--- 🏰 OS PORTÕES DA ARENA SE ABREM 🏰 ---');
//# sourceMappingURL=app.js.map