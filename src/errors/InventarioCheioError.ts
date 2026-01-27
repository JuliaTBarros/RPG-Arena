export class InventarioCheioError extends Error {
	constructor(nomeItem: string) {
		super(
			`O inventário está cheio! Não é possível adicionar o item: ${nomeItem}`,
		);
		this.name = 'InventarioCheioError';
	}
}
