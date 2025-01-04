import React, { useState } from 'react';
import Layout from '../../components/layouts/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate,useLocation } from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../context/Auth.jsx';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { auth, setAuth } = useAuth();
    const [loading, setLoading] = useState(false); // For loading state
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            const res = await axios.post('http://localhost:8000/api/v1/user/login', {
                email,
                password,
            });

            if (res.data.success) {
                toast.success(res.data && res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token,
                });
                 // Store in localStorage
                 localStorage.setItem("output",JSON.stringify(res.data))
                 console.log("memory",localStorage.output);
                 
                 navigate(location.state || '/');
            } else {
                toast.error(res.data.message); // Handle server error message
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong, please try again."); // Generic error message
        } finally {
            setLoading(false); // End loading
        }
    };

    return (
        <Layout title={"Login - E-commerce App"}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">Login Form</h1>

                    <div className="mb-3">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Email"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your Password"
                            required
                        />
                    </div>

                    <div className='mb-3'>
                    <button type="button" className="btn btn-primary"
                        onClick={()=> {navigate('/forgot-password')}}
                    >
                        Forgot Password
                    </button>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                    
                </form>
            </div>
        </Layout>
    );
};

export default LoginPage;
