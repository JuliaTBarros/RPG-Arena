import * as readline from 'readline-sync';
import { Personagem } from './Personagem';
import { Guerreiro } from './Guerreiro';
import { Mago } from './Mago';
import { Arqueiro } from './Arqueiro';
import { Ladino } from './Ladino';

export class Arena {
	private _lutadores: Personagem[] = [];

	public adicionarLutador(lutador: Personagem): void {
		this._lutadores.push(lutador);
	}

	// Retorna os nomes (que serão os nomes das classes) para o menu inicial
	public getNomesLutadores(): string[] {
		return this._lutadores.map((l) => l.nome);
	}

	public buscarLutador(nome: string): Personagem {
		const encontrado = this._lutadores.find((l) => l.nome === nome);
		if (!encontrado) throw new Error('Lutador não encontrado.');
		return encontrado;
	}

	public batalhar(nome1: string, nome2: string): void {
		const p1 = this.buscarLutador(nome1);
		const p2 = this.buscarLutador(nome2);

		let atacante = p1;
		let defensor = p2;

		console.log(`\n⚔️  O DUELO COMEÇOU: ${p1.nome} VS ${p2.nome} ⚔️`);

		while (p1.estaVivo() && p2.estaVivo()) {
			console.log(`\n--- 🌒 TURNO DE: ${atacante.nome} ---`);
			console.log(`❤️  Vida: ${atacante.vida} | 🛡️  Inimigo: ${defensor.vida}`);

			const acoes = [
				'Ataque Básico',
				'Habilidade Especial',
				'Usar Item',
				'Passar Vez',
			];
			const escolha = readline.keyInSelect(acoes, 'Escolha sua acao:');

			if (escolha === -1) {
				console.log('🏳️ O lutador fugiu da arena! Duelo cancelado.');
				return;
			}

			try {
				let acaoFinalizada = true;

				switch (escolha) {
					case 0: // Ataque Básico
						atacante.atacar(defensor);
						break;
					case 1: // Habilidade Especial
						this.executarHabilidade(atacante, defensor);
						break;
					case 2: // Escolha de Item Interativa
						acaoFinalizada = this.menuEscolhaItem(atacante);
						break;
					case 3:
						console.log(`💤 ${atacante.nome} aguarda o momento certo.`);
						break;
				}

				// Se a ação falhou (ex: cancelou o item), não muda o turno
				if (acaoFinalizada) {
					[atacante, defensor] = [defensor, atacante];
				}
			} catch (error: any) {
				console.log(`\n⚠️  ${error.message}`);
				console.log(`   Tente outra ação para este turno.`);
			}
		}

		const vencedor = p1.estaVivo() ? p1 : p2;
		console.log(`\n🏆 O GRANDE CAMPEÃO É: ${vencedor.nome}!`);
	}

	private menuEscolhaItem(personagem: Personagem): boolean {
		const itens = personagem.inventario.map((i) => i.nome);
		if (itens.length === 0) {
			console.log('🎒 Sua bolsa está vazia!');
			return false; // Não finaliza a ação, permite escolher outra
		}

		const itemIdx = readline.keyInSelect(itens, 'Qual item deseja usar?');
		if (itemIdx === -1) return false; // Voltou do menu

		personagem.usarItem(itemIdx);
		return true;
	}

	private executarHabilidade(at: Personagem, df: Personagem): void {
		if (at instanceof Guerreiro) at.golpeBrutal(df);
		else if (at instanceof Mago) at.bolaDeFogo(df);
		else if (at instanceof Arqueiro) at.flechaPrecisa(df);
		else if (at instanceof Ladino) at.ataqueFurtivo(df);
	}
}
