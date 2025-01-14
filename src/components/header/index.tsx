import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-primary flex justify-between items-center p-2">
      <Link to={'/'}><h1 className="text-white text-[30px]">UnyBay</h1></Link>
      <ul className="flex gap-5 items-center text-white">
        <li> <Link to={'/'}> Home </Link></li>
        <li> <Link to={'/identity'}> Quem somos </Link></li>
        <li>
          <button className="bg-secondary px-8 py-2 rounded-md transition-all hover:bg-orange-500">Entrar</button>
        </li>
      </ul>
    </div>
  );
}