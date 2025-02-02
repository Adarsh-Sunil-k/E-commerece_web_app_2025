import React,{useState} from 'react'
import Layout from '../../components/layouts/Layout'
import toast from 'react-hot-toast';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../../styles/AuthStyles.css'


const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setAnswer] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/api/v1/user/register',
                {name,
                email,
                password,
                phone,
                address,
                answer,
            }
            );
            if (res.data.success){
                toast.success(res.data.message)
                navigate('/login')
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something wrong")
            
        }
        // console.log(name,email,password,phone,address);
        // toast.success("register successfully")
        
    }

    return (
        <Layout title={"Register - E-commerce App"}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                <h1 className='title'>Register Form</h1>
                    <div className="mb-3">
                        <input 
                        type="text"
                        value={name}
                        onChange={(e)=> setName(e.target.value)} 
                        className="form-control" 
                        id="exampleInputEmail1"
                        placeholder='Enter Your Name'
                        required  
                        />
                    </div>

                    <div className="mb-3">
                        <input 
                        type="email"
                        value={email} 
                        onChange={(e)=> setEmail(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1"
                        placeholder='Enter Your Email'
                        required  
                        />
                    </div>

                    <div className="mb-3">
                        <input 
                        type="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword1"
                        placeholder='Enter Your Password'
                        required 
                        />
                    </div>

                    <div className="mb-3">
                        <input 
                        type="text"
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)} 
                        className="form-control" 
                        id="exampleInputEmail1"
                        placeholder='Enter Your Number'
                        required  
                        />
                    </div>

                    <div className="mb-3">
                        <input 
                        type="text"
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1"
                        placeholder='Enter Your Address'
                        required  
                        />
                    </div>

                    <div className="mb-3">
                        <input 
                        type="text"
                        value={answer}
                        onChange={(e)=> setAnswer(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1"
                        placeholder='What is Your Favorite Sports'
                        required  
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div>
        </Layout>
    )
}

export default Register
