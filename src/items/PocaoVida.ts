import type { IItem } from '../interfaces/IItem';
import { Raridade } from '../enums/Raridade';
import { Personagem } from '../models/Personagem';

export class PocaoVida implements IItem {
	public readonly nome: string = 'Poção de Vida';
	public readonly descricao: string =
		'Um frasco com um líquido vermelho efervescente que fecha feridas.';
	public readonly raridade: Raridade = Raridade.Comum;

	usar(personagem: Personagem): void {
		console.log(
			`✨ O líquido vermelho efervescente brilha enquanto é ingerido!`,
		);
		personagem.curar(20);
	}
}
