export class InventarioCheioError extends Error {
	constructor() {
		super(
			'🎒 Suas bolsas estão pesadas e as fivelas prestes a romper! Não há espaço para mais nem mesmo uma folha de erva medicinal.',
		);
		this.name = 'InventarioCheioError';
	}
}
