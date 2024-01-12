import { useState } from "react";

function AuthPage() {
  const [theme, setTheme] = useState(true);

  return (
    // centered box
    <div className="w-full h-full flex items-center justify-center">
      {/* login panel */}
      <button
        data-theme={theme ? "light" : "dark"}
        className="btn btn-primary"
        onClick={() => setTheme(!theme)}
      >
        Start!
      </button>
    </div>
  );
}

export default AuthPage;
