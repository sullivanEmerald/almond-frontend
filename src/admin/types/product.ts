 type ImageType = {
    secure_url: string;
     public_id: string
}

interface CreateProduct {
    name : string,
    description : string,
    price : string,
    category : string,
    image : ImageType | null,
    subImage : ImageType[]

}

export default CreateProduct;