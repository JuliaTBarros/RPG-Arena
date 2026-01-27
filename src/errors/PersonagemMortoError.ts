export class PersonagemMortoError extends Error {
	constructor(nome: string) {
		super(`O personagem ${nome} está morto e não pode realizar esta ação.`);
		this.name = 'PersonagemMortoError';
	}
}
