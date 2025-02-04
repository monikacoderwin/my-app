import * as Yup from 'yup';

// const phoneRegExp =/^$| ^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const signUpSchema=Yup.object({
    name: Yup.string().min(2).max(25).required('Please enter your name'),
    number:Yup.string().min(6).max(10).required("Phone number is not valid"),
    email:Yup.string().email().required("Please enter valid email"),
    password:Yup.string().min(6).required("Please enter password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null]
    ,"Password must match"),
})