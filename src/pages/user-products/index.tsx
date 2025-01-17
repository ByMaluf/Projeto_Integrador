import CardProduct from '../../components/card-product/index';
export default function UserProducts() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h1>Anúncios</h1>
        <button className='text-white rounded-md bg-secondary px-8 py-2'>Anunciar</button>
      </div>

      <div className="grid grid-4 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-[10px]">
        {Array.from({ length: 10 }).map(() => <CardProduct />)}
      </div>

      <p className='text-right'>Total: 4 itens</p>
    </div>
  );
}