import { HttpService } from './http-service.js';
class SimpsonsService {
    httpService;
    constructor() {
        const baseUrl = 'https://thesimpsonsapi.com/api';
        this.httpService = new HttpService(baseUrl);
    }
    async getAllCharacters() {
        return this.httpService.get('/characters');
    }
    async getCharacterById(id) {
        return this.httpService.getById('/characters', id);
    }
}
export const simpsonsService = new SimpsonsService();
//# sourceMappingURL=simpsons-service.js.map