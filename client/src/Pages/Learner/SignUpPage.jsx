import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleSignUp from '../../Components/Learner/Google/GoogleSignUp';
import { useFormik } from 'formik';
import { studentSignUpSchema } from '../../Validations/SignUpValidation';
import { apiRequest } from '../../Api/axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUpPage = () => {

  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: studentSignUpSchema,
    onSubmit: async (values) => {
      try {
        const response = await apiRequest ({
          method: 'post',
          url: '/signup',
          data: {
            name: values.name,
            email: values.email,
            mobile: values.mobile,
            password: values.password
          }
        });
        console.log("res", response);
  
        if (response?.success) {
          console.log(response.success);
          toast.success("Email Sent")
          navigate("/learner/otp");
        }
      } catch (err) {
        if (err.response && err.response.data) {
          toast.error(err.response.data.message);
        } else {
          toast.error('Something went wrong. Please try again later.');
        }
      }
    }
  });
    
    
      const defaultTheme = createTheme();
  return (
    <>
    <div className='bg-green-500 h-4'></div>
    <div>
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url("/static/images/templates/templates-images/sign-in-side-bg.png")',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'left',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" marginBottom={3}>
              Register
            </Typography>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2} >
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && <p className='text-red-500'>{errors.name}</p>}
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="mobile"
                label="Mobile Number"
                name="mobile"
                autoComplete="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobile && touched.mobile && <p className='text-red-500'>{errors.mobile}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && <p className='text-red-500'>{errors.password}</p>}
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="confirm-password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword && <p className='text-red-500'>{errors.confirmPassword}</p>}
            </Grid>
          </Grid>
          <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              </form>
              <Grid item>
                  <Link to={'/learner/login'} href="#" variant="body2">
                    {"Already have an account? Login"}
                  </Link>
                </Grid><br />
                <GoogleSignUp/>
          </Box> 
        </Grid>
      </Grid>
    </ThemeProvider>
    </div>
    </>   
  )
}

export default SignUpPage
