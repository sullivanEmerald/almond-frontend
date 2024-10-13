import { StateCreator } from 'zustand';
import { Product } from '../types/product';
import { UseQueryResult } from '@tanstack/react-query';

export interface ProductsData {
    success: boolean;
    msg: string;
    data: Product[];
}

interface ProductState {
    products: Product[];
}

interface ProductActions {
    addProduct: (product: Product) => void;
    setProducts: (products: Product[]) => void;
}

export type ProductSlice = ProductState & ProductActions;

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
    products: [],

   

    setProducts: (products) => set({ products }),

    addProduct: (product) => set((state) => ({
        products: [product, ...state.products],
    })),
});
