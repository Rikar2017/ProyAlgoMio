import FormInput from "../components/form-input";

export default function SignUpForm() {
  return (
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <FormInput label="Name:" placeholder="Name" type="text" required />
        <FormInput
          label="Last Name:"
          placeholder="Last Name"
          type="text"
          required
        />
        <FormInput label="Email:" placeholder="Email" type="email" required />
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
        />
        <div className="form-control mt-6">
          <button className="btn btn-primary">
            <span className="loading loading-spinner" />
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
