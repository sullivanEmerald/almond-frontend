import { Form } from 'react-bootstrap';
import Categories from './categories';
import { HandleInputChange } from '../actions/product'
import useStore from '../stores/store';

interface SelectValues {
    name: string,
}


const SelectCategory: React.FC<SelectValues> = ({ name }) => {

    return (
        <>
            <Form.Select
                name={name}
                className='formInputField'
                onChange={HandleInputChange}
            >


                {Categories.map(({ label, value }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </Form.Select>

        </>

    )
}

export default SelectCategory;