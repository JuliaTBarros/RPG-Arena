import { Raridade } from '../enums/Raridade.js';
import type { Personagem } from '../models/Personagem.js';
export interface IItem {
    nome: string;
    descricao: string;
    raridade: Raridade;
    usar(personagem: Personagem): void;
}
//# sourceMappingURL=IItem.d.ts.map