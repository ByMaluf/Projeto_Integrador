import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiDetailsProducts } from "./service";
import { Product } from './types';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatPrice } from "../../utils/format-price";

export default function Details() {
  const params = useParams();
  const id = params?.id;

  const [detailsProducts, setDetailsProducts] = useState<Product>({} as Product);
  const [LoadingProducts, setLoadingProducts] = useState(false);

  async function getDetailsProducts() {
    setLoadingProducts(true);
    try {
      const response = await getApiDetailsProducts(id!);
      setDetailsProducts(response.data);
      console.log(detailsProducts);
    } catch (error) {
      toast.error('Erro ao carregar os detalhes do produto: ' + error.message);
    }
    setLoadingProducts(false);
  }

  useEffect(() => {
    getDetailsProducts();
  }, []);

  return (
    <UserTemplate>
      <ToastContainer />
      <h1 className="text-[30px]">{detailsProducts.name}</h1>
      <div className="flex mt-10 gap-10 justify-center">
        <div className="w-[40%]">
          <Carousel showThumbs={false}>
            <div>
              <img src={detailsProducts.url1} alt="Legend 1" />
            </div>
            <div>
              <img src={detailsProducts.url2} alt="Legend 2" />
            </div>
          </Carousel>
        </div>

        <div>
          <div className="shadow-sm bg-white px-10 py-2">
            <p>Informações do Vendedor</p>
            <p>{detailsProducts.user?.name ?? ''}</p>
            <p>{detailsProducts.user?.city} {detailsProducts.user?.state}</p>
            <p>Email: {detailsProducts.user?.email}</p>
            <p>Telefone: {detailsProducts.user?.phone}</p>
          </div>
          <div className="shadow-sm mt-4 bg-white px-10 py-2">
            <p className="text-[30px]">{formatPrice(detailsProducts.price)} </p>
          </div>
        </div>
      </div>

      <h3 className="mt-10 text-[20px]">Detalhes do Produto</h3>
      <div className="mt-10">
        <p>{detailsProducts.description?.replace(/<\/?p>/g, '')}</p>
      </div>
    </UserTemplate>
  );
}
