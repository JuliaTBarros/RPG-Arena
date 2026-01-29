import { Personagem } from './Personagem.js';
export declare class Ladino extends Personagem {
    private _mana;
    private _manaMaxima;
    constructor(nome: string, ataque?: number, defesa?: number);
    get mana(): number;
    set mana(valor: number);
    getNomeRecurso(): string;
    /**
     * Ataque Furtivo: O Ladino desaparece nas sombras e atinge um ponto vital.
     * Custo: 20 de mana. Dano: 2.5x o ataque (ignora parte da defesa).
     */
    ataqueFurtivo(alvo: Personagem): number;
}
//# sourceMappingURL=Ladino.d.ts.map