import { createContext, useEffect, useState } from "react";
import RouterComponents from "./components/routers/RouterComponents";
import api from "./config/api";
import "./App.css";

export const UserContext = createContext(null);

function App() {
  const [userData, setUserData] = useState({});
  let userId = localStorage.getItem("userId") ?? false;

  const getUserData = async () => {
    await api
      .get(`/user/${userId}`)
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <UserContext.Provider value={userData}>
        <RouterComponents />
      </UserContext.Provider>
    </div>
  );
}

export default App;
