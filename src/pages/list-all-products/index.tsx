import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllProducts, getApiAllProductsOrdered } from './service';
import { Product } from "./types";
import ListLoading from "../../components/list-loading";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ListAllProducts() {

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [LoadingAllProducts, setAllLoadingProducts] = useState(false);

  async function getAllProducts() {
    try {
      setAllLoadingProducts(true);
      const response = await getApiAllProducts();
      setAllProducts(response.data);
    } catch (error) {
      toast.error('Erro ao carregar todos os produtos: ' + error.message);
    }
    setAllLoadingProducts(false);
  }

  async function getAllOrderProducts(typeOrder: "descending" | "ascending") {
    try {
      setAllProducts([]);
      setAllLoadingProducts(true);
      const response = await getApiAllProductsOrdered(typeOrder);
      setAllProducts(response.data);
    } catch (error) {
      toast.error('Erro ao ordenar os produtos: ' + error.message);
    }
    setAllLoadingProducts(false);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <UserTemplate>
      <ToastContainer />
      <h1>Todos os Produtos</h1>

      <div>
        <p>Ordenar por:
          <button onClick={() => getAllOrderProducts('ascending')} className="text-primary">Menor preço</button>
          <button onClick={() => getAllOrderProducts('descending')} className="text-primary">Maior preço</button>
        </p>
      </div>
      
      {LoadingAllProducts && <ListLoading />}
      
      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-[10px]">
        {allProducts.map((product) =>
          <CardProduct
            key={product._id}
            id={product._id}
            name={product.name}
            manufacturer={product.manufacturer}
            img={product.url1}
            price={product.price} />
        )}
      </div>
    </UserTemplate>
  );
}
