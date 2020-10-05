import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';
import { handleGoogleLogin } from './ThirdPartySignInManager';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/Register" } };



    const styleThirdParty = {
        border: '1px solid lightgray',
        width: '400px',
        margin: '30px auto',
        borderRadius: '50px',
        cursor: 'pointer',
        background: 'whitesmoke'
    }


    const googleHandler = () => {
        console.log('Google');
        handleGoogleLogin(history, from)
            .then((res) => {
                setLoggedInUser(res);
                history.replace(from);
            })
    }


    return (
        <div className={'login-div  d-flex flex-column justify-content-center align-items-center'}>
            <h2>Login With</h2>
            <div style={styleThirdParty} >
                <h5 className='my-2 mx-5' onClick={googleHandler}>
                    <img style={{ width: '40px' }} src={require('../../images/google.png')} alt="" /> <span className="ml-3">Continue with Google</span>
                </h5>
            </div>

            <p>Don't have an account <a href="#">Create an account</a>  </p>
        </div>
    );
};

export default Login;