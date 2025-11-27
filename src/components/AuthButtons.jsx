import { LogOut,LogIn,UserRoundPlus } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function AuthButtons({ isLogin,logOut }){
     const navigate = useNavigate()

     function logoutLocal(){
        logOut()
        navigate("/")
     }

    if (isLogin)
        { // boton de lout(solo se ve si estamos logueados)
        return (
        <button onClick={logoutLocal} className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md flex items-center">
            <LogOut size={18}/> 
            <span className="pl-2">Log Out</span>
        </button>
        );
    }
   // Botones de login y registro(solo se ven si estamos logueados) 
    return (
        <>
         <Link to={"/Login"} className=" hover:text-amber-950  text-white py-2 rounded-md flex items-center max-w-25">
            <LogIn size={18}/> 
            <span className="pl-2">Ingresar</span>
        </Link>

         <Link to={"/register"} className="bg-orange-200 hover:text-amber-950  text-white py-2 rounded-md flex items-center max-w-25">
            <UserRoundPlus size={18}/> 
            <span className="pl-2">Registrate</span>
        </Link>
        </>
    );
}

export default AuthButtons;