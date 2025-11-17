import { HttpService } from './http-service.js';
class ProductService {
    httpService;
    constructor() {
        const baseUrl = 'https://fakestoreapi.com';
        this.httpService = new HttpService(baseUrl);
    }
    async getAllProducts() {
        return this.httpService.get('/products');
    }
    async getProductById(id) {
        return this.httpService.getById('/products', id);
    }
}
export const productService = new ProductService();
//# sourceMappingURL=product-service.js.map