import { Form, Image} from 'react-bootstrap';
import { FormData } from '../types/form';
import SelectCategory from '../category/Select';
import useStore from '../stores/store';
import CreateProduct from '../types/product';
import { HandleInputChange, HandleFileChange } from '../actions/product';

const FormGroup: React.FC<FormData> = ({ controlId, label, type, name, placeholder }) => {
    const value = useStore((state) => state.data[name as keyof CreateProduct]) || '';
    const imagePreview = useStore((state) => state.imagePreview);
    const data = useStore((state) => state.data)

    console.log(data)


    return (
        <>
            <Form.Group controlId={controlId}>
                
                <Form.Label>{label}</Form.Label>

                {type === 'select' ? (
                    <SelectCategory name={name}  />
                ) : (
                    <>
                        {type === 'file' ? (
                            <>
                                <Form.Control
                                    type="file"
                                    name={name}
                                    accept="image/*"
                                    className="formInputField"
                                    onChange={HandleFileChange}
                                />
                                {imagePreview && (
                                    <Image
                                        src={imagePreview}
                                        alt="Image Preview"
                                        fluid
                                        className="mt-3"
                                        style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
                                    />
                                )}
                            </>
                        ) : (
                            <Form.Control
                                type={type}
                                placeholder={placeholder}
                                name={name}
                                value={value as string}
                                className="formInputField"
                                onChange={HandleInputChange}
                            />
                        )}
                    </>
                )}
            </Form.Group>
        </>
    );
};

export default FormGroup;
