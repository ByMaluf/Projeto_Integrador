import UserTemplate from "../../templates/user-template";
import CardProduct from '../../components/card-product/index';
import { LuGamepad2 } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { AiFillCar, AiOutlineGift, AiOutlineSync } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { IoFastFoodOutline, IoSearch } from "react-icons/io5";
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../../assets/Carousel1.png'

const itensCategory = [
  {
    id: 0,
    title: 'Jogos',
    icon: <LuGamepad2 />
  },
  {
    id: 1,
    title: 'Roupas',
    icon: <GiClothes />
  },
  {
    id: 2,
    title: 'Veículos',
    icon: <AiFillCar />
  },
  {
    id: 3,
    title: 'Ferramentas',
    icon: <FaTools />
  },
  {
    id: 4,
    title: 'Comidas',
    icon: <IoFastFoodOutline />
  },
  {
    id: 5,
    title: 'Presentes',
    icon: <AiOutlineGift />
  },
  {
    id: 6,
    title: 'Outros',
    icon: <AiOutlineSync />
  },
]

export default function Home() {
  return (
    <UserTemplate>
      <div>
        <Carousel showThumbs={false}>
          <div>
            <img src={Carousel1} alt="Legend 1" />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div>
            <img src={Carousel1} alt="Legend 2" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div>
            <img src={Carousel1} alt="Legend 3" />
            {/* <p className="legend">Legend 3</p> */}
          </div>
        </Carousel>
      </div>

      <div className="flex border-2 h-[45px] rounded-md items-center mt-2">
        <input type="text" className="flex-1 h-full p-3" placeholder="Estou buscando por..." />
        <IoSearch size={30} />
      </div>

      <h2 className="mt-[50px]">Itens recentes</h2>
      <div className="flex flex-wrap justify-around">
        {Array(4).fill(4).map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>

      <p className="mt-4">Ver mais</p>

      <div className="bg-primary p-10 rounded-md mt-[50px]">
        <h2 className="text-white text-[20px] mb-5">Categorias</h2>
        <div className="flex justify-between px-[10%]">
          {itensCategory.map((category) =>
            <div className="flex flex-col justify-center items-center" key={category.id}>
              <div className="bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center">{category.icon}</div>
              <span className="text-white">{category.title}</span>
            </div>
          )}
        </div>
      </div>

      <h2 className="mt-[50px]">Anúncios</h2>
      <div className="flex flex-wrap justify-around">
        {Array(4).fill(4).map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>

      <p className="mt-4">Ver mais</p>
    </UserTemplate >
  );
}