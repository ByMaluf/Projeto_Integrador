import { useParams } from "react-router-dom";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiProductsByName } from "./service";
import { useEffect, useState } from "react";
import { Product } from "./types";
import ListLoading from "../../components/list-loading";

export default function SearchProduct() {


  const params = useParams();
  const nameProduct = params?.product;

  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [LoadingProducts, setLoadingProducts] = useState(false);

  async function getProductsByName() {
    setLoadingProducts(true);
    try {
      const reponse = await getApiProductsByName(nameProduct!);
      setAllProducts(reponse.data);
    } catch (error) {
      alert('Deu erro' + error)
    }
    setLoadingProducts(false)
  }

  useEffect(() => {
    getProductsByName();
  }, [])

  return (
    <UserTemplate>
      <h1>Resultado da busca</h1>
      {LoadingProducts && <ListLoading />}
      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-[10px]">
        {allProducts.map((product) =>
          <CardProduct
            key={product._id}
            name={product.name}
            manufacturer={product.manufacturer}
            img={product.url1}
            price={product.price} />
        )}
      </div>

      <p>Total: {allProducts.length} itens</p>
    </UserTemplate>
  );
}