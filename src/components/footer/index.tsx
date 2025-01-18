import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-primary text-white py-10 px-10">
      <div className="flex justify-between items-center">
        <h2 className="text-[22px] font-bold mb-5">UnyBay</h2>
        <Link to={'/contact-us'}><p>Fale conosco</p></Link>
      </div>
      <p className="text-center">Unyleya Educacional | Todos os direitos reservados</p>
      <div className="flex justify-center gap-2 mt-[20px]">
        <BsLinkedin />
        <BsFacebook />
      </div>
    </footer>
  );
}