import { productService } from './services/product-service.js';
import { simpsonsService } from './services/simpsons-service.js';
import { pokemonService } from './services/pokemon-service.js';
async function mostrarProductos() {
    try {
        console.log('Obteniendo productos...');
        const products = await productService.getAllProducts();
        console.log(`Se encontraron ${products.length} productos`);
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
async function mostrarPersonajes() {
    try {
        console.log('Obteniendo personajes...');
        const data = await simpsonsService.getAllCharacters();
        const characters = data.results;
        console.log(`Se encontraron ${characters.length} personajes`);
        characters.forEach((character) => {
            console.log(`
 ID: ${character.id}
 Nombre: ${character.name}
 Edad: ${character.age}
`);
        });
    }
    catch (error) {
        console.error('Error al cargar personajes:', error);
    }
}
async function mostrarPokemon(nombre) {
    try {
        const pokemon = await pokemonService.getPokemonByName(nombre);
        console.log(`
 ID: ${pokemon.id}
 Nombre: ${pokemon.name}
 Peso: ${pokemon.weight}
`);
    }
    catch (error) {
        console.error('Error al cargar pokemon:', error);
    }
}
// Ejecutar
// mostrarProductos();
// mostrarProductoIndividual(1);
// mostrarPersonajes();
mostrarPokemon('sceptile');
//# sourceMappingURL=index.js.map