import * as yup from "yup"

export const formScheme = yup.object().shape({
    name: yup.string().min(2, "Invalid name").required("Name is required"),
    email: yup.string().email("Invalid Email name").required("Email is required"),
    password: yup.string().min(2, "Invalid password").required("Password is required"),
})