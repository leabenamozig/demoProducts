import { Product } from './product';
export class ResponseProductSearch {
    type: string;
    currentQuery: string;
    freeTextSearch: string;
    pagination: string;
    products: Product[];
    sorts: string;
}
