import { Form } from 'react-bootstrap';
import Categories from './categories';


const SelectCategory = ({ name} : { name : string}) => {
    return (
        <>
            <Form.Select name={name} className='formInputField'>
                {Categories.map(({ label, value}) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </Form.Select>

        </>

    )
}

export default SelectCategory;