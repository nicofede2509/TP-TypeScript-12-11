import type { Pokemon } from '../types/pokemon.js';
declare class PokemonService {
    private httpService;
    constructor();
    getPokemonByName(name: string): Promise<Pokemon>;
}
export declare const pokemonService: PokemonService;
export {};
//# sourceMappingURL=pokemon-service.d.ts.map