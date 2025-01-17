import { Link, useNavigate } from 'react-router-dom';
import img_product from '../../assets/product.png';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function CardProductAdmin() {

  const navigate = useNavigate();

  return (
    <Link to={'/products/details'} className='shadow-md rounded-md p-6 flex flex-col justify-center items-center'>
      <h1 className=''>Nome do Produto</h1>
      <img src={img_product} alt="Produto" className='w-[100px] mt-2' />

      <div className='flex gap-3 flex-col'>
        <div className='flex items-center justify-between'>
          <p className='w-full'>Amazon</p>
          <button
            onClick={(e) => {
              navigate('/form-product');
              e.preventDefault();
            }}
          >
            <AiOutlineEdit size={25} />
          </button>
        </div>
        <div className='flex items-center justify-between'>
          <p className='w-full text-[24px]'>R$ 799,99</p>
          <button onClick={(e) => {
            navigate('/form-product');
            e.preventDefault();
          }}>
            <AiOutlineDelete size={25} />
          </button>
        </div>
      </div>
    </Link>
  );
} 