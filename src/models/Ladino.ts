import { Personagem } from './Personagem.js';
import { ClassePersonagem } from '../enums/ClassePersonagem.js';
import { PersonagemMortoError } from '../errors/PersonagemMortoError.js';
import { ManaInsuficienteError } from '../errors/ManaInsuficienteError.js';

export class Ladino extends Personagem {
	private _mana: number;
	private _manaMaxima: number;

	constructor(nome: string, ataque: number = 14, defesa: number = 7) {
		super(nome, ClassePersonagem.Ladino, 90, ataque, defesa);
		this._manaMaxima = 40;
		this._mana = this._manaMaxima;
	}

	get mana(): number {
		return this._mana;
	}

	set mana(valor: number) {
		if (valor > this._manaMaxima) {
			this._mana = this._manaMaxima;
		} else if (valor < 0) {
			this._mana = 0;
		} else {
			this._mana = valor;
		}
	}

	public override getNomeRecurso(): string {
		return 'Energia';
	}

	/**
	 * Ataque Furtivo: O Ladino desaparece nas sombras e atinge um ponto vital.
	 * Custo: 20 de mana. Dano: 2.5x o ataque (ignora parte da defesa).
	 */
	public ataqueFurtivo(alvo: Personagem): number {
		if (!this.estaVivo()) throw new PersonagemMortoError(this.nome);
		if (!alvo.estaVivo()) throw new PersonagemMortoError(alvo.nome);

		const custo = 20;
		if (this._mana < custo) {
			throw new ManaInsuficienteError(this);
		}

		this.mana -= custo;

		const danoBase = this.ataque * 2.5;
		const defesaReduzida = alvo.defesa / 2;
		const danoFinal = Math.max(0, Math.floor(danoBase - defesaReduzida));

		console.log(
			`👤 ${this.nome} se mistura às sombras e surge instantaneamente atrás de ${alvo.nome}!`,
		);
		console.log(`🗡️  Um golpe preciso de adaga busca o ponto mais vulnerável.`);

		alvo.vida -= danoFinal;

		if (danoFinal > 0) {
			console.log(
				`💥 Sangue jorra! O ataque furtivo causou ${danoFinal} de dano crítico.`,
			);
		} else {
			console.log(
				`🛡️  ${alvo.nome} sentiu um calafrio e se moveu no último segundo, evitando o pior.`,
			);
		}

		console.log(`✨ Energia restante: ${this._mana}`);
		return danoFinal;
	}
}
