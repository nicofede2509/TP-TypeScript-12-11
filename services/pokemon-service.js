import { HttpService } from './http-service.js';
class PokemonService {
    httpService;
    constructor() {
        const baseUrl = 'https://pokeapi.co/api/v2';
        this.httpService = new HttpService(baseUrl);
    }
    async getPokemonByName(name) {
        return this.httpService.getById('/pokemon', name);
    }
}
export const pokemonService = new PokemonService();
//# sourceMappingURL=pokemon-service.js.map