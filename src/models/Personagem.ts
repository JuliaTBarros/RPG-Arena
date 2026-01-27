import type { IItem } from '../interfaces/IItem';
import { ClassePersonagem } from '../enums/ClassePersonagem';
import { PersonagemMortoError } from '../errors/PersonagemMortoError';
import { InventarioCheioError } from '../errors/InventarioCheioError';

export abstract class Personagem {
	private _vida: number;
	private _vidaMaxima: number;
	private _inventario: IItem[] = []; // Maximo 5 itens

	public readonly nome: string;
	public classe: ClassePersonagem;
	public ataque: number;
	public defesa: number;

	constructor(
		_vida: number,
		_vidaMaxima: number,
		nome: string,
		classe: ClassePersonagem,
		ataque: number,
		defesa: number,
	) {
		this._vidaMaxima = _vida;
		this._vida = this._vidaMaxima;

		this.nome = nome;
		this.classe = classe;
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
		return dano;
	}

	curar(quantidade: number): void {
		this._vida += quantidade;
	}

	adicionarItem(item: IItem): void {
		if (this._inventario.length >= 5) {
			throw new InventarioCheioError();
		}

		this._inventario.push(item);
	}

	usarItem(indice: number): void {
		const item = this._inventario[indice];

		if (item) {
			item.usar();
			this._inventario.splice(indice, 1);
		} else {
			console.log('Item não encontrado no inventário.');
		}
	}
}
