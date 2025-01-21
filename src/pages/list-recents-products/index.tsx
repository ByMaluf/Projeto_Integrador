import { useEffect, useState } from "react";
import CardProduct from "../../components/card-product";
import UserTemplate from "../../templates/user-template";
import { getApiAllProductsRecents } from './service';
import { Product } from "./types";
import ListLoading from "../../components/list-loading";

export default function ListRecentsProducts() {

  const [allRecentsProducts, setAllRecentsProducts] = useState<Product[]>([])
  const [LoadingAllRecentsProducts, setAllLoadingRecentsProducts] = useState(false);

  async function getAllRecentsProducts() {
    try {
      setAllLoadingRecentsProducts(true);
      const response = await getApiAllProductsRecents();
      setAllRecentsProducts(response.data);
    } catch (error) {
      alert('Deu erro' + error)
    }
    setAllLoadingRecentsProducts(false);
  }

  useEffect(() => {
    getAllRecentsProducts();
  }, [])

  return (
    <UserTemplate>
      <h1>Itens Recents</h1>
      {LoadingAllRecentsProducts && <ListLoading />}
      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-[10px]">
        {allRecentsProducts.map((product) =>
          <CardProduct
            key={product._id}
            name={product.name}
            manufacturer={product.manufacturer}
            img={product.url1}
            price={product.price} />
        )}
      </div>
    </UserTemplate>
  );
}