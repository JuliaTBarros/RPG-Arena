export class InventarioCheioError extends Error {
	constructor() {
		super(
			'🎒 Suas algibeiras estão pesadas e as fivelas prestes a romper! Não há espaço para mais nada, nem mesmo para uma folha de erva medicinal.',
		);
		this.name = 'InventarioCheioError';
	}
}
