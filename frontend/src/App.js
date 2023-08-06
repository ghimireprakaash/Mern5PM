import { createContext, useEffect, useState } from "react";
import RouterComponents from "./components/routers/RouterComponents";
import api from "./config/api";

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
