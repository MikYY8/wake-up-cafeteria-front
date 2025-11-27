import { useState } from "react";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { User, Mail, Calendar } from "lucide-react";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    DNI: "",
    email: "",
    contrasenia: "",
    confirmarContrasenia: "",
    fechaNacimiento: "",
  });

  const navigate = useNavigate();

  /*function navigateToHome() {
    navigate("/");
  }*/

  function navigateToHome() {
    navigate(-1);
  }

  async function registerUser(e) {
    e.preventDefault();
    console.log(formData);
    
    if(formData.confirmarContrasenia !== formData.contrasenia){
      toast.error("las contraseñas son distintas")
    }

    try {
      const urlapi = import.meta.env.VITE_URL_BACK; 
      const response = await fetch(`${urlapi}/api/user/register`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email:formData.email,
          password:formData.contrasenia
        })
      })

      if(!response.ok){
        throw new Error("error en la peticion")
      }

      toast.success("usuario registrado correctamente")
      navigate("/login")
    } catch (error) {
      toast.error("error al registrar el usuario")
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center bg-orange-100 min-h-screen items-center pt-12">
      <div className="bg-amber-950 rounded-2xl max-w-2xl w-full mx-4">
        <div className="flex justify-center py-4">
          <h1 className="text-2xl font-bold text-neutral-100">Registrate</h1>
        </div>
        <form
          onSubmit={registerUser}
          className="space-y-5 flex flex-col justify-center px-8 pb-8"
        >
          <FormInput
            icon={<User size={18} />}
            labelText={"Nombre"}
            inputType={"text"}
            placeholder={"Homero"}
            value={formData.nombre}
            onChangeFn={(e) =>
              setFormData({ ...formData, nombre: e.target.value })
            }
          />
          <FormInput
            icon={<User size={18} />}
            labelText={"Apellido"}
            inputType={"text"}
            placeholder={"CosmoFulanito"}
            value={formData.apellido}
            onChangeFn={(e) =>
              setFormData({ ...formData, apellido: e.target.value })
            }
          />
          <FormInput
            icon={<Mail size={18} />}
            labelText={"Email"}
            inputType={"email"}
            placeholder={"Homero@gmail.com"}
            value={formData.email}
            onChangeFn={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <FormInput
            icon={<User size={18} />}
            labelText={"Contraseña"}
            inputType={"password"}
            placeholder={"********"}
            value={formData.contrasenia}
            onChangeFn={(e) =>
              setFormData({ ...formData, contrasenia: e.target.value })
            }
          />
          <FormInput
            icon={<User size={18} />}
            labelText={"Confirmar Contraseña"}
            inputType={"password"}
            placeholder={"********"}
            value={formData.confirmarContrasenia}
            onChangeFn={(e) =>
              setFormData({ ...formData, confirmarContrasenia: e.target.value })
            }
          />
          <FormInput
            icon={<Calendar size={18} />}
            labelText={"Fecha Nacimiento"}
            inputType={"Date"}
            placeholder={"10/01/2007"}
            value={formData.fechaNacimiento}
            onChangeFn={(e) =>
              setFormData({ ...formData, fechaNacimiento: e.target.value })
            }
          />
          <div className="flex flex-row justify-center gap-4 pt-6">
            <button
              onClick={() => navigateToHome()}
              className="bg-orange-100 hover:bg-amber-100 text-amber-950 px-6 py-3 rounded-md flex items-center justify-center flex-1 text-center"
            >
              Volver
            </button>
            <button
              type="submit"
              className="bg-[#d6a770] hover:bg-orange-200 text-amber-950 px-6 py-3 rounded-md flex items-center justify-center flex-1 text-center"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
