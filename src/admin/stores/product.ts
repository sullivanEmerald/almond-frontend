import { StateCreator } from "zustand";
import { useUploadImageToCloudinnary } from "../services/global/api";
import CreateProduct from "../types/product";

interface ProductState {
    data: CreateProduct;
    imagePreview: string | null;
    imageFile: File | null
}

interface ProductActions {
    setData: (field: keyof CreateProduct, value: any) => void;
    setImagePreview: (preview: string | null) => void;
    setImageFile: (file: File | null) => void;
    uploadImageToCloudinary: () => Promise<void>;
    resetForm: () => void;

}

export type ProductSlice = ProductState & ProductActions;

const initialState: CreateProduct = {
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
    subImage : []
};

export const createProductSlice: StateCreator<ProductSlice> = (set, get) => ({
    data: initialState,
    imagePreview: null,
    imageFile: null,

    setData: (field, value) => set((state) => ({
        data: { ...state.data, [field]: value }
    })),

    uploadImageToCloudinary: async () => {

        const { imageFile } = get();

        if (!imageFile) return;

        try {
            const { secure_url, public_id } = await useUploadImageToCloudinnary(imageFile)
            set((state) => ({ data: { ...state.data, image: { secure_url, public_id } } }))
            const { data} = get();

            console.log(data)
        } catch (error) {
            console.log(error)
            return;
        }
    },

    setImagePreview: (preview) => set({ imagePreview: preview }),

    setImageFile: (file) => set({ imageFile: file }),

    resetForm: () => set({ data: initialState, imagePreview: null, imageFile: null })
});