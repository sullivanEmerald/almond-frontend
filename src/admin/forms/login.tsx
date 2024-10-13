
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginData from '../data/logins';

const LoginForm = () => {
    return (
        <>
            <Form className='form-container'>
                {loginData.map(({ controlId, label, name, type, placeholder }) => (
                    <Form.Group style={{ position: 'relative' }} controlId={controlId} key={controlId}>
                        <Form.Label className='fieldLabel'>{label}</Form.Label>
                        <Form.Control
                            type={type}
                            placeholder={placeholder}
                            name={name}
                            className='formInputField'
                        />
                        {label === 'password' && (
                            <Link className='forgot_password_link' to='/admin/resetpassword'>
                                Forgot Password
                            </Link>
                        )}
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

export default LoginForm;
