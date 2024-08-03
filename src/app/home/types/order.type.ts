export interface ProductList {
    productId: number;
    quantity: number;
    totalAmount: number;
}

export interface Order {
    id?: number;
    productList: ProductList[];
    status: string;
}