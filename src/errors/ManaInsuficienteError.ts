export class ManaInsuficienteError extends Error {
	constructor(nome: string) {
		super(
			`🌀 ${nome} tateia o vazio! Os ventos arcanos não sopram a seu favor e sua reserva de mana está seca.`,
		);
		this.name = 'ManaInsuficienteError';
	}
}
