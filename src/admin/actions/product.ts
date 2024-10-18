import CreateProduct from "../types/product";

export const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, setData: any) => {
    const { name, value } = event.target;
    setData(name as keyof CreateProduct, value);
};


export const HandleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>, setData: any) => {
    const { name, value } = event.target;
    setData(name as keyof CreateProduct, value);
};