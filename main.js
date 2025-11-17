import { productService } from './services/product-service.js';
async function mostrarProductos() {
    try {
        console.log('Obteniendo productos...');
        // TypeScript sabe que products es Product[]
        const products = await productService.getAllProducts();
        console.log(`Se encontraron ${products.length} productos`);
        // El autocompletado funciona perfectamente
        products.forEach((product) => {
            console.log(`
 ID: ${product.id}
 Nombre: ${product.title}
 Precio: $${product.price}
 Categoría: ${product.category}
 Rating: ${product.rating.rate} (${product.rating.count} valoraciones)
 `);
        });
    }
    catch (error) {
        console.error('Error al cargar productos:', error);
    }
}
async function mostrarProductoIndividual(id) {
    try {
        // TypeScript sabe que product es Product
        const product = await productService.getProductById(id);
        console.log('Detalles del producto:', {
            nombre: product.title,
            precio: product.price,
            descripcion: product.description
        });
    }
    catch (error) {
        console.error(`Error al cargar producto ${id}:`, error);
    }
}
// Ejecutar
mostrarProductos();
mostrarProductoIndividual(1);
//# sourceMappingURL=main.js.map