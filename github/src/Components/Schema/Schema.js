import * as yup from "yup";

export const schema = yup.object().shape({
    name: yup.string().min(4,"Must be at least 4 characters").required('This field is Required')
});