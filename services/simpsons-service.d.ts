import type { Character } from '../types/character.ts';
declare class SimpsonsService {
    private httpService;
    constructor();
    getAllCharacters(): Promise<{
        results: Character[];
    }>;
    getCharacterById(id: number): Promise<Character>;
}
export declare const simpsonsService: SimpsonsService;
export {};
//# sourceMappingURL=simpsons-service.d.ts.map