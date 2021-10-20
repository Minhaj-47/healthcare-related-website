import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirectUri);
            })

    }

    return (
        <div className="d-flex align-items-center justify-content-center container-fluid">
            <div className="container">
                <div className="text-center">
                    <h2 className="heading"> PLEASE <span className="text-primary">LOG IN</span> </h2>
                    <form className="row g-3 ms-5 justify-content-sm-start justify-content-md-center">
                        <div className="col-8 align-items-center">
                            <button type="submit" className="btn btn-dark border-5 mb-3 mt-3 fs-4  px-5"><Link className="  text-white text-decoration-none"  to="/register">Login With Email and Password</Link> </button>
                        </div>
                    </form>
                    <p>New To MyClinic? <Link to="/register">Create an Account</Link></p>
                </div>
                <div className="text-center align-items-center">
                    <h2>-------------------------OR Log in Using-------------------------</h2>
                    <button
                        className="btn btn-dark border-5 mb-3 mt-3 fs-4  fst-italic px-5 py-2  text-center"
                        onClick={handleGoogleLogin}
                    >Google sign in
                    </button>
                        
                    
                </div>
            </div>

        </div>
    );
};

export default Login;