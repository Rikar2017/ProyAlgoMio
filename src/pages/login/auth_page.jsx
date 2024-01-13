import ThemeController from "../../components/theme_controller";
import FormInput from "./components/form-input";
import LogoSpot from "./components/logo-spot";

function AuthPage() {
  return (
    <>
      <div className="ml-10 mt-8 flex items-center place-content-between">
        <ThemeController />
      </div>

      {/* centered box*/}
      <div className="-z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {/* login panel */}
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <LogoSpot />
            <div className="card shrink-0 w-full max-w-sm shadow-2xl shadow-gray-950 bg-base-100">
              <form className="card-body">
                <FormInput
                  label="Email"
                  placeholder="Email"
                  type="email"
                  required
                />
                <FormInput
                  label="Password"
                  placeholder="password"
                  type="password"
                  required
                >
                  <div className="flex place-content-between">
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                    <div className="flex items-center pr-4">
                      <label className="label">Remember?</label>
                      <input
                        type="checkbox"
                        checked="checked"
                        className="checkbox checkbox-xs"
                      />
                    </div>
                  </div>
                </FormInput>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">
                    <span className="loading loading-spinner" />
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
