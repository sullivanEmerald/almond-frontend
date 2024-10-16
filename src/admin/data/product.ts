const productFormData = [
    {
        controlId: 'formBasicName',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter Product Name',
        name: 'name',
    },


    {
        controlId: 'formBasicDescription',
        label: 'Description',
        type: 'text',
        placeholder: 'Enter Description',
        name: 'desciption',
    },

    {
        controlId: 'formBasicPrice',
        label: 'Price',
        type: 'text',
        placeholder: 'enter price',
        name: 'price',
    },

    {
        controlId: 'formBasicCategory',
        label: 'Category',
        type: 'select',
        placeholder: 'select category',
        name: 'category',
    },

    {
        controlId: 'formBasicImage',
        label: 'Choose Image',
        type: 'file',
        placeholder: 'choose Image',
        name: 'image',
    },
]


export default productFormData;