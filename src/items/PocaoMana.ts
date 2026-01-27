import type { IItem } from '../interfaces/IItem';
import { Raridade } from '../enums/Raridade';
import { Personagem } from '../models/Personagem';

export class PocaoMana implements IItem {
	public readonly nome: string = 'Poção de Mana';
	public readonly descricao: string =
		'Um elixir azul profundo que restaura o fluxo de energia arcana.';
	public readonly raridade: Raridade = Raridade.Incomum;

	usar(personagem: Personagem): void {
		
		if ('mana' in personagem) {
			const manaAnterior = (personagem as any).mana;
			(personagem as any).mana += 30;

			console.log(
				`🌀 Uma aura azulada envolve ${personagem.nome} enquanto o poder místico flui por suas veias.`,
			);
			console.log(
				`🧪 Energia arcana restaurada! Mana atual: ${(personagem as any).mana}`,
			);
		} else {
			// Texto imersivo para classes sem mana (Guerreiro/Ladino)
			console.log(
				`⚠️ ${personagem.nome} observa o líquido azul brilhar intensamente no frasco, mas a energia se dissipa no ar...`,
			);
			console.log(
				`   O dom das artes místicas não corre pelas veias de um ${personagem.classe}.`,
			);
		}
	}
}
