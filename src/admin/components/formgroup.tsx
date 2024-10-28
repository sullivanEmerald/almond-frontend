import { Form } from 'react-bootstrap';
import { FormData } from '../types/form';
import SelectCategory from '../category/Select';
import useStore from '../stores/store';
import CreateProduct from '../types/product';
import ImagePreview from './ImagePreview';
import { HandleInputChange, HandleFileChange } from '../actions/product';

const FormGroup: React.FC<FormData> = ({ controlId, label, type, name, placeholder, multiple }) => {
    const value = useStore((state) => state.data[name as keyof CreateProduct]) || '';
    const imagePreview = useStore((state) => state.imagePreview);

    return (
        <>
            <Form.Group controlId={controlId}>

                <Form.Label>
                    {multiple ? (
                        <>
                            {label} <sup className='formAsteriks'>*</sup>
                        </>
                    ) : (
                        label
                    )}
                </Form.Label>


                {type === 'select' ? (
                    <SelectCategory name={name} />
                ) : (
                    <>
                        {type === 'file' ? (
                            <>
                                <Form.Control
                                    type={type}
                                    name={name}
                                    accept="image/*"
                                    className="formInputField"
                                    onChange={HandleFileChange}
                                    multiple={Boolean(multiple)}
                                />
                                {imagePreview && (
                                    <ImagePreview imageUrl={imagePreview} />
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
