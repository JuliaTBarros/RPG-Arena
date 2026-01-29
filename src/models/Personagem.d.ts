import type { IItem } from '../interfaces/IItem.js';
import { ClassePersonagem } from '../enums/ClassePersonagem.js';
export declare abstract class Personagem {
    private _vida;
    private _vidaMaxima;
    private _inventario;
    readonly nome: string;
    classe: ClassePersonagem;
    ataque: number;
    defesa: number;
    constructor(nome: string, classe: ClassePersonagem, vida: number, ataque: number, defesa: number);
    get inventario(): IItem[];
    get vida(): number;
    set vida(valor: number);
    getNomeRecurso(): string;
    estaVivo(): boolean;
    atacar(alvo: Personagem): number;
    curar(quantidade: number): void;
    adicionarItem(item: IItem): void;
    usarItem(indice: number): void;
}
//# sourceMappingURL=Personagem.d.ts.map