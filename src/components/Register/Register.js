// this is register section where you can register by submiting your email and pass
import React from 'react';
import useAuth from '../../hooks/useAuth';

import { Link } from 'react-router-dom';

const Register = () => {
    const { handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        isLogin,
        error } = useAuth();

    return (
        <div className="mx-5">
            <form onSubmit={handleRegistration} className="bg-light shadow-lg mt-5 p-2">
                <h3 className=" heading">Please <span className="text-primary text-start">Login or Register</span></h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2 text-center ">
                        <Link to="/login">Go back to login page</Link>
                    </div>
                </div>
                <div className="row mb-3 ms-3 px-2 text-danger">{error}</div>
                <button onClick={handleRegistration} type="submit" className="btn btn-dark px-3 py-2 mx-3">
                    Login
                </button>
                <button onClick={handleRegistration} type="submit" className="btn btn-dark px-3 py-2 mx-3">
                    Register
                </button>
            </form>
            <br />
            <br />
            <br />
        </div>
    );
};

export default Register;