import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import { User, Mail, Lock } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    contrasenia: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    const result = await login(formData.email, formData.contrasenia);

    if (result.success) {
      toast.success("Inicio de sesión exitoso");
      if (result.data.user?.role === "admin" || result.data.user?.isAdmin) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } else {
      toast.error(result.error || "Error al iniciar sesión");
    }
  }

  function navigateToHome() {
    navigate(-1);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 px-4">
      {/* 🧡 Contenedor principal */}
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8 border border-amber-200">
        {/* Encabezado */}
        <h1 className="text-3xl font-bold text-center text-amber-900 mb-2">
          ¡Bienvenido de nuevo!
        </h1>
        <p className="text-center text-amber-700 mb-8">
          Iniciá sesión para continuar
        </p>

        {/* Formulario */}
        <form onSubmit={loginUser} className="space-y-5">
          <FormInput
            icon={<Mail size={18} />}
            labelText={"Correo electrónico"}
            inputType={"email"}
            placeholder={"ejemplo@gmail.com"}
            value={formData.email}
            onChangeFn={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <FormInput
            icon={<Lock size={18} />}
            labelText={"Contraseña"}
            inputType={"password"}
            placeholder={"********"}
            value={formData.contrasenia}
            onChangeFn={(e) =>
              setFormData({ ...formData, contrasenia: e.target.value })
            }
          />

          {/* Botones */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6">
            <button
              type="button"
              onClick={navigateToHome}
              className="w-full sm:w-1/2 bg-white border border-amber-800 text-amber-900 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-all"
            >
              Volver
            </button>

            <button
              type="submit"
              className="w-full sm:w-1/2 bg-gradient-to-r from-amber-800 to-[#d6a770] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
            >
              Ingresar
            </button>
          </div>
        </form>

        {/* Registro o mensaje adicional */}
        <p className="text-center text-sm text-amber-800 mt-8">
          ¿No tenés una cuenta?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#d6a770] font-semibold hover:underline cursor-pointer"
          >
            Registrate aquí
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
