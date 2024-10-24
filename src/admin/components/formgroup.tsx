import { Form, Image } from 'react-bootstrap';
import { FormData } from '../types/form';
import SelectCategory from '../category/select';
import useStore from '../stores/store';
import CreateProduct from '../types/product';
import { HandleInputChange, HandleFileChange } from '../actions/product';

const FormGroup: React.FC<FormData> = ({ controlId, label, type, name, placeholder }) => {
    const value = useStore((state) => state.data[name as keyof CreateProduct]);
    const setData = useStore((state) => state.setData);
    const imagePreview = useStore((state) => state.imagePreview);

    return (
        <>
            <Form.Group controlId={controlId}>
                <Form.Label>{label}</Form.Label>

                {type === 'select' ? (
                    <SelectCategory name={name} value={value as string} />
                ) : (
                    <>
                        {type === 'file' ? (
                            <>
                                <Form.Control
                                    type="file"
                                    name={name}
                                    accept="image/*"
                                    className="formInputField"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => HandleFileChange(e)}
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
                                onChange={(e) => HandleInputChange(e, setData)}
                            />
                        )}
                    </>
                )}
            </Form.Group>
        </>
    );
};

export default FormGroup;
