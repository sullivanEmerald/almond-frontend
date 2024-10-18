import { Form } from 'react-bootstrap';
import { FormData } from '../types/form';
import SelectCategory from '../category/select';
import useStore from '../stores/store';
import CreateProduct from '../types/product';
import { HandleInputChange } from '../actions/product';

const FormGroup: React.FC<FormData> = ({ controlId, label, type, name, placeholder }) => {

    const value = useStore((state) => state.data[name as keyof CreateProduct])

    const setData = useStore((state) => state.setData);

    const data = useStore((state) => state.data);

    console.log(data)



    return (
        <>
            <Form.Group controlId={controlId}>
                <Form.Label>{label}</Form.Label>

                {type === 'select' ? (
                    <SelectCategory name={name} value={value as string} />
                ) : (
                    <Form.Control
                        type={type}
                        placeholder={placeholder}
                        name={name}
                        value={value as string}
                        className='formInputField'
                        onChange={(e) => HandleInputChange(e, setData)}
                    />
                )}
            </Form.Group>

        </>


    );
};

export default FormGroup;
