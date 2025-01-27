import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { saveApiProduct } from './service';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthSessionStore } from '../../hooks/use-auth-session';
import { ProductForm } from './type';

const schemaValidation = Yup.object().shape({
  name: Yup.string().required('O nome do produto é obrigatório.'),
  manufacturer: Yup.string().required('O fabricante é obrigatório.'),
  category: Yup.string().required('A categoria é obrigatória.'),
  price: Yup.number().required('O preço é obrigatório.').positive('O preço deve ser um valor numérico.'),
  url1: Yup.string().url('Digite uma URL válida para a imagem.').required('A URL da imagem é obrigatória.'),
  url2: Yup.string().url('Digite uma URL válida para a segunda imagem.').required('A URL da segunda imagem é obrigatória.'),
});

export default function FormProduct() {
  const [value, setValue] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<ProductForm>({ resolver: yupResolver(schemaValidation) });
  const { token } = useAuthSessionStore();

  async function createProduct(values: ProductForm) {
    try {
      await saveApiProduct({ ...values, description: value }, token);
      toast.success('Produto cadastrado com sucesso');
    } catch (error) {
      toast.error('Não foi possível cadastrar o Produto.' + error)
    }
  }

  return (
    <div>
      <ToastContainer />
      <h1 className='text-center text-[25px] font-bold'>Cadastrar produto</h1>
      <form className='shadow-lg p-5 rounded-lg w-[800px]' onSubmit={handleSubmit(createProduct)}>
        <p>Preencha todos os campos abaixo</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
              placeholder='Nome do Produto'
              {...register('name')}
              type="text"
            />
            {errors.name && <span className='text-red-700'>{errors.name.message}</span>}
          </div>

          <div>
            <input
              className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
              placeholder='Fabricante'
              {...register('manufacturer')}
              type="text"
            />
            {errors.manufacturer && <span className='text-red-700'>{errors.manufacturer.message}</span>}
          </div>

          <div>
            <select
              className='bg-white w-full border-2 h-[40px] px-2 rounded-md mt-2'
              {...register('category')}
            >
              <option value="">Selecione a Categoria</option>
              <option value="eletronicos">Jogos</option>
              <option value="roupas">Roupas</option>
              <option value="alimentos">Veículos</option>
            </select>
            {errors.category && <span className='text-red-700'>{errors.category.message}</span>}
          </div>

          <div>
            <input
              className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
              placeholder='Preço'
              {...register('price')}
              type="number"
            />
            {errors.price && <span className='text-red-700'>{errors.price.message}</span>}
          </div>

          <div>
            <input
              className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
              placeholder='URL da Imagem'
              {...register('url1')}
              type="text"
            />
            {errors.url1 && <span className='text-red-700'>{errors.url1.message}</span>}
          </div>

          <div>
            <input
              className='w-full border-2 h-[40px] px-2 rounded-md mt-2'
              placeholder='URL 2 da Imagem'
              {...register('url2')}
              type="text"
            />
            {errors.url2 && <span className='text-red-700'>{errors.url2.message}</span>}
          </div>
        </div>
        <ReactQuill
          theme="snow"
          value={value}
          style={{ height: 500, marginTop: 10, marginBottom: 50 }}
          onChange={setValue}
        />
        <div className='text-right'>
          <button type='submit' className='rounded-md px-10 py-2 bg-primary text-white mr-5'>Salvar</button>
          <Link to={'/my-products'}><button className='rounded-md px-10 py-2 border border-bg-primay'>Cancelar</button></Link>
        </div>
      </form>
    </div>
  );
}
