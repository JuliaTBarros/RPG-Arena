import type { IItem } from '../interfaces/IItem.js';
import { Raridade } from '../enums/Raridade.js';
import { Personagem } from '../models/Personagem.js';
export declare class PocaoVida implements IItem {
    readonly nome: string;
    readonly descricao: string;
    readonly raridade: Raridade;
    usar(personagem: Personagem): void;
}
//# sourceMappingURL=PocaoVida.d.ts.map