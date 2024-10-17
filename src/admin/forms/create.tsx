import { Form } from 'react-bootstrap';
import SubmitButton from '../subcomponents/submitbbutton';
import productFormData from '../data/product';
import FormGroup from '../components/formgroup';

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
                <SubmitButton label='Create Product' /> 
            </Form>
        </>
    );
};

export default ProductForm;
