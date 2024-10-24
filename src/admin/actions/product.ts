import CreateProduct from "../types/product";
import useStore from "../stores/store";
const setImagePreview = useStore((state) => state.setImagePreview)

export const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, setData: any) => {
    const { name, value } = event.target;
    setData(name as keyof CreateProduct, value);
};


export const HandleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, setData: any) => {
    const { name, value } = event.target;
    setData(name as keyof CreateProduct, value);
};


export const HandleFileChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
    const file = e.target.files?.[0];

    if (file) {
        const previewUrl = URL.createObjectURL(file)
        setImagePreview(previewUrl)
    }

    return null;
}
