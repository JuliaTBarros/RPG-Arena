import { Personagem } from './Personagem';
export declare class Arena {
    private _lutadores;
    adicionarLutador(lutador: Personagem): void;
    getClassesLutadores(): string[];
    buscarLutadorPorClasse(classe: string): Personagem;
    listarLutadores(): void;
    batalhar(classe1: string, classe2: string): void;
    private menuEscolhaItem;
    private executarHabilidade;
}
//# sourceMappingURL=Arena.d.ts.map