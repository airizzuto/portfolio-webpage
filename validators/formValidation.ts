import * as yup from "yup";

const formSchema = yup.object()
  .shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().max(2000).required(),
});

export default formSchema;