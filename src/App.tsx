import { useEffect, useState, useContext} from "react"
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import ThemeContext from "context/ThemeContext";
import "react-toastify/dist/ReactToastify.css";

import Router from './components/Router';
import Loader from "components/Loader";
export default function App() {
  const context = useContext(ThemeContext);
  const auth = getAuth(app);
// auth를 체크하기 전에 (initialize 전) loader를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true)
    });
  }, [auth])
  return (
    <div className={context.theme==="light"?"white":"dark"}>
    <ToastContainer/>
    {init? <Router isAuthenticated={isAuthenticated}/> : <Loader/>}
    </div>
  );
}
