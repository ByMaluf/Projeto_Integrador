import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from 'react-hook-form';
import React from 'react';

type RegisterForm = {
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  password: string;
}

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('O campo é obrigatório'),
  email: Yup.string().email('Digite um email válido.').required('O campo é obrigatório.'),
  phone: Yup.string().required('O campo é obrigatório'),
  city: Yup.string().required('O campo é obrigatório'),
  state: Yup.string().required('O campo é obrigatório'),
  password: Yup.string().min(4, 'A senha deve ter no mínimo 4 caracteres.').required('O campo é obrigatório.')
})

export default function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({ resolver: yupResolver(schemaValidation) });

  function createUser(values: RegisterForm) {
    console.log(values)
  }

  return (
    <div>
      <form className='shadow-lg p-5 rounded-lg max-w-[500px]' onSubmit={handleSubmit(createUser)}>
        <h1 className='text-center text-[25px] font-bold'>UnyBay</h1>
        <p className='text-center my-3'>Cadastre-se</p>

        <React.Fragment>
          <input
            className='w-full border-2 h-[40px] px-2 rounded-md'
            placeholder='Digite seu Nome'
            {...register('name')}
            type="text"
          />
          {errors.name && <span className='text-red-700'>{errors.name.message}</span>}
        </React.Fragment>

        <React.Fragment>
          <input
            className='w-full border-2 h-[40px] mt-2 px-2 rounded-md'
            placeholder='Digite seu email'
            {...register('email')}
            type="text"
          />
          {errors.email && <span className='text-red-700'>{errors.email.message}</span>}
        </React.Fragment>

        <React.Fragment>
          <input
            className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
            placeholder='Digite seu Telefone'
            {...register('phone')}
            type="text"
          />
          {errors.phone && <span className='text-red-700'>{errors.phone.message}</span>}
        </React.Fragment>

        <React.Fragment>
          <input
            className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
            placeholder='Digite seu Cidade'
            {...register('city')}
            type="text"
          />
          {errors.city && <span className='text-red-700'>{errors.city.message}</span>}
        </React.Fragment>

        <React.Fragment>
          <input
            className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
            placeholder='Digite seu Estado'
            {...register('state')}
            type="text"
          />
          {errors.state && <span className='text-red-700'>{errors.state.message}</span>}
        </React.Fragment>

        <React.Fragment>
          <input
            className='w-full border-2 h-[40px] px-2 rounded-md mt-3'
            placeholder='Digite sua senha'
            {...register('password')}
            type="text"
          />
          {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
        </React.Fragment>
        <button className='rounded-md mt-4 bg-primary w-full h-[40px] text-white' type='submit'>Entrar</button>
      </form>
    </div>
  );
}