"use client";
import { useForm } from "react-hook-form";
import {useRouter} from 'next/navigation'
import {useState} from 'react'

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter()
  const [error, setError] = useState(null)
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">

        {error && (
          <p>{error}</p>
        )}

        <h1>Login</h1>
        <br />
        <label htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
         
          placeholder="user@email.com"
        />

        {errors.email && errors.email.message}
        <br />
        <label htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
         
          placeholder="******"
        />

        {errors.password && errors.password.message}
        <br />
        <button>
          Login
        </button>
      </form>
    </div>
  );
}
export default LoginPage;