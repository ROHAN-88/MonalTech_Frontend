import { Field, Form, FormikProps, withFormik } from "formik";
import * as Yup from "yup";

import { Button } from "@/components/ui/button";

import style from "./ContactForm.module.css";

// Shape of form values
interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  yourCompany: string;
  question: string;
}

interface OtherProps {
  message?: string;
}

// Aside: You may see InjectedFormikProps<OtherProps, FormValues> instead of what comes below in older code.. InjectedFormikProps was artifact of when Formik only exported a HoC. It is also less flexible as it MUST wrap all props (it passes them through).
const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors } = props;
  return (
    <Form className={style.conParent}>
      <div className={style.fieldParent}>
        {/* //! Name  */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <h4>First Name*</h4>
            <Field
              type="text"
              name="firstName"
              placeholder="First Name"
              className="dark:bg-stone-800  dark:border-0"
            />
            {touched.firstName && errors.firstName && (
              <div className={style.error}>{errors.firstName}</div>
            )}
          </div>

          <div>
            <h4>Last Name*</h4>
            <Field
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="dark:bg-stone-800  dark:border-0"
            />
            {touched.lastName && errors.lastName && (
              <div className={style.error}>{errors.lastName}</div>
            )}
          </div>
        </div>

        {/* //! Email  */}

        <div>
          <h4>Email* </h4>
          <Field
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="dark:bg-stone-800  dark:border-0"
          />
          {touched.email && errors.email && (
            <div className={style.error}>{errors.email}</div>
          )}
        </div>

        {/* //! Phone Number  */}
        <div>
          <h4>Phone Number </h4>
          <Field
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="dark:bg-stone-800  dark:border-0"
          />
          {touched.phoneNumber && errors.phoneNumber && (
            <div className={style.error}>{errors.phoneNumber}</div>
          )}
        </div>

        {/* //! Subject */}
        <div>
          <h4>Subject*</h4>
          <Field
            type="text"
            name="subject"
            placeholder="Subject"
            className="dark:bg-stone-800  dark:border-0 "
          />
          {touched.subject && errors.subject && (
            <div className={style.error}>{errors.subject}</div>
          )}
        </div>

        {/* //! Your Company  */}
        <div>
          <h4>Your Company</h4>
          <Field
            type="text"
            name="yourCompany"
            placeholder="Your  Company"
            className="dark:bg-stone-800  dark:border-0"
          />
          {touched.yourCompany && errors.yourCompany && (
            <div className={style.error}>{errors.yourCompany}</div>
          )}
        </div>

        {/* //! Question  */}
        <div>
          <h4>Question</h4>
          <Field
            type="text"
            name="question"
            placeholder="Your Question"
            className="dark:bg-stone-800  dark:border-0"
          />
          {touched.question && errors.question && (
            <div className={style.error}>{errors.question}</div>
          )}
        </div>

        <div
          className="grid place-content-center w-full  "
          // style={{ border: "1px red solid" }}
        >
          <Button
            type="submit"
            className="px-7 "
            style={{
              marginBottom: "1rem",
              // fontWeight: "",
              fontSize: "18px",
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialFirstName?: string;
  initialLastName?: string;
  initialEmail?: string;
  message?: string; // if this passed all the way through you might do this or make a union type
  initialPhoneNumber?: string;
  initialsubject?: string;
  initialyourCompany?: string;
  initialquestion?: string;
}

// Wrap our form with the withFormik HoC
const ContactForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      firstName: props.initialFirstName || "",
      lastName: props.initialLastName || "",
      email: props.initialEmail || "",
      phoneNumber: props.initialPhoneNumber || "",
      subject: props.initialsubject || "",
      yourCompany: props.initialyourCompany || "",
      question: props.initialquestion || "",
    };
  },

  // Add a custom validation function (this can be async too!)
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("FirstName is Required"),
    lastName: Yup.string().required("LastName is Required"),
    phoneNumber: Yup.string().required("PhoneNumber is Required"),
    email: Yup.string().email("Email not valid").required("Email is required"),
    subject: Yup.string().required("Subject is Required"),
    yourCompany: Yup.string(),
    question: Yup.string(),
    message: Yup.string().optional(),
  }),

  handleSubmit: (values) => {
    alert(values);
  },
})(InnerForm);

export default ContactForm;
