import { Raridade } from '../enums/Raridade';
export interface IItens {
	nome: string;
	descição: string;
    raridade: Raridade;
    usar(): void;
}
