import { Form } from 'react-bootstrap';
import { FormData } from '../types/form';
import SelectCategory from '../category/select';

const FormGroup: React.FC<FormData> = ({ controlId, label, type, name, placeholder }) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>

            {type === 'select' ? (
                <SelectCategory name={name} />
            ) : (
                <Form.Control
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className='formInputField'
                />
            )}
        </Form.Group>
    );
};

export default FormGroup;
