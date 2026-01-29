import type { IItem } from '../interfaces/IItem.js';
import { Raridade } from '../enums/Raridade.js';
import { Personagem } from '../models/Personagem.js';

export class PocaoMana implements IItem {
	public readonly nome: string = 'Poção de Mana';
	public readonly descricao: string =
		'Um elixir azul profundo que restaura o fluxo de energia arcana.';
	public readonly raridade: Raridade = Raridade.Incomum;

	usar(personagem: Personagem): void {
		if ('mana' in personagem) {
			const pComMana = personagem as Personagem & { mana: number };
			pComMana.mana += 30;

			const recurso = personagem.getNomeRecurso();

			console.log(
				`🌀 Uma essência azulada envolve ${personagem.nome}, restaurando seu fluxo de ${recurso}!`,
			);
			console.log(`🧪 ${recurso} atual: ${pComMana.mana}`);
		} else {
			console.log(
				`⚠️ ${personagem.nome} observa o líquido azul brilhar no frasco, mas a energia se dissipa...`,
			);
			console.log(
				`   O vigor físico de um ${personagem.classe} não encontra ressonância com esta essência mística.`,
			);
		}
	}
}
