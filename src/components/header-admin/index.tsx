import { Link } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <div className="bg-primary flex justify-between items-center p-2">
      <Link to={'/'}><h1 className="text-white text-[30px] font-bold">UnyBay</h1></Link>
      <ul className="flex gap-5 items-center text-white">
        <li> <Link to={'/'}> Home </Link></li>
        <li> <Link to={'/identity'}> Quem somos </Link></li>
        <li>
          <Link to={'/'}><button className="">Sair</button></Link>
        </li>
        <li>
          <Link to={'/my-products'}><button className="bg-white px-8 py-2 rounded-md transition-all text-secondary">Anunciar</button></Link>
        </li>
      </ul>
    </div>
  );
}