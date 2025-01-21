import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiDetailsProducts } from "./service";
import { Product } from './types';

export default function Details() {


  const params = useParams();
  const id = params?.id;

  const [detailsProducts, setDetailsProducts] = useState<Product>({} as Product);
  const [LoadingProducts, setLoadingProducts] = useState(false);

  async function getDetailsProducts() {
    setLoadingProducts(true);
    try {
      const reponse = await getApiDetailsProducts(id!);
      setDetailsProducts(reponse.data);
      console.log(detailsProducts)
    } catch (error) {
      alert('Deu erro' + error)
    }
    setLoadingProducts(false)
  }

  useEffect(() => {
    getDetailsProducts();
  }, [])

  return (
    <UserTemplate>
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
            <p>Wesley Bruno Barbosa Silva</p>
            <p>Porteirinha MG</p>
            <p>Email: email@gmail.com</p>
            <p>Telefone: (67 91111-1111)</p>
          </div>
          <div className="shadow-sm mt-4 bg-white px-10 py-2">
            <p className="text-[30px]">R$ {detailsProducts.price} </p>
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