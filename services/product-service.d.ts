import type { Product } from '../types/product.js';
declare class ProductService {
    private httpService;
    constructor();
    getAllProducts(): Promise<Product[]>;
    getProductById(id: number): Promise<Product>;
}
export declare const productService: ProductService;
export {};
//# sourceMappingURL=product-service.d.ts.map