import CreateProduct from "../types/product";
import useStore from "../stores/store";
const setData = useStore.getState().setData;


export const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setData(name as keyof CreateProduct, value);
};


export const HandleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setData(name as keyof CreateProduct, value);
};


export const HandleFileChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
    const file = e.target.files?.[0];

    const setImagePreview = useStore.getState().setImagePreview;

    if (file) {
        const previewUrl = URL.createObjectURL(file)
        setImagePreview(previewUrl)
    }

    return null;
}
