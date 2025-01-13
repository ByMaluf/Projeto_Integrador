export default function Header() {
  return (
    <div className="bg-primary flex justify-between items-center p-2">
      <h1 className="text-white text-[30px]">UnyBay</h1>
      <ul className="flex gap-5 items-center text-white">
        <li>Home</li>
        <li>Quem somos</li>
        <li>
          <button className="bg-secondary px-8 py-2 rounded-md">Entrar</button>
        </li>
      </ul>
    </div>
  );
}