import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const FormComponent = () => {
  const navigate = useNavigate();

  const {
    register, 
    formState: {errors},
    handleSubmit
    }=useForm ();

  const clickBotonIniciar = handleSubmit((data) => {
    console.log(data);

  navigate("/HomePage");

  });

  return (
    <form onSubmit={clickBotonIniciar} className="container d-flex justify-content-center align-items-center">
      <div className="col-4 mt-5 card p-4 shadow m-auto">
        <h1 className="text-center mb-4">Inciar sesión</h1>
        <label htmlFor="txtUser">Usuario</label>
        <input
    

          className="form-control shadow-sm"
          type="text"
          placeholder="Usuario"
          id="txtUser"
          name="txtUser"
          {...register ("userName",{

            required:{value:true,message: "ingrese el usuario"},
            minLength: {                                                                   //minimo 10 caracteres
            value:10,
          message: 'El usuario debe tener minimo diez caracteres'
        },
          
        pattern:{
          value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
          message: 'Ingrese un correo valido'
        },
      })}
        />
        {
          errors.userName && (
          <span>El usuario es requerido</span>
          )
        }


        <label htmlFor="txtPass" className="mt-4">
          Contraseña
        </label>
        <input
          className="form-control mb-4 shadow-sm"
          type="password"
          placeholder="Contraseña"
          id="txtPass"
          name="txtPass"
          {...register ("password",{
            required:true,
            message: 'debes ingresar la constraseña',
          })}
        />
          {
          errors.password && (  //para campo obligatorio
          <span>ingresa una contraseña</span>
          )
        }



        <button className="btn btn-dark">
          Iniciar sesión
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
