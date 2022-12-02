import { useState } from "react";
import AuthRoutes from "./routes/AuthRoutes";
import UnAuthRoutes from "./routes/UnAuthRoutes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <div className="w-full">{isAuth ? <AuthRoutes /> : <UnAuthRoutes />}</div>
  );
}

export default App;
