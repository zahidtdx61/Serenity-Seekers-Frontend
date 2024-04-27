import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const data = useContext(AuthContext);
  console.log(data);
  return <div>Navbar</div>;
};

export default Navbar;
