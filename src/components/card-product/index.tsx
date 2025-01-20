import { Link } from 'react-router-dom';
import img_product from '../../assets/product.png';
import { CardProps } from './types';

export default function CardProduct(props: CardProps) {
  return (
    <Link to={'/products/details'} className='shadow-md rounded-md p-10 flex flex-col justify-center items-center flex-1'>
      <h1 className=''>{props.name}</h1>
      <img src={props.img} alt="Produto" className='w-[100px] mt-2' />
      <p className='w-full mt-3'>{props.manufacturer}</p>
      <p className='w-full text-[25px]'>R$ {props.price}</p>
    </Link>
  );
} 