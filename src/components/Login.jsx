import { Button, TextField } from "@mui/material";
import './Login.css'
import Signup from "./Signup";

const Login=()=>{

    return(<>
    <div className="container">
<div className="header">
<div className="text">Login</div>
<div className="underline"></div>
</div>
<div className="inputs">
<div className="input">
<TextField id="outlined-basic" label="Email" variant="outlined" 
    name='email'/>
   </div>
   <div className="input">
    
    <TextField id="outlined-basic" label="Password" variant="outlined" 
    name='password'/>
    </div>
    </div>
    <div className="button">
    <Button variant="contained" color="secondary">Login</Button>
<Button variant="contained" color="secondary" LinkComponent={Signup}>
  Sign up
</Button>

    </div>
    </div>


    </>)
}
export default Login;