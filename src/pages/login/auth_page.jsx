import ThemeController from "../../components/theme_controller";
import SignInForm from "./components/signin-form";
import LogoSpot from "./components/logo-spot";
import SignUpForm from "./components/signup-form";
import { useState } from "react";

function AuthPage() {
  const [form, setForm] = useState(true);

  return (
    <>
      <div className="m-10 mt-8 flex items-center place-content-between">
        <ThemeController />
        <button className="btn btn-ghost" onClick={() => setForm(!form)}>
          {form ? "Sign Up" : "Sign In"}
        </button>
      </div>

      {/* centered box*/}
      <div className="-z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <LogoSpot />
            {form ? <SignInForm /> : <SignUpForm />}
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
