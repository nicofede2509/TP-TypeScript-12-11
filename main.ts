import { productService } from './services/product-service.js';
import type { Product } from './types/product.js';

async function mostrarProductos<T>(): Promise<void> {
 try {
 console.log('Obteniendo productos...');
 
 // TypeScript sabe que products es Product[]
 const products: Product[] = await productService.getAllProducts();
 
 console.log(`Se encontraron ${products.length} productos`);
 
 // El autocompletado funciona perfectamente
 products.forEach((product: Product) => {
 console.log(`
 ID: ${product.id}
 Nombre: ${product.title}
 Precio: $${product.price}
 Categoría: ${product.category}
 Rating: ${product.rating.rate} (${product.rating.count} valoraciones)
 `);
 });
 
 } catch (error) {
 console.error('Error al cargar productos:', error);
 }
}

async function mostrarProductoIndividual(id: number): Promise<void> {
 try {
 // TypeScript sabe que product es Product
 const product: Product = await productService.getProductById(id);
 
 console.log('Detalles del producto:', {
 nombre: product.title,
 precio: product.price,
 descripcion: product.description
 });
 
 } catch (error) {
 console.error(`Error al cargar producto ${id}:`, error);
 }
}

// Ejecutar
mostrarProductos();
mostrarProductoIndividual(1);