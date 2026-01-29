import { Personagem } from './Personagem';
import { ClassePersonagem } from '../enums/ClassePersonagem';
import { ManaInsuficienteError } from '../errors/ManaInsuficienteError';
import { PersonagemMortoError } from '../errors/PersonagemMortoError';

export class Mago extends Personagem {
	private _mana: number;
	private _manaMaxima: number;

	constructor(nome: string, ataque: number = 12, defesa: number = 5) {
		super(nome, ClassePersonagem.Mago, 80, ataque, defesa);
		this._manaMaxima = 100;
		this._mana = this._manaMaxima;
	}

	// Getters e Setters para gestão de mana
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
		return 'Mana';
	}

	/**
	 * Bola de Fogo: Uma explosão arcana devastadora.
	 * Custo: 30 de mana. Dano: Triplo do ataque.
	 */
	public override atacar(alvo: Personagem): number {
		if (!this.estaVivo()) throw new PersonagemMortoError(this.nome);
		if (!alvo.estaVivo()) throw new PersonagemMortoError(alvo.nome);

		const custo = 30;
		if (this.mana < custo) {
			// Usando getter
			throw new ManaInsuficienteError(this);
		}

		this.mana -= custo;

		const danoBase = this.ataque * 3;
		const danoFinal = Math.max(0, danoBase - alvo.defesa);

		console.log(
			`🔥 ${this.nome} entoa cânticos antigos e projeta uma imensa Bola de Fogo!`,
		);
		alvo.vida -= danoFinal;

		if (danoFinal > 0) {
			console.log(
				`💥 As chamas consomem ${alvo.nome}, causando ${danoFinal} de dano ardente.`,
			);
		} else {
			console.log(
				`🛡️  Incrível! ${alvo.nome} resistiu ao calor intenso do feitiço.`,
			);
		}

		console.log(`✨ Energia arcana restante: ${this.mana}`);
		return danoFinal;
	}

	/**
	 * Meditar: O Mago se conecta com o cosmos para recuperar suas energias.
	 * Recupera 25 pontos de mana.
	 */
	public meditar(): void {
		if (!this.estaVivo()) throw new PersonagemMortoError(this.nome);

		const recuperacao = 25;
		this.mana += recuperacao;

		console.log(
			`🧘 ${this.nome} fecha os olhos e entra em um estado de transe profundo...`,
		);
		console.log(
			`🌀 A energia mística do ambiente é absorvida! (+${recuperacao} de mana).`,
		);
		console.log(`✨ Mana atual: ${this.mana}`);
	}
}
