export class InventarioCheioError extends Error {
	constructor() {
		super('O inventário está cheio! Limite máximo de 5 itens atingido.');
		this.name = 'InventarioCheioError';
	}
}
