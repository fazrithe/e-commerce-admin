import * as React from 'react';
import { FormGroup, FormControl, Container, Stack, Breadcrumbs, InputLabel, OutlinedInput, InputAdornment, IconButton, Grid, Paper, Typography, Button} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useRouter } from 'next/router';

export default function Login(){
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const breadcrumbs = [
        <Link key="1" color="inherit" href="/">
          Home
        </Link>,
        <Typography key="3" color="text.primary">
          Login
        </Typography>,
      ];
    
    const router = useRouter();
    const submitData = async (event) => {
        event.preventDefault();
        console.log('ss');
        localStorage.setItem('status', 'active');
        router.push('/');
    };  

    return(
        <Container fixed>
            <Stack spacing={2} className="mt-2">
                <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>  
        <Grid container alignItems="center" className="mt-4 d-flex justify-content-center">
        <Paper elevation={0}>
            <Grid container alignItems="center" paddingTop={4} paddingLeft={1}>
                    <Typography variant="h6">Login</Typography>
            </Grid>
            <form onSubmit={submitData}>
            <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel color="secondary">Email</InputLabel>
                <OutlinedInput
                    type="text"
                    label="Email"
                    color="secondary"
                    name="email"
                    id="email"
                />
                </FormControl>
            </FormGroup>
            <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" color="secondary">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    color="secondary"
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
            </FormGroup>
              <FormGroup>
                <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined">
                <Button variant="contained" color="primary" type="submit">
                    Login
                </Button>
                </FormControl>
            </FormGroup>
            </form>
            </Paper>
            </Grid>
            </Container>
    )
}