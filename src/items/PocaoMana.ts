import type { IItem } from '../interfaces/IItem';
import { Raridade } from '../enums/Raridade';
import { Personagem } from '../models/Personagem';
import { ClassePersonagem } from '../enums/ClassePersonagem';

export class PocaoMana implements IItem {
	public readonly nome: string = 'Poção de Mana';
	public readonly descricao: string =
		'Um elixir azul profundo que restaura o fluxo de energia arcana.';
	public readonly raridade: Raridade = Raridade.Incomum;

	usar(personagem: Personagem): void {
		if ('mana' in personagem) {
			(personagem as any).mana += 30;

			const recurso =
				personagem.classe === ClassePersonagem.Ladino ? 'Energia' : 'Mana';

			console.log(
				`🌀 Uma essência azulada envolve ${personagem.nome}, restaurando seu fluxo de ${recurso}!`,
			);
			console.log(`🧪 ${recurso} atual: ${(personagem as any).mana}`);
		} else {
			console.log(
				`⚠️ ${personagem.nome} observa o líquido azul brilhar intensamente no frasco, mas a energia se dissipa no ar...`,
			);
			console.log(
				`   O caminho do vigor físico puro de um ${personagem.classe} não requer este tipo de essência.`,
			);
		}
	}
}
