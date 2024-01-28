import * as Yup from "yup";

interface FormData {
  username: string;
  email: string;
}

const validationSchema = Yup.object({
  username: Yup.string()
    .required("username id required")
    .min(3, "minimun three chacter required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export { validationSchema, FormData };
