import { Form } from 'react-bootstrap';
import productFormData from '../data/product';
import FormGroup from '../components/formgroup';
import useStore from '../stores/store';

const ProductForm = () => {

    const data = useStore((state) => state.data)

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
                <button type='submit' disabled={Object.values(data).some((item) => item === '')}>
                    Create Product    
                </button> 
            </Form>
        </>
    );
};

export default ProductForm;
