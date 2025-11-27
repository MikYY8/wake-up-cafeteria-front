
import AuthButtons from "./AuthButtons";
import CartButton from "./CartButton";
import DashboardButton from "./DashboardButton";
import NavbarBase from "./NavbarBase";
import logo from "../assets/Logo.png"
import { useAuth } from "../hooks/useAuth";

function Navbar () {
   const {user,logout,isAuthenticated} = useAuth()
   const isAdmin = user?.role==="admin"


      return (
    <div className="bg-[#d6a770] text-white flex items-center justify-between">
      <div className="bg-[#d6a770] text-white p-1 flex items-center justify-between">

        <img src={logo} alt="logo" className="h-30 w-auto"/>
      </div>
      <div className="bg-[#d6a770] text-white p-1 flex items-center justify-between">
        <NavbarBase />
        <CartButton isLogin={isAuthenticated} />
        <DashboardButton isAdmin={isAdmin} />
        <AuthButtons isLogin={isAuthenticated} logOut={logout} />
      </div>
    </div>
  );
}

export default Navbar;