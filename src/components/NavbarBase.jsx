import { Link } from "react-router-dom"


function NavbarBase(){
    return <div>
        <Link to={"/"} className="text-white-300  hover:text-amber-950  px-4">Inicio</Link>
        <Link to={"/category"} className="text-white-300 hover:text-amber-950 px-4">Categorias</Link>
        <Link to={"/contact"} className="text-white-300 hover:text-amber-950  px-4">Contacto</Link>
    </div>
}

export default NavbarBase