export class ManaInsuficienteError extends Error {
	constructor(nome: string) {
		super(`O personagem ${nome} não possui mana suficiente.`);
		this.name = 'ManaInsuficienteError';
	}
}
