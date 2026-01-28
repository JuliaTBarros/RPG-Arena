export class ManaInsuficienteError extends Error {
	constructor(nome: string) {
		super(
			`🌀 ${nome} tateia o vazio! Suas reservas de energia estão secas e a ação falhou.`,
		);
		this.name = 'ManaInsuficienteError';
	}
}
