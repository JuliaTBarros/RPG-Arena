export class PersonagemMortoError extends Error {
	constructor(nome: string) {
		super(
			`🕯️ O destino de ${nome} já foi selado. Os mortos não respondem mais ao chamado da batalha e repousam no plano espiritual.`,
		);
		this.name = 'PersonagemMortoError';
	}
}
