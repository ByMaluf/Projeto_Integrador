import { Carousel } from "react-responsive-carousel";
import UserTemplate from "../../templates/user-template";
import Carousel1 from '../../assets/Carousel1.png'

export default function Details() {
  return (
    <UserTemplate>
      <h1 className="text-[30px]">Echo Dot (8ª Geração)</h1>
      <div className="flex mt-10 gap-10 justify-center">
        <div className="w-[40%]">
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
            <p className="text-[30px]">R$ 799,00</p>
          </div>
        </div>
      </div>

      <h3 className="mt-10 text-[20px]">Detalhes do Produto</h3>
      <div className="mt-10">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In nihil soluta saepe officia itaque dolores eos omnis provident ab, quas esse nobis eum praesentium veritatis, et debitis, repellendus corrupti repellat?
          Ex hic tempore ipsam, animi optio iure accusantium labore suscipit in at voluptatem quidem sit ad necessitatibus qui maiores quisquam maxime incidunt facilis illo magnam tempora amet architecto saepe. Nulla.

          Expedita aliquam aliquid ducimus praesentium ex asperiores et, suscipit itaque corrupti quae? Quo mollitia facere nisi quod porro molestias quos aperiam quasi voluptate sed, sit delectus, blanditiis cupiditate atque eius!

          Culpa, nobis? Maxime magnam voluptates, excepturi, minima eligendi itaque sint, officiis provident laboriosam ut mollitia? Sint mollitia distinctio deleniti exercitationem earum sapiente? Temporibus sint consequatur deleniti perspiciatis impedit ratione saepe?
        </p>
      </div>
    </UserTemplate>
  );
}