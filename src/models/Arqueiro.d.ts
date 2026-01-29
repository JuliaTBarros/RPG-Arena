import { Personagem } from './Personagem';
export declare class Arqueiro extends Personagem {
    private _mana;
    private _manaMaxima;
    constructor(nome: string, ataque?: number, defesa?: number);
    get mana(): number;
    set mana(valor: number);
    getNomeRecurso(): string;
    atacar(alvo: Personagem): number;
    flechaPrecisa(alvo: Personagem): number;
}
//# sourceMappingURL=Arqueiro.d.ts.map