export class PersonagemMortoError extends Error {
	constructor(nomePersonagem: string) {
		super(`O personagem ${nomePersonagem} está morto.`);
		this.name = 'PersonagemMortoError';
	}
}
