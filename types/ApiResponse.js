export class ImprovedHttpService {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);
            if (!response.ok) {
                return {
                    success: false,
                    error: {
                        message: `Error HTTP: ${response.statusText}`,
                        status: response.status,
                        timestamp: new Date(),
                    },
                };
            }
            const data = await response.json();
            return { success: true, data };
        }
        catch (error) {
            return {
                success: false,
                error: {
                    message: error instanceof Error ? error.message : 'Error desconocido',
                    timestamp: new Date(),
                },
            };
        }
    }
}
//# sourceMappingURL=ApiResponse.js.map