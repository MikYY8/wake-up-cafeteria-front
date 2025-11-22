import { Link } from "react-router-dom";
import { Lock } from "lucide-react";


function DashboardButton({ isAdmin }) {
    
    if(isAdmin) {
    return(
         <Link to={"/dashboard"} className="bg-orange-100 hover:bg-emerald-600 text-white py-2 rounded-md flex items-center max-w-25">
          <Lock size ={18} className="inline-block mr-1"/>
          <span>Dashboard</span>
         </Link>
         );
        }

         return <></>;
}

export default DashboardButton;