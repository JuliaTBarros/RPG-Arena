import type { IItem } from '../interfaces/IItem';
import { Raridade } from '../enums/Raridade';
import { Personagem } from '../models/Personagem';

export class PocaoMana implements IItem {
	public readonly nome: string = 'Poção de Mana';
	public readonly descricao: string =
		'Um elixir azul profundo que restaura o fluxo de energia interna.';
	public readonly raridade: Raridade = Raridade.Incomum;

	usar(personagem: Personagem): void {
		// Verifica se o personagem possui mana ou energia (Mago, Arqueiro ou Ladino)
		if ('mana' in personagem) {
			(personagem as any).mana += 30; // O setter cuida de não ultrapassar o máximo

			console.log(
				`🌀 Uma essência revigorante flui pelas veias de ${personagem.nome}, restaurando suas capacidades!`,
			);
			console.log(`🧪 Mana atual: ${(personagem as any).mana}`);
		} else {
			// Texto para classes que realmente não possuem barra de recurso (ex: Guerreiro)
			console.log(
				`⚠️ ${personagem.nome} observa o líquido azul brilhar intensamente, mas a energia não encontra receptáculo...`,
			);
			console.log(
				`   O caminho do vigor físico puro de um ${personagem.classe} não requer este tipo de essência.`,
			);
		}
	}
}
