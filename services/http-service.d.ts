export declare class HttpService {
    private baseUrl;
    constructor(baseUrl: string);
    get<T>(endpoint: string): Promise<T>;
    getById<T>(endpoint: string, id: number | string): Promise<T>;
    post<T>(endpoint: string, body: T): Promise<T>;
    patch<T>(endpoint: string, id: number, body: Partial<T>): Promise<T>;
}
//# sourceMappingURL=http-service.d.ts.map