import type { IItens } from '../interfaces/IItem';
import { ClassePersonagem } from '../enums/ClassePersonagem';

class Personagem {
	private _vida: number;
	private _vidaMaxima: number;
	private inventario: IItens[] = [];

	public readonly nome: string;
	public classe: ClassePersonagem;
	public ataque: number;
	public defesa: number;

	constructor(
		_vida: number,
		_vidaMaxima: number,
		inventario: IItens[],
		nome: string,
		classe: ClassePersonagem,
		ataque: number,
		defesa: number,
	) {
		this._vida = _vida;
		this._vidaMaxima = _vidaMaxima;
		this.inventario = inventario;

		this.nome = nome;
		this.classe = classe;
		this.ataque = ataque;
		this.defesa = defesa;
	}

	get vida(): number {
		return this._vida;
	}

	set vida();
}
