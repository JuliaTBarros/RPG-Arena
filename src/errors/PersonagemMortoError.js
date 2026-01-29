"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagemMortoError = void 0;
class PersonagemMortoError extends Error {
    constructor(nome) {
        super(`🕯️ O destino de ${nome} já foi selado. Os mortos não respondem mais ao chamado da batalha e repousam no plano espiritual.`);
        this.name = 'PersonagemMortoError';
    }
}
exports.PersonagemMortoError = PersonagemMortoError;
//# sourceMappingURL=PersonagemMortoError.js.map