
import { Box, Button, ButtonGroup, TextField } from '@mui/material';
import './Signup.css';
import { useState } from 'react';
import { useFormik } from 'formik';
import { signUpSchema } from '../Schemas';


const initialValues={
    name:"",
  number:"",
  email:"",
  password:"",
  confirm_password:"",
};
const Signup=()=>{
const [action,setAction]=useState('Sign Up');

const{values, errors, handleBlur,touched, handleChange, handleSubmit}=useFormik({
  initialValues: initialValues,
  validationSchema: signUpSchema,
  onSubmit: (values,action)=>{
    console.log(values);
    action.resetForm();
  }
})
console.log(errors);
 return(<>
 <div className="container">
<div className="header">
<div className="text">Sign up</div>
<div className="underline"></div>
</div>
<form onSubmit={handleSubmit}>
<div className="inputs">
  <div className="input"  >
    <TextField id="outlined-basic" label="Name" variant="outlined" 
    name='name' 
    onChange={handleChange}
    onBlur={handleBlur}/>
   </div>
    <p >{errors.name}</p>
    
    <div className="input"  >
    
    <TextField id="outlined-basic" label="Number" variant="outlined" 
    name='number'value={values.number} 
    onChange={handleChange}
    onBlur={handleBlur}/>
 {errors.number&&touched.number?
    (<p className='form-error'>{errors.number}</p>):null}
 </div>
 <div className="input">
    <TextField id="outlined-basic" label="Email" variant="outlined" 
    name='email' value={values.email} 
    onChange={handleChange}
    onBlur={handleBlur}/>
    {errors.email&&touched.email?
    (<p className='form-error'>{errors.email}</p>):null}
    </div>

   <div className="input">
    
    <TextField id="outlined-basic" label="Password" variant="outlined" 
    name='password' value={values.password} 
    onChange={handleChange}
    onBlur={handleBlur}/>
    {errors.password&&touched.password?
    (<p className='form-error'>{errors.password}</p>):null}
    </div>
    <div className="input">
   
    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" 
    name='confirm_password' value={values.confirm_password}
    onChange={handleChange}
    onBlur={handleBlur} />
{errors.confirm_password&&touched.confirm_password?
    (<p className='form-error'>{errors.confirm_password}</p>):null}</div>
<div className="submit">
<Button variant="contained" color="secondary" 
className="signup" type='submit'>Sign up</Button>
 <Button variant="contained" color="secondary">Login</Button>
  
 
  </div>
  </div>
  </form>
</div>


 </>);

}

export default Signup;