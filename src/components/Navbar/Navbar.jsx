import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();
  console.log(user);

  return <div>
    Navbar {" "}
    {
      user && user.displayName

    }
    </div>;
};

export default Navbar;
