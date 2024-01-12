import ThemeController from "../../components/theme_controller";
import Logo from "../../assets/logo.svg"

function AuthPage() {
  return (
    <>
      <div className="p-3 flex items-center place-content-between">
        <img src={Logo} alt="AlgoMio Logo" className="h-20"/>
        <ThemeController/>
      </div>

      {/* centered box*/}
      <div className="-z-10 absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {/* login panel */}
        <div className=" p-4">
          <button className="btn btn-primary">Start!</button>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
