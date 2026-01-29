"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManaInsuficienteError = void 0;
class ManaInsuficienteError extends Error {
    constructor(personagem) {
        const recurso = personagem.getNomeRecurso();
        super(`🌀 ${personagem.nome} tateia o vazio! Suas reservas de ${recurso} estão secas e a magia se desfaz no ar.`);
        this.name = 'ManaInsuficienteError';
    }
}
exports.ManaInsuficienteError = ManaInsuficienteError;
//# sourceMappingURL=ManaInsuficienteError.js.map