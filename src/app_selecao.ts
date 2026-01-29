// 🏰 Dados dos Heróis para o Grimório Visual
const dadosHerois = [
	{
		classe: 'Guerreiro',
		src: '../assets/guerreiro.png',
		desc: '🛡️ Muralha de ferro. Defesa impenetrável e golpes devastadores.',
	},
	{
		classe: 'Mago',
		src: '../assets/mago.png',
		desc: '🔥 Mestre arcano. Conjura o caos elemental sobre seus inimigos.',
	},
	{
		classe: 'Arqueiro',
		src: '../assets/arqueiro.png',
		desc: '🎯 Olhos de águia. Suas flechas encontram frestas em qualquer armadura.',
	},
	{
		classe: 'Ladino',
		src: '../assets/ladino.png',
		desc: '🔪 Sombra mortal. Especialista em ataques rápidos e letais.',
	},
];

// 📜 Referências da Interface
const containerCards = document.getElementById(
	'grimorio-herois',
) as HTMLDivElement;
const btnIniciar = document.getElementById(
	'btn-iniciar-duelo',
) as HTMLButtonElement;

const hiddenP1 = document.getElementById('hidden-p1') as HTMLInputElement;
const hiddenP2 = document.getElementById('hidden-p2') as HTMLInputElement;
const nomeP1Display = document.getElementById('nome-p1') as HTMLElement;
const nomeP2Display = document.getElementById('nome-p2') as HTMLElement;

// Estado da Seleção
let selecaoP1: string | null = null;
let selecaoP2: string | null = null;

// --- FUNÇÕES AUXILIARES ---

/**
 * Atualiza a interface visual baseada no estado atual da seleção
 */
function atualizarInterface() {
	// 1. Limpar estilos dos cards
	document.querySelectorAll('.card-heroi').forEach((card) => {
		card.classList.remove('p1-ativo', 'p2-ativo');
	});

	// 2. Aplicar estilos aos selecionados
	if (selecaoP1)
		document.getElementById(`card-${selecaoP1}`)?.classList.add('p1-ativo');
	if (selecaoP2)
		document.getElementById(`card-${selecaoP2}`)?.classList.add('p2-ativo');

	// 3. Atualizar textos do painel inferior
	nomeP1Display.textContent = selecaoP1 || '---';
	nomeP2Display.textContent = selecaoP2 || '---';
	hiddenP1.value = selecaoP1 || '';
	hiddenP2.value = selecaoP2 || '';

	// 4. Habilitar botão apenas se ambos estiverem selecionados e forem diferentes
	btnIniciar.disabled = !(selecaoP1 && selecaoP2 && selecaoP1 !== selecaoP2);
}

/**
 * Lógica de clique no card
 */
function manipularCliqueCard(classeClicada: string) {
	if (selecaoP1 === classeClicada) {
		// Deselecionar P1 se clicar nele mesmo
		selecaoP1 = null;
	} else if (selecaoP2 === classeClicada) {
		// Deselecionar P2 se clicar nele mesmo
		selecaoP2 = null;
	} else if (!selecaoP1) {
		// Se P1 está livre, assume P1
		selecaoP1 = classeClicada;
	} else {
		// Se P1 está ocupado, assume P2 (substituindo se necessário)
		selecaoP2 = classeClicada;
	}
	atualizarInterface();
}

// --- INICIALIZAÇÃO ---

// 🏗️ Gerar os Cards Visualmente
dadosHerois.forEach((heroi) => {
	const card = document.createElement('div');
	card.className = 'card-heroi';
	// Usamos o ID para facilitar a busca depois na função atualizarInterface
	card.id = `card-${heroi.classe}`;

	card.innerHTML = `
        <div class="card-imagem">
            <img src="${heroi.src}" alt="${heroi.classe}">
        </div>
        <div class="card-info">
            <h4>${heroi.classe}</h4>
            <p>${heroi.desc}</p>
        </div>
    `;

	// Adicionar evento de clique
	card.addEventListener('click', () => manipularCliqueCard(heroi.classe));

	containerCards.appendChild(card);
});

// ⚔️ Sancionar Duelo e Navegar
btnIniciar.addEventListener('click', () => {
	if (!hiddenP1.value || !hiddenP2.value || hiddenP1.value === hiddenP2.value)
		return;

	// Guardar a escolha no vínculo místico (sessionStorage)
	sessionStorage.setItem('heroi_p1', hiddenP1.value);
	sessionStorage.setItem('heroi_p2', hiddenP2.value);

	// Partir para o campo de batalha
	window.location.href = 'batalha.html';
});
