import type { IItem } from '../interfaces/IItem';
import { Raridade } from '../enums/Raridade';
import { Personagem } from '../models/Personagem';
export declare class PocaoVida implements IItem {
    readonly nome: string;
    readonly descricao: string;
    readonly raridade: Raridade;
    usar(personagem: Personagem): void;
}
//# sourceMappingURL=PocaoVida.d.ts.map