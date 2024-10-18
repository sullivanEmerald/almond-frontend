import { Form } from 'react-bootstrap';
import Categories from './categories';
import { HandleSelectChange } from '../actions/product'
import useStore from '../stores/store';

interface SelectValues {
    name: string,
    value: string
}


const SelectCategory: React.FC<SelectValues> = ({ name, value }) => {

    const setData = useStore((state) => state.setData)

    return (
        <>
            <Form.Select
                name={name}
                value={value as string}
                className='formInputField'
                onChange={(e) => HandleSelectChange(e, setData) }
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