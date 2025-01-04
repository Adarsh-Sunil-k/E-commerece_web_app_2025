import React, { useState } from 'react';
import Layout from '../../components/layouts/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/AuthStyles.css';


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [answer, setAnswer] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/v1/user/forgot-password', {
                email,
                newPassword,
                answer,
            });

            if ( res && res.data.success) {
                toast.success(res.data && res.data.message);
                 navigate('/login');
            } else {
                toast.error(res.data.message); // Handle server error message
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong, please try again."); // Generic error message
        }
    };
  return (
        <Layout title={'Forgot-Password E-commerce - App'}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">RESET PASSWORD</h1>

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
                            type="text"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter Your Favorite Sport"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter Your New Password"
                            required
                        />
                    </div>

                    <div className='d-flex justify-content-around'>
                        <button type="submit" className="btn btn-primary">
                            Reset
                        </button>
                    </div>
                    
                </form>
            </div> 
        </Layout>
  )
}

export default ForgotPassword