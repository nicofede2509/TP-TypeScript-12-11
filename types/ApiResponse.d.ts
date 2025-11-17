export type ApiResponse<T> = {
    success: true;
    data: T;
} | {
    success: false;
    error: ApiError;
};
export interface ApiError {
    message: string;
    status?: number;
    timestamp: Date;
}
export declare class ImprovedHttpService {
    private baseUrl;
    constructor(baseUrl: string);
    get<T>(endpoint: string): Promise<ApiResponse<T>>;
}
//# sourceMappingURL=ApiResponse.d.ts.map