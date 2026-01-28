import { ClassePersonagem } from '../enums/ClassePersonagem';
import { PersonagemMortoError } from '../errors/PersonagemMortoError';
import { Personagem } from './Personagem';

export class Guerreiro extends Personagem {
	constructor(nome: string, defesa: number = 10) {
		// Ordem: nome, classe, vida, ataque, defesa
		super(nome, ClassePersonagem.Guerreiro, 150, 18, defesa);
	}

	public golpeBrutal(alvo: Personagem): number {
		if (!this.estaVivo()) throw new PersonagemMortoError(this.nome);
		if (!alvo.estaVivo()) throw new PersonagemMortoError(alvo.nome);

		const danoBase = this.ataque * 2;
		const danoFinal = Math.max(0, danoBase - alvo.defesa);

		console.log(
			`🛡️  ${this.nome} concentra toda sua fúria em um Golpe Brutal!`,
		);

		alvo.vida -= danoFinal;

		if (danoFinal > 0) {
			console.log(
				`💥 O impacto é avassalador! ${alvo.nome} cambaleia ao sofrer ${danoFinal} de dano.`,
			);
		} else {
			console.log(
				`🛡️  Inacreditável! Mesmo com tal força, ${alvo.nome} permaneceu inabalável.`,
			);
		}

		return danoFinal;
	}
}
