import { Personagem } from './Personagem';
import { ClassePersonagem } from '../enums/ClassePersonagem';
import { ManaInsuficienteError } from '../errors/ManaInsuficienteError';
import { PersonagemMortoError } from '../errors/PersonagemMortoError';

export class Arqueiro extends Personagem {
	private _mana: number;
	private _manaMaxima: number;

	constructor(nome: string, ataque: number = 15, defesa: number = 8) {
		super(nome, ClassePersonagem.Arqueiro, 100, ataque, defesa);
		this._manaMaxima = 50;
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

	public override atacar(alvo: Personagem): number {
		if (!this.estaVivo()) throw new PersonagemMortoError(this.nome);
		if (!alvo.estaVivo()) throw new PersonagemMortoError(alvo.nome);

		let multiplicador = 1;
		const chanceCritico = Math.random();

		console.log(
			`🏹 ${this.nome} tensiona a corda de seu arco e dispara uma flecha sibilante contra ${alvo.nome}!`,
		);

		if (chanceCritico <= 0.3) {
			multiplicador = 2;
			console.log(
				`✨ Acerto Crítico! A flecha atinge um ponto vital com precisão implacável!`,
			);
		}

		const dano = Math.max(0, this.ataque * multiplicador - alvo.defesa);
		alvo.vida -= dano;

		if (dano > 0) {
			console.log(`💥 O impacto perfura as defesas, causando ${dano} de dano.`);
		} else {
			console.log(
				`🛡️  ${alvo.nome} consegue se esquivar do projétil no último milésimo!`,
			);
		}

		return dano;
	}

	public flechaPrecisa(alvo: Personagem): number {
		if (!this.estaVivo()) throw new PersonagemMortoError(this.nome);
		if (!alvo.estaVivo()) throw new PersonagemMortoError(alvo.nome);

		const custo = 15;
		if (this._mana < custo) {
			throw new ManaInsuficienteError(this);
		}

		this.mana -= custo;
		const danoBase = this.ataque * 2;
		const danoFinal = Math.max(0, danoBase - alvo.defesa);

		console.log(
			`🎯 ${this.nome} fecha um dos olhos, controla a respiração e solta uma Flecha Precisa!`,
		);
		alvo.vida -= danoFinal;

		if (danoFinal > 0) {
			console.log(
				`💥 A flecha atravessa o ar e atinge o alvo em cheio, infligindo ${danoFinal} de dano.`,
			);
		} else {
			console.log(
				`🛡️  Incrível! ${alvo.nome} bloqueou a flecha com seu equipamento.`,
			);
		}

		console.log(`✨ Energia restante: ${this._mana}`);
		return danoFinal;
	}
}
