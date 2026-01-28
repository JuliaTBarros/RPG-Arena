import { Personagem } from './Personagem';

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
			`\n📜 O arauto desenrola um pergaminho antigo e proclama os nomes dos bravos combatentes:`,
		);
		if (this._lutadores.length === 0) {
			console.log('   (O silêncio é absoluto. Não há combatentes na arena...)');
			return;
		}
		this._lutadores.forEach((l, i) =>
			console.log(`   ${i + 1}. ${l.nome} [${l.classe}] - Vida: ${l.vida}`),
		);
	}

	public buscarLutador(nome: string): Personagem {
		const encontrado = this._lutadores.find(
			(l) => l.nome.toLowerCase() === nome.toLowerCase(),
		);
		if (!encontrado) {
			console.log(
				`\n🕯️  As crônicas da Arena não registram nenhum herói chamado "${nome}"... Estaria ele escondido nas brumas do esquecimento?`,
			);
			throw new Error(
				`O campeão "${nome}" não foi encontrado nos registros desta Arena.`,
			);
		}
		return encontrado;
	}

	public batalhar(nome1: string, nome2: string): void {
		const p1 = this.buscarLutador(nome1);
		const p2 = this.buscarLutador(nome2);

		console.log(`\n⚔️  O DUELO É ANUNCIADO: ${p1.nome} VS ${p2.nome} ⚔️`);
		console.log(`--------------------------------------------------`);

		let atacante = p1;
		let defensor = p2;
		let turno = 1;

		while (p1.estaVivo() && p2.estaVivo()) {
			console.log(`\n--- 🌒 RODADA ${turno} ---`);

			try {
				atacante.atacar(defensor);
				console.log(
					`📊 Status de ${defensor.nome}: ${defensor.vida} pontos de vida restantes.`,
				);
			} catch (error: any) {
				console.log(`⚠️  INTERRUPÇÃO MÍSTICA: ${error.message}`);
				break;
			}

			[atacante, defensor] = [defensor, atacante];
			turno++;

			if (p2.estaVivo() && p1.estaVivo()) {
				console.log(`🔄 O ímpeto da batalha muda de mãos...`);
			}
		}

		// Anúncio do Vencedor
		const vencedor = p1.estaVivo() ? p1 : p2;
		console.log(`\n--------------------------------------------------`);
		console.log(`🏆 A PLATEIA RUGE! O combate chegou ao fim!`);
		console.log(
			`🌟 O GRANDE CAMPEÃO É: ${vencedor.nome}, o ${vencedor.classe}!`,
		);
		console.log(`--------------------------------------------------\n`);
	}
}
