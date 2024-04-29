import { useContext } from "react";
import { SessionContext } from "../SessionProvider/SessionProvider";

const useSession = () => {
  const all = useContext(SessionContext);
  return all;
};

export default useSession;
