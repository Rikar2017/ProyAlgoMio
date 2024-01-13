import { useForm } from "react-hook-form";
import FormInput from "../components/form-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, ref, string } from "yup";

export default function SignUpForm() {
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(
      object().shape({
        name: string().required(),
        lastName: string().required(),
        email: string().email().required(),
        password: string().min(4).required(),
        confirmPass: string()
          .oneOf([ref("password")])
          .required(),
      })
    ),
  });

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(console.log)}>
        <FormInput
          label="Name:"
          placeholder="Name"
          type="text"
          name="name"
          reg={register}
          required
        />
        <FormInput
          label="Last Name:"
          placeholder="Last Name"
          type="text"
          name={"lastName"}
          reg={register}
          required
        />
        <FormInput
          label="Email:"
          placeholder="Email"
          type="email"
          name="email"
          reg={register}
          required
        />
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit">
            Password
          </button>
        </div>
      </form>
    </div>
  );
}
/*
<FormInput
label="Password:"
placeholder="Password"
type="password"
required
/>
<FormInput
label="Confirm Password:"
placeholder="Password"
type="password"
required
/>*/
