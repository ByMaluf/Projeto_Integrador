import { Link } from 'react-router-dom';
import CardProductAdmin from '../../components/card-product-admin';
import { getApiMyProducts } from './services';
import { useAuthSessionStore } from '../../hooks/use-auth-session';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Product } from './types';
export default function UserProducts() {

  const [myProducts, setMyProducts] = useState<Product[]>([]);
  // const [LoadingMyProducts, setLoadingMyProducts] = useState(false);
  const { token } = useAuthSessionStore()


  async function getMyProducts() {
    try {
      // setLoadingMyProducts(true);
      const response = await getApiMyProducts(token);
      setMyProducts(response.data);
    } catch (error) {
      toast.error('Erro ao buscar produtos do usuário ' + error);
    }
    // setLoadingMyProducts(false);
  }

  useEffect(() => {
    getMyProducts();
  }, [])

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1>Anúncios</h1>
        <Link to={'/form-product'}><button className='text-white rounded-md bg-secondary px-8 py-2'>Criar Anúncio</button></Link>
      </div>

      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-[10px]">
        {myProducts.map((product) => <CardProductAdmin
          id={product._id}
          img={product.url1}
          name={product.name}
          price={product.price}
          manufacturer={product.manufacturer}
          setMyProducts={setMyProducts}
        />)}
      </div>

      <p className='text-right'>Total: {myProducts.length}</p>
    </div>
  );
}