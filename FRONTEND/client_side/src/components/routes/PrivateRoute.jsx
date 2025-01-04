// my code


import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const  privateRoute = () => {
    const [ok, setOk] = useState(false)
    const {auth, setAuth} = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('http://localhost:8000/api/v1/user/user-auth');
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
            
        }
        if (auth?.token) authCheck();
    }, [auth?.token])

    return ok ? <Outlet /> :<Spinner/>
}

export default privateRoute

// gpt code

// import { useState, useEffect } from "react";
// import { useAuth } from "../../context/Auth";
// import { Outlet, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../Spinner";

// const PrivateRoute = () => {
//     const [ok, setOk] = useState(false);
//     const { auth } = useAuth();
//     const navigate = useNavigate(); // Used for navigation to login page

//     useEffect(() => {
//         const authCheck = async () => {
//             if (!auth?.token) {
//                 console.log("No token provided.");
//                 setOk(false); // If no token, deny access
//                 navigate("/login");
//                 return;
//             }

//             try {
//                 const res = await axios.get('http://localhost:8000/api/v1/user/user-auth', {
//                     headers: {
//                         Authorization: `Bearer ${auth.token}`,
//                     },
//                 });

//                 if (res.data.ok) {
//                     setOk(true); // Token is valid
//                 } else {
//                     setOk(false); // Token is invalid
//                     navigate("/login"); // Redirect to login page if token is invalid
//                 }
//             } catch (err) {
//                 if (err.response) {
//                     // Handle the specific 401 Unauthorized error
//                     if (err.response.status === 401) {
//                         console.error("Unauthorized: Invalid or expired token");
//                         setOk(false);
//                         navigate("/login"); // Redirect to login page if unauthorized
//                     } else {
//                         console.error("Unexpected error:", err.response);
//                         setOk(false);
//                         navigate("/login"); // Redirect to login in case of other errors
//                     }
//                 } else {
//                     // Network errors or other issues
//                     console.error("Error:", err);
//                     setOk(false);
//                     navigate("/login"); // Redirect to login in case of any other error
//                 }
//             }
//         };

//         authCheck(); // Run auth check on component mount

//     }, [auth?.token, navigate]);

//     return ok ? <Outlet /> : <Spinner />;
// };

// export default PrivateRoute;

