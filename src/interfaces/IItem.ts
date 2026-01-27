import { Raridade } from '../enums/Raridade';

export interface IItem {
	nome: string;
	descricao: string;
	raridade: Raridade;
	usar(): void;
}
