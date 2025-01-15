import { useForm } from 'react-hook-form';
import React from 'react';

type LoginForm = {
  email: string;
  password: string;
}

export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  function logar(values: LoginForm) {
    console.log(values);
  }

  return (
    <div>
      <form className='shadow-lg p-5 rounded-lg max-w-[500px]' onSubmit={handleSubmit(logar)}>
        <h1 className='text-center text-[25px] font-bold'>UnyBay</h1>
        <p className='text-center my-3'>acesse sua conta</p>

        <React.Fragment>
          <input
            className='w-full border-2 h-[40px] px-2 rounded-md'
            placeholder='Digite seu email'
            {...register('email', { required: true })}
            type="text"
          />
          {errors.email && <span className='text-red-700'>Campo obrigatório</span>}
        </React.Fragment>

        <React.Fragment>
          <input
            className='w-full border-2 h-[40px] px-2 rounded-md mt-3'
            placeholder='Digite sua senha'
            {...register('password', { required: true })}
            type="text"
          />
          {errors.password && <span className='text-red-700'>Campo obrigatório</span>}
        </React.Fragment>
        <button className='rounded-md mt-4 bg-primary w-full h-[40px] text-white' type='submit'>Entrar</button>
      </form>
    </div>
  );
}