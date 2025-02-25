// import axios from 'axios'
// import { useFormik } from 'formik'
// import { useNavigate } from 'react-router-dom'

// function Login() {
//     const navigate = useNavigate()
//     const formikvar = useFormik({
//         initialValues: {
//             email: "",
//             password: ""
//         },
//         onSubmit: async (values) => {
//             try {
//                 const response = await axios.get('https://67aeede79e85da2f020ed455.mockapi.io/usedsignup/data')
//                 const data = response.data.find(
//                     (data) => data.email === values.email && data.password === values.password
//                 )
//                 if (data) {
//                     alert("login Successful")
//                     navigate('/')
//                 }
//                 else {
//                     alert('invalid mail or password')
//                 }
//             } catch (error) {
//                 console.error('Login error or fetchError :', error);
//                 alert('Fetch Error');

//             }
//         }


//     })
//     return (
//         <div>
//             <h3>Login</h3>
//             <form onSubmit={formikvar.handleSubmit} >
//                 <label htmlFor="email">Email</label>
//                 <input type="email"
//                     id='email'
//                     placeholder='Enter Email'
//                     value={formikvar.values.email}
//                     onChange={formikvar.handleChange}
//                 /> <br />
//                 <label htmlFor="password">Password</label>
//                 <input type="password"
//                     id='password'
//                     placeholder='Enter Password'
//                     value={formikvar.values.password}
//                     onChange={formikvar.handleChange}
//                 />
//                 <button type='submit' >Login</button>
               
//             </form>
//             <p>forget Password</p>
//             <button onClick={()=>navigate('/signup')} >SignUp</button>
//         </div>
//     )
// }

// export default Login















// import axios from 'axios';
// import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import { Paper, TextField, Button, Typography, Box } from '@mui/material';

// function Login() {
//     const navigate = useNavigate();

//     const formik = useFormik({
//         initialValues: {
//             email: "",
//             password: ""
//         },
//         onSubmit: async (values) => {
//             try {
//                 const response = await axios.get('https://67aeede79e85da2f020ed455.mockapi.io/usedsignup/data');
//                 const user = response.data.find(
//                     (user) => user.email === values.email && user.password === values.password
//                 );

//                 if (user) {
//                     alert("Login Successful");
//                     navigate('/');
//                 } else {
//                     alert('Invalid email or password');
//                 }
//             } catch (error) {
//                 console.error('Login error:', error);
//                 alert('Fetch Error');
//             }
//         }
//     });

//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" style={{padding:"20px"}} height="100vh">
//             <Paper elevation={6} sx={{ padding: 4, width: 350, textAlign: 'center' }}>
//                 <Typography variant="h5" sx={{ marginBottom: 2 }}>Login</Typography>

//                 <form onSubmit={formik.handleSubmit}>
//                     {/* Email Field */}
//                     <TextField
//                         fullWidth
//                         label="Email"
//                         type="email"
//                         id="email"
//                         placeholder="Enter Email"
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         sx={{ marginBottom: 2 }}
//                     />

//                     {/* Password Field */}
//                     <TextField
//                         fullWidth
//                         label="Password"
//                         type="password"
//                         id="password"
//                         placeholder="Enter Password"
//                         value={formik.values.password}
//                         onChange={formik.handleChange}
//                         sx={{ marginBottom: 2 }}
//                     />

//                     {/* Login Button */}
//                     <Button fullWidth variant="contained" type="submit" sx={{ marginBottom: 2 }}>
//                         Login
//                     </Button>
//                 </form>

//                 {/* Forgot Password & Signup Links */}
//                 <Typography variant="body2" sx={{ cursor: 'pointer', color: 'blue', marginBottom: 2 }}>
//                     Forgot Password?
//                 </Typography>
//                 <Button fullWidth variant="outlined" onClick={() => navigate('/signup')}>
//                     Sign Up
//                 </Button>
//             </Paper>
//         </Box>
//     );
// }

// export default Login;





















import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import * as Yup from "yup";

const Login = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required").email("Enter a valid email"),
        password: Yup.string().required("Password is required")
    });

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.get("https://67aeede79e85da2f020ed455.mockapi.io/usedsignup/data");
                const user = response.data.find(
                    (user) => user.email === values.email && user.password === values.password
                );

                if (user) {
                    localStorage.setItem("user", JSON.stringify(user)); // Save user in localStorage
                    alert("Login successful!");
                    navigate("/home"); // Redirect to home page
                } else {
                    alert("Invalid email or password");
                }
            } catch (error) {
                console.error("Login error:", error);
                alert("Error logging in. Try again!");
            }
        }
    });

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={6} sx={{ padding: 4, width: 350, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>Login</Typography>

                <form onSubmit={formik.handleSubmit}>
                    <TextField fullWidth label="Email" name="email" type="email" value={formik.values.email}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} sx={{ marginBottom: 2 }}
                    />

                    <TextField fullWidth label="Password" name="password" type="password" value={formik.values.password}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password} sx={{ marginBottom: 2 }}
                    />

                    <Button fullWidth variant="contained" type="submit">
                        Login
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
