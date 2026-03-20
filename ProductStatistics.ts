import { Product } from "./product";

export class ProductStatistics {
    private products: Product[];

    constructor(products: Product[]) {
        if (!products || products.length === 0) {
            throw new Error("Products array cannot be empty.");
        }
        this.products = products;
    }

    getAveragePrice(): number {
        const totalPrice = this.products.reduce((sum, product) => sum + product.price, 0);
        return totalPrice / this.products.length;
    }

    getMostExpensiveProduct(): Product {
        return this.products.reduce((max, product) => (product.price > max.price ? product : max), this.products[0]);
    }

    getCheapestProduct(): Product {
        return this.products.reduce((min, product) => (product.price < min.price ? product : min), this.products[0]);
    }

    getAveragePriceByCategory(category: string): number {
        const categoryProducts = this.products.filter(product => product.category === category);
        if (categoryProducts.length === 0) {
            throw new Error(`No products found in category: ${category}`);
        }
        const totalPrice = categoryProducts.reduce((sum, product) => sum + product.price, 0);
        return totalPrice / categoryProducts.length;
    }

}