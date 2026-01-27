export class PersonagemMortoError extends Error {
	constructor(nome: string) {
		super(
			`🕯️ A alma de ${nome} já partiu para o plano espiritual. Os mortos não podem empunhar armas ou sofrer mais dor.`,
		);
		this.name = 'PersonagemMortoError';
	}
}
