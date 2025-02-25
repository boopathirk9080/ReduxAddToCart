// import { yupResolver } from '@hookform/resolvers/yup'
// import { Button, Paper, TextField, Typography } from '@mui/material'
// import { useForm } from 'react-hook-form'
// import * as Yup from "yup"

// let renderCount = 0

// let schma = Yup.object().shape(
//   {
//     //regular Expression abc@gmail.com
//     name: Yup.string()
//       .required("Name is Required")
//       .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your Fullname"),
//     email: Yup.string()
//       .required("Email is Required")
//       // .matches(/^[a-z]+@[a-z]{3,5}.[a-z]{3,4}+$/, "Enter Your Fullname"),
//       .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/, "Enter a valid Email"),
//     // .email("Enter a valid email address"),
//     age: Yup.number()
//       // .integer()
//       .positive()
//       .required("Enter Your Age")
//       .min(18, "Minimum Age Should 18"),
//     password: Yup.string()
//       .required("Password is Required"),
//     cPassword: Yup.string()
//       .required("Confirm Password is Required")
//       .oneOf([Yup.ref("password"), null],
//         "Password Must Match")
//   }
// )

// function SignUp() {

//   const paperStyle = {
//     width: 300,
//     margin: "20px auto",
//     padding: "20px",
//     display: "grid",
//     gap: "20px"
//   };

//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schma)
//   })
//   console.log(errors);
//   const handleData = (data) => {
//     console.log(data);
//   }
//   renderCount++;
//   return (
//     <Paper elevation={20} style={paperStyle} component={"Form"} onSubmit={handleSubmit(handleData)} >
//       <Typography variant='h6' textAlign={'center'} >Create a Account- {renderCount}</Typography>
//       <TextField label='Name'
//         {...register("name", { required: "Name is Required" })}
//         error={!!errors.name} //convert ito blll
//         helperText={errors.name?.message} //chaining Operator
//       />
//       <TextField label='Email' {...register("email")}
//         error={!!errors.email} //convert ito blll
//         helperText={errors.email?.message} //chaining Operator
//       > </TextField>
//       <TextField label='Age'
//         {...register("age")}
//         type='number'
//         error={!!errors.age} //convert ito blll
//         helperText={errors.age?.message} //chaining Operator
//       > </TextField>
//       <TextField label='Password'
//         {...register("password")}
//         error={!!errors.password} //convert ito blll
//         helperText={errors.password?.message} //chaining Operator
//         type='password'
//       > </TextField>
//       <TextField label='Confirm Password'
//         {...register("cPassword")}
//         error={!!errors.cPassword} //convert ito blll
//         helperText={errors.cPassword?.message} //chaining Operator
//         type='password'
//       >
//       </TextField>
//       <Button variant='contained' type="submit" >SignUp</Button>
//     </Paper>
//   )
// }

// export default SignUp



// import axios from 'axios';
// import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import { Paper, TextField, Button, Typography, Box } from '@mui/material';
// import * as Yup from "yup";

// const SignUp = () => {
//     const navigate = useNavigate();

//     const validationSchema = Yup.object({
//         name: Yup.string()
//             .required("Name is Required")
//             .matches(/^[A-Z][a-z]+ [A-Z][a-z]+$/, "Enter Your Fullname"),
//         email: Yup.string()
//             .required("Email is Required")
//             .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/, "Enter a valid Email"),
//         age: Yup.number()
//             .positive()
//             .required("Enter Your Age")
//             .min(18, "Minimum Age Should be 18"),
//         password: Yup.string()
//             .required("Password is Required")
//             .matches(
//                 /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//                 "Password must include uppercase, lowercase, number, and special character"
//             ),
//         cPassword: Yup.string()
//             .required("Confirm Password is Required")
//             .oneOf([Yup.ref("password"), null], "Passwords must match")
//     });

//     const formik = useFormik({
//         initialValues: { name: "", email: "", age: "", password: "", cPassword: "" },
//         validationSchema,
//         onSubmit: async (values, { resetForm }) => {
//             try {
//                 await axios.post("https://67aeede79e85da2f020ed455.mockapi.io/usedsignup/data", values);
//                 alert("Signup successful!");
//                 navigate("/login");
//                 resetForm();
//             } catch (error) {
//                 console.error("Error:", error);
//                 alert("Signup failed. Try again!");
//             }
//         }
//     });

//     return (
//         <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//             <Paper elevation={6} sx={{ padding: 4, width: 350, textAlign: 'center' }}>
//                 <Typography variant="h5" sx={{ marginBottom: 2 }}>Sign Up</Typography>

//                 <form onSubmit={formik.handleSubmit}>
//                     <TextField fullWidth label="Name" name="name" value={formik.values.name} 
//                         onChange={formik.handleChange} onBlur={formik.handleBlur} 
//                         error={formik.touched.name && Boolean(formik.errors.name)}
//                         helperText={formik.touched.name && formik.errors.name} sx={{ marginBottom: 2 }} 
//                     />

//                     <TextField fullWidth label="Email" name="email" type="email" value={formik.values.email} 
//                         onChange={formik.handleChange} onBlur={formik.handleBlur} 
//                         error={formik.touched.email && Boolean(formik.errors.email)}
//                         helperText={formik.touched.email && formik.errors.email} sx={{ marginBottom: 2 }} 
//                     />

//                     <TextField fullWidth label="Age" name="age" type="number" value={formik.values.age} 
//                         onChange={formik.handleChange} onBlur={formik.handleBlur} 
//                         error={formik.touched.age && Boolean(formik.errors.age)}
//                         helperText={formik.touched.age && formik.errors.age} sx={{ marginBottom: 2 }} 
//                     />

//                     <TextField fullWidth label="Password" name="password" type="password" value={formik.values.password} 
//                         onChange={formik.handleChange} onBlur={formik.handleBlur} 
//                         error={formik.touched.password && Boolean(formik.errors.password)}
//                         helperText={formik.touched.password && formik.errors.password} sx={{ marginBottom: 2 }} 
//                     />

//                     <TextField fullWidth label="Confirm Password" name="cPassword" type="password" value={formik.values.cPassword} 
//                         onChange={formik.handleChange} onBlur={formik.handleBlur} 
//                         error={formik.touched.cPassword && Boolean(formik.errors.cPassword)}
//                         helperText={formik.touched.cPassword && formik.errors.cPassword} sx={{ marginBottom: 2 }} 
//                     />

//                     <Button fullWidth variant="contained" type="submit" sx={{ marginBottom: 2 }}>
//                         Sign Up
//                     </Button>
                    
//                     <Button fullWidth variant="outlined" onClick={() => navigate('/login')}>
//                         Already have an account? Log In
//                     </Button>
//                 </form>
//             </Paper>
//         </Box>
//     );
// }

// export default SignUp;





import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';
import * as Yup from "yup";

const SignUp = () => {
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().required("Email is required").email("Enter a valid email"),
        password: Yup.string().required("Password is required"),
        cPassword: Yup.string().required("Confirm Password is required").oneOf([Yup.ref("password"), null], "Passwords must match")
    });

    const formik = useFormik({
        initialValues: { name: "", email: "", password: "", cPassword: "" },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await axios.post("https://67aeede79e85da2f020ed455.mockapi.io/usedsignup/data", values);
                localStorage.setItem("user", JSON.stringify(response.data)); // Save user in localStorage
                alert("Signup successful!");
                navigate("/login"); // Redirect to home page
            } catch (error) {
                console.error("Signup error:", error);
                alert("Signup failed. Try again!");
            }
        }
    });

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={6} sx={{ padding: 4, width: 350, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ marginBottom: 2 }}>Sign Up</Typography>

                <form onSubmit={formik.handleSubmit}>
                    <TextField fullWidth label="Name" name="name" value={formik.values.name}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name} sx={{ marginBottom: 2 }}
                    />

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

                    <TextField fullWidth label="Confirm Password" name="cPassword" type="password" value={formik.values.cPassword}
                        onChange={formik.handleChange} onBlur={formik.handleBlur}
                        error={formik.touched.cPassword && Boolean(formik.errors.cPassword)}
                        helperText={formik.touched.cPassword && formik.errors.cPassword} sx={{ marginBottom: 2 }}
                    />

                    <Button fullWidth variant="contained" type="submit">
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default SignUp;
