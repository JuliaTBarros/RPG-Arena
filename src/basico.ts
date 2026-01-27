// src/basico.ts
// TypeScript infere o tipo automaticamente
let nomeHeroi = 'Aragorn';
let nivel = 1;
let estaVivo = true;
// Ou podemos declarar explicitamente
let pontosDeVida: number = 100;
console.log(`Bem-vindo ao RPG Arena, ${nomeHeroi}!`);
console.log(`Nivel: ${nivel} | Vida: ${pontosDeVida}`);
