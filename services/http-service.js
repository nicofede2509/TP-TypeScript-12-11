export class HttpService {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Error en la petición:', error);
            throw error;
        }
    }
    async getById(endpoint, id) {
        return this.get(`${endpoint}/${id}`);
    }
    async post(endpoint, body) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error('Error en POST:', error);
            throw error;
        }
    }
    async patch(endpoint, id, body) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error('Error en PATCH:', error);
            throw error;
        }
    }
}
//# sourceMappingURL=http-service.js.map