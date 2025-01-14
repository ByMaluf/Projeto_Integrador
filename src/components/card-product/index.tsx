import { Link } from 'react-router-dom';
import img_product from '../../assets/product.png';

export default function CardProduct() {
  return (
    <Link to={'/products/details'} className='shadow-md rounded-md p-10 flex flex-col justify-center items-center'>
      <h1 className=''>Nome do Produto</h1>
      <img src={img_product} alt="Produto" className='w-[100px] mt-2' />
      <p className='w-full mt-3'>Amazon</p>
      <p className='w-full text-[25px]'>R$ 799,99</p>
    </Link>
  );
} 