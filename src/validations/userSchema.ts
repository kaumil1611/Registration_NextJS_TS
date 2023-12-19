import * as yup from "yup"

export const userSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(15, "Username must be at most 15 characters")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Username can only contain alphanumeric characters and underscores"
    ),

  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),

    confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Confirm Password not matched."),
  

  dob: yup
    .date()
    .required("Date of Birth is required")
    .test("is-adult", "User must be at least 18 years old", function (value) {
      const cutoffDate = new Date();
      cutoffDate.setFullYear(cutoffDate.getFullYear() - 18);
      return new Date(value) <= cutoffDate;
    }),

  bio: yup.string().max(300, "Bio must be at most 300 characters"),

  gender: yup.string().required("Gender is required"),

  termsAndConditions: yup
    .boolean()
    .oneOf([true], "Terms and Conditions must be reuired"),
});


export type UserSchemaType = yup.InferType<typeof userSchema>;