
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegistrationData from '@/admin/data/register'

const RegisterForm = () => {
    return (
        <>
            <Form className='form-container'>
                {RegistrationData.map(({ controlId, label, name, type, placeholder }) => (
                    <Form.Group style={{ position: 'relative' }} controlId={controlId} key={controlId}>
                        <Form.Label className='fieldLabel'>{label}</Form.Label>
                        <Form.Control
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            className='formInputField'
                        />
                    </Form.Group>
                ))}

                <button type="submit">Submit</button>

                <Link className='auth_redirect_link' to='/admin/register'>
                    Don't have an account? Sign up
                </Link>
            </Form>
        </>
    );
};

export default RegisterForm;
