import type { IItem } from '../interfaces/IItem';
import { ClassePersonagem } from '../enums/ClassePersonagem';
import { PersonagemMortoError } from '../errors/PersonagemMortoError';
import { InventarioCheioError } from '../errors/InventarioCheioError';

export abstract class Personagem {
	private _vida: number;
	private _vidaMaxima: number;
	private _inventario: IItem[] = [];

	public readonly nome: string;
	public classe: ClassePersonagem;
	public ataque: number;
	public defesa: number;

	constructor(
		nome: string,
		classe: ClassePersonagem,
		vida: number,
		ataque: number,
		defesa: number,
	) {
		this.nome = nome;
		this.classe = classe;
		this._vidaMaxima = vida;
		this._vida = vida;
		this.ataque = ataque;
		this.defesa = defesa;
	}

	get vida(): number {
		return this._vida;
	}

	set vida(valor: number) {
		if (valor > this._vidaMaxima) {
			this._vida = this._vidaMaxima;
		} else if (valor < 0) {
			this._vida = 0;
		} else {
			this._vida = valor;
		}
	}

	estaVivo(): boolean {
		return this._vida > 0;
	}

	atacar(alvo: Personagem): number {
		if (!this.estaVivo()) throw new PersonagemMortoError(this.nome);
		if (!alvo.estaVivo()) throw new PersonagemMortoError(alvo.nome);

		const dano = Math.max(0, this.ataque - alvo.defesa);
		alvo.vida -= dano;

		console.log(
			`⚔️ ${this.nome} ergue sua arma e desfere um golpe contra ${alvo.nome}!`,
		);

		if (dano > 0) {
			console.log(
				`💥 O ataque atinge o alvo, infligindo ${dano} pontos de sofrimento.`,
			);
		} else {
			console.log(
				`🛡️ ${alvo.nome} consegue bloquear o impacto! O golpe não surtiu efeito.`,
			);
		}

		return dano;
	}

	curar(quantidade: number): void {
		const vidaAnterior = this.vida;
		this.vida += quantidade;
		const curaReal = this.vida - vidaAnterior;

		if (curaReal > 0) {
			console.log(
				`❤️  ${this.nome} recuperou ${curaReal} pontos de vitalidade.`,
			);
			console.log(`   [Vida Atual: ${this.vida}]`);
		} else {
			console.log(
				`✨ ${this.nome} já está em sua plenitude física e não pode ser mais curado.`,
			);
		}
	}

	adicionarItem(item: IItem): void {
		if (this._inventario.length >= 5) {
			throw new InventarioCheioError();
		}
		this._inventario.push(item);
		console.log(
			`📦 ${this.nome} encontrou [${item.nome}] e o guardou com cuidado em sua bolsa.`,
		);
	}

	usarItem(indice: number): void {
		const item = this._inventario[indice];
		if (item) {
			console.log(
				`🎒 ${this.nome} abre sua bolsa e decide utilizar ${item.nome}!`,
			);
			item.usar(this);
			this._inventario.splice(indice, 1);
		} else {
			console.log(
				`❌ ${this.nome} tateia seu inventário, mas não encontra nada naquela posição.`,
			);
			throw new Error('Espaço de inventário vazio.');
		}
	}
}
