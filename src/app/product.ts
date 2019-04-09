import { Price } from './price';
import { Stock } from './stock';
export class Product {
    availableForPickup: boolean;
    averageRating: number;
    configurable: boolean;
    configuratorType: string;
    description: string;
    manufacturer: string;
    multimensional: boolean;
    code: string;
    name: string;
    price: Price;
    priceRange: string;
    stock: Stock;
    summary: string;
    url: string;
}

