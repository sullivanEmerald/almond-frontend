import { Form } from 'react-bootstrap';
import productFormData from '../data/product';
import FormGroup from '../components/formgroup';
import useStore from '../stores/store';
import CreateProductButton from '../buttons/CreateProductButton';
const ProductForm = () => {


    return (
        <>
            <Form className='form-container'>
                {productFormData.map(({ controlId, label, type, name, placeholder }) => (
                    <FormGroup
                        key={controlId} 
                        controlId={controlId}
                        label={label}
                        type={type}
                        name={name}
                        placeholder={placeholder}
                    />
                ))}
                <CreateProductButton label='Create Product'/>
            </Form>
        </>
    );
};

export default ProductForm;
