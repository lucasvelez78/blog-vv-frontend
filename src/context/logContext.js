import { createContext, useState } from "react";

export const logContext = createContext();

export function LogProvider({ children }) {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  function Log() {
    setLog(true);
  }

  function logOut() {
    setLog(false);
    setUser({
      name: "",
      email: "",
    });
  }

  function setInfo(name, email) {
    setUser({
      name: name,
      email: email,
    });
  }

  return (
    <logContext.Provider value={{ log, user, Log, logOut, setInfo }}>
      {children}
    </logContext.Provider>
  );
}
