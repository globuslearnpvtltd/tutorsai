import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleLogined from '../../Components/Learner/Google/GoogleLogined';
import { useFormik } from 'formik';
import { studentLoginSchema } from '../../Validations/SignUpValidation';
import { apiRequest } from '../../Api/axios';
import toast from 'react-hot-toast';
import { setLearnerCredentials } from '../../Redux/Slices/authSlice';
import {useDispatch} from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: studentLoginSchema,
    onSubmit: async (values) => {
      try {
        const response = await apiRequest({
          method: 'post',
          url: '/login',
          data: {
            email: values.email,
            password: values.password
          }
        });
        console.log("res", response);

        if (response?.user) {
          console.log(response.user);
          localStorage.setItem("learnerToken", response.token);
          dispatch(setLearnerCredentials(response.user))
          navigate('/');
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
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && <p className='text-red-500'>{errors.password}</p>}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Box>

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={'/learner/signup'} href="" variant="body2">
                      {"Don't have an account? Register"}
                    </Link>
                  </Grid>
                </Grid><br />
                <GoogleLogined />
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  )
}

export default LoginPage
