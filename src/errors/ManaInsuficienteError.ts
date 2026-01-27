export class ManaInsuficienteError extends Error {
	constructor(ManaAtual: number, ManaNecessaria: number) {
		super(
			`Mana insuficiente. \nMana Atual: ${ManaAtual} \nMana Necessária: ${ManaNecessaria}`,
		);
		this.name = 'ManaInsuficienteError';
	}
}
