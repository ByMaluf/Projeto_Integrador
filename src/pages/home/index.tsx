import UserTemplate from "../../templates/user-template";
import { toast, ToastContainer } from 'react-toastify';
import CardProduct from '../../components/card-product/index';
import { LuGamepad2 } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { AiFillCar, AiOutlineGift, AiOutlineSync } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../../assets/Carousel1.png'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApiRecentsProducts, getApiRecommendedsProducts } from "./services";
import { Product } from "./types";
import ListLoading from '../../components/list-loading/index';
import { useAuthSessionStore } from "../../hooks/use-auth-session";

const itensCategory = [
  {
    id: 0,
    title: 'Jogos',
    icon: <LuGamepad2 size={24} color="#888" />
  },
  {
    id: 1,
    title: 'Roupas',
    icon: <GiClothes size={24} color="#888" />
  },
  {
    id: 2,
    title: 'Veículos',
    icon: <AiFillCar size={24} color="#888" />
  },
  {
    id: 3,
    title: 'Ferramentas',
    icon: <FaTools size={24} color="#888" />
  },
  {
    id: 4,
    title: 'Comidas',
    icon: <IoFastFoodOutline size={24} color="#888" />
  },
  {
    id: 5,
    title: 'Presentes',
    icon: <AiOutlineGift size={24} color="#888" />
  },
  {
    id: 6,
    title: 'Outros',
    icon: <AiOutlineSync size={24} color="#888" />
  },
]

export default function Home() {

  const { token } = useAuthSessionStore();
  const navigate = useNavigate();
  const [recentsProducts, setRecentsProducts] = useState<Product[]>([])
  const [inputSearch, setInputSearch] = useState("");

  const [recommendedsProducts, setRecommendedsProducts] = useState<Product[]>([])
  const [LoadingRecentsProducts, setLoadingRecentsProducts] = useState(false);
  const [LoadingRecommendedsProducts, setLoadingRecommendedsProducts] = useState(false);

  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
  }, []);

  async function getRecentsProducts() {
    try {
      setLoadingRecentsProducts(true)
      const response = await getApiRecentsProducts();
      setRecentsProducts(response.data)
    } catch (error) {
      toast.error('Erro ao carregar produtos recentes: ' + error);
    }
    setLoadingRecentsProducts(false);
  }

  async function getRecommendedsProducts() {
    try {
      setLoadingRecommendedsProducts(true)
      const response = await getApiRecommendedsProducts();
      setRecommendedsProducts(response.data)
    } catch (error) {
      toast.error('Erro ao carregar produtos recomendados: ' + error);
    }
    setLoadingRecommendedsProducts(false)
  }

  useEffect(() => {
    getRecentsProducts();
    getRecommendedsProducts();
  }, [])

  return (
    <UserTemplate>
      <div className="max-w-[100%] self-center">
        <Carousel showThumbs={false}>
          <div>
            <img src={Carousel1} alt="Legend 1" />
          </div>
          <div>
            <img src={Carousel1} alt="Legend 2" />
          </div>
          <div>
            <img src={Carousel1} alt="Legend 3" />
          </div>
        </Carousel>

        <div className="flex border-2 h-[45px] rounded-md items-center mt-10">
          <input onChange={(e) => setInputSearch(e?.target.value)} type="text" className="flex-1 h-full p-3" placeholder="Estou buscando por..." />
          <button onClick={() => navigate(`/products/search/${inputSearch}`)} className="px-4">
            <IoSearch size={30} />
          </button>
        </div>
      </div>

      <h2 className="mt-[50px]">Itens recentes</h2>
      {LoadingRecentsProducts && <ListLoading />}
      <div className="flex flex-wrap justify-around">
        {/* {Array(4).fill(4).map((_, index) => (
          <CardProduct key={index} />
        ))} */}
        {recentsProducts.map((product) =>
          <CardProduct
            key={product._id}
            id={product._id}
            name={product.name}
            manufacturer={product.manufacturer}
            img={product.url1}
            price={product.price} />
        )}
      </div>

      <Link to={'/all-recents-products'}>
        <p className="mt-4">Ver todos os produtos recentes</p>
      </Link>

      <div className="bg-primary p-10 rounded-lg mt-[50px]">
        <h2 className="text-white text-[20px] mb-5">Categorias</h2>
        <div className="flex justify-between px-[10%]">
          {itensCategory.map((category) =>
            <div className="flex flex-col justify-center items-center gap-2" key={category.id}>
              <Link to={'/products/search'}>
                <div className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center">{category.icon}</div>
              </Link>
              <span className="text-white">{category.title}</span>
            </div>
          )}
        </div>
      </div>

      <h2 className="mt-[50px]">Anúncios</h2>
      {LoadingRecommendedsProducts && <ListLoading />}
      <div className="flex flex-wrap justify-around">
        {/* {Array(4).fill(4).map((_, index) => (
          <CardProduct key={index} />
        ))} */}

        {recommendedsProducts.map((product) =>
          <CardProduct
            key={product._id}
            id={product._id}
            name={product.name}
            manufacturer={product.manufacturer}
            img={product.url1}
            price={product.price} />
        )}
      </div>
      <Link to={'/all-products'}>
        <p className="mt-4">Ver todos os produtos</p>
      </Link>
      <ToastContainer />
    </UserTemplate >
  );
}