import { Personagem } from './Personagem.js';
export declare class Arena {
    private _lutadores;
    private _atacante;
    private _defensor;
    adicionarLutador(lutador: Personagem): void;
    getClassesLutadores(): string[];
    buscarLutadorPorClasse(classe: string): Personagem;
    listarLutadores(): void;
    /**
     * Inicia o duelo com os textos épicos originais.
     */
    prepararDuelo(classe1: string, classe2: string): void;
    /**
     * Processa a ação mantendo as mensagens de erro e interações.
     */
    executarTurno(acao: 'atacar' | 'especial' | 'item' | 'passar', itemIdx?: number): void;
    private exibirStatusTurno;
    private alternarTurno;
    private verificarFimDeJogo;
    private executarHabilidade;
}
//# sourceMappingURL=Arena.d.ts.map