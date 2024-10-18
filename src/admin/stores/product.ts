import { StateCreator } from "zustand";
import CreateProduct from "../types/product";

interface ProductState {
    data: CreateProduct;
    imagePreview: string | null;
}

interface ProductActions {
    setData: (field: keyof CreateProduct, value: any) => void;
    setImagePreview: (preview: string | null) => void;
    resetForm: () => void;
}

export type ProductSlice = ProductState & ProductActions;

const initialState: CreateProduct = {
    name: '',
    description: '',
    price: '',
    category: '',
    image: null
};

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
    data: initialState,
    imagePreview: null,
    
    setData: (field, value) => set((state) => ({
        data: { ...state.data, [field]: value }
    })),
    
    setImagePreview: (preview) => set({ imagePreview: preview }),
    
    resetForm: () => set({ data: initialState, imagePreview: null })
});