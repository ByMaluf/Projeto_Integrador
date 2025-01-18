import { Link } from 'react-router-dom';
import CardProductAdmin from '../../components/card-product-admin';
export default function UserProducts() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1>Anúncios</h1>
        <Link to={'/form-product'}><button className='text-white rounded-md bg-secondary px-8 py-2'>Criar Anúncio</button></Link>
      </div>

      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-[10px]">
        {Array.from({ length: 10 }).map(() => <CardProductAdmin />)}
      </div>

      <p className='text-right'>Total: 4 itens</p>
    </div>
  );
}