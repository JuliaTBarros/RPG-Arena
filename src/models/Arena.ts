import type { Personagem } from './Personagem';

export class Arena {
	private _lutadores: Personagem[] = [];

	public adicionarLutador(lutador: Personagem): void {
		this._lutadores.push(lutador);
		console.log(
			`\n🎺 As trombetas ecoam! ${lutador.nome}, o ${lutador.classe}, adentra os portões da Arena sob os gritos da multidão!`,
		);
	}

	public listarLutadores(): void {
		console.log(
			`\n📜 O arauto desenrola um pergaminho antigo e proclama os nomes dos bravos lutadores:`,
		);

		if (this._lutadores.length === 0) {
			console.log('   (O silêncio é absoluto. Não há combatentes na arena...)');
			return;
		}

		this._lutadores.forEach((lutador, index) => {
			console.log(
				`   ${index + 1}. ${lutador.nome} [${lutador.classe}] - Vitalidade: ${lutador.vida}`,
			);
		});
	}

	public buscarLutador(nome: string): Personagem {
		const lutadorEncontrado = this._lutadores.find(
			(l) => l.nome.toLowerCase() === nome.toLowerCase(),
		);

		if (!lutadorEncontrado) {
			console.log(
				`\n🕯️  As crônicas da Arena não registram nenhum herói chamado "${nome}"... Estaria ele escondido nas brumas do esquecimento?`,
			);
			throw new Error(
				`O campeão "${nome}" não foi encontrado nos registros desta Arena.`,
			);
		}

		return lutadorEncontrado;
	}
}
