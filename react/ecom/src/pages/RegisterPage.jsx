import { useForm } from "react-hook-form"


export default function RegisterPage() {
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data);


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="flex flex-col gap-2 w-[350px] m-auto p-5" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="">Name
      <input className="border" placeholder="enter your name" {...register("username",{required:"name is required"})} />
      </label>
      {errors.username && <span style={{color:"red"}}>{errors.username.message}</span>}


      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="">Email
      <input className="border" {...register("email", { required:" email is required",pattern:{
        value:/^[A-Za-z0-9]+@[A-Z0-9a-z]+\.[A-za-z]{2,}/,
        message:"invalid email address"
      } })} />
      </label>
      {/* errors will return when field validation fails  */}
      {errors.email && <span style={{color:"red"}}>{errors.email.message}</span>}

        <label htmlFor="">Password
      <input className="border" {...register("password", { required:" password is required",pattern:{
        value:/^(?=.[a-zA-z])(?=.[0-9])(?=.[@#$%^&!*])/,
        message:"invalid password"
      },
      minLength:{value:6,message:"must be 6 character"}
       })} />
      </label>
      {errors.password && <span style={{color:"red"}}>{errors.password.message}</span>}


      <input type="submit" />
    </form>
  )
}