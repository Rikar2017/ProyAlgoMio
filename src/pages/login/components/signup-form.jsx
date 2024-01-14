import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";
import FormInput from "../components/form-input";
import PasswordSetter from "./password-setter";

export default function SignUpForm() {
  const modal = useRef();
  const [formData, setFormData] = useState();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      object().shape({
        name: string().required(),
        lastName: string().required(),
        email: string().email().required(),
      })
    ),
  });

  function doOnSubmit(data) {
    setFormData(data);
    modal.current.showModal();
  }

  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit(doOnSubmit)}>
          <FormInput
            label="Name:"
            placeholder="Name"
            type="text"
            name="name"
            reg={register}
            errorMessage={
              errors.name !== undefined ? errors.name.message : ""
            }
          />
          <FormInput
            label="Last Name:"
            placeholder="Last Name"
            type="text"
            name={"lastName"}
            reg={register}
            errorMessage={
              errors.lastName !== undefined ? errors.lastName.message : ""
            }
          />
          <FormInput
            label="Email:"
            placeholder="Email"
            type="email"
            name="email"
            reg={register}
            errorMessage={
              errors.email !== undefined ? errors.email.message : ""
            }
          />
          <div className="form-control">
            <button className="btn btn-primary mt-4">Password</button>
          </div>
        </form>
        <PasswordSetter modalRef={modal} formData={formData} />
      </div>
    </div>
  );
}
