import axios from "axios";
import PropTypes from "prop-types";
import { createContext } from "react";
export const SessionContext = createContext(null);

const SessionProvider = ({ children }) => {
  const session = axios.create({
    baseURL: "https://serenity-seekers-backend.vercel.app/api/v1/",
    timeout: 5000,
  });

  const sessionData = {
    session,
    userData: {
      name: "John Doe",
      email: "random",
    },
  };
  return (
    <SessionContext.Provider value={sessionData}>
      {children}
    </SessionContext.Provider>
  );
};

SessionProvider.propTypes = {
  children: PropTypes.node,
};

export default SessionProvider;
