import { useContext } from "react";
import { ThemeContext } from "../../../context/theme-scheme.context";
import LogoDark from "../../../assets/logoDark.min.svg";
import LogoLight from "../../../assets/logoLight.min.svg";

export default function LogoSpot() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className="flex justify-center lg:ml-10 flex-col lg:text-left">
      <img src={theme == "light" ? LogoDark : LogoLight} className="h-40 lg:h-52" />
    </div>
  );
}
