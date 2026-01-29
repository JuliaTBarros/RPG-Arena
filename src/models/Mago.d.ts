import { Personagem } from './Personagem';
export declare class Mago extends Personagem {
    private _mana;
    private _manaMaxima;
    constructor(nome: string, ataque?: number, defesa?: number);
    get mana(): number;
    set mana(valor: number);
    getNomeRecurso(): string;
    /**
     * Bola de Fogo: Uma explosão arcana devastadora.
     * Custo: 30 de mana. Dano: Triplo do ataque.
     */
    atacar(alvo: Personagem): number;
    /**
     * Meditar: O Mago se conecta com o cosmos para recuperar suas energias.
     * Recupera 25 pontos de mana.
     */
    meditar(): void;
}
//# sourceMappingURL=Mago.d.ts.map