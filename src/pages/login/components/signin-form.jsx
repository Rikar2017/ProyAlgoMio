import { useForm } from "react-hook-form";
import FormInput from "../components/form-input";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SignInForm() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(
      object().shape({
        email: string()
          .email("It need to be a valid email")
          .required("Email required"),
        password: string()
          .min(4, "Too small, it have to be bigger than 4 characters")
          .required("password required"),
      })
    ),
  });

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(console.log)}>
        <FormInput
          label="Email:"
          placeholder="Email"
          name="email"
          type="email"
          reg={register}
          errorMessage={
            formState.errors.email !== undefined
              ? formState.errors.email.message
              : ""
          }
        />
        <FormInput
          label="Password:"
          placeholder="password"
          name="password"
          type="password"
          reg={register}
          errorMessage={
            formState.errors.password !== undefined
              ? formState.errors.password.message
              : ""
          }
        />
        <div className="flex place-content-between">
          <label className="label">
            <a href="#" className="label-text link link-hover">
              Forgot password?
            </a>
          </label>
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input
                type="checkbox"
                {...register("remember")}
                className="checkbox checkbox-primary checkbox-sm m-1"
              />
            </label>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">
            <span className="loading loading-spinner" />
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
