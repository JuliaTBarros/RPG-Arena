import { Raridade } from '../enums/Raridade';
import type { Personagem } from '../models/Personagem';
export interface IItem {
    nome: string;
    descricao: string;
    raridade: Raridade;
    usar(personagem: Personagem): void;
}
//# sourceMappingURL=IItem.d.ts.map