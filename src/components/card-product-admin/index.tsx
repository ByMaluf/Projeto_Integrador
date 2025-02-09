import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Modal from 'react-modal';
import { useState } from 'react';
import { CardProps } from './types';
import { removeApiProduct } from './service';
import { toast } from 'react-toastify';
import { useAuthSessionStore } from '../../hooks/use-auth-session';
import { getApiMyProducts } from '../../pages/user-products/services';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backdropFilter: 'blur(5px)',
  },
};

Modal.setAppElement('#root');

export default function CardProductAdmin(props: CardProps) {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { token } = useAuthSessionStore();

  function openModal() {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  async function removeProduct() {
    try {
      await removeApiProduct(props.id!, token);
      const response = await getApiMyProducts(token);
      props.setMyProducts(response.data);
      toast.success('Produto excluído com sucesso!')
    } catch (error) {
      toast.error('Não foi possível excluir o produto.' + error)
    }
  }

  return (
    <div>
      <Link to={`/products/details/${props.id!}`} className='shadow-md rounded-md p-6 flex flex-col justify-between items-center h-[100%]'>
        <h1 className=''>{props.name}</h1>
        <img src={props.img} alt="Produto" className='w-[100px] mt-2' />

        <div className='flex gap-3 flex-col'>
          <div className='flex items-center justify-between'>
            <p className='w-full'>{props.manufacturer}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate(`/form-product-edit/${props.id}`);
              }}
            >
              <AiOutlineEdit size={25} />
            </button>
          </div>
          <div className='flex items-center justify-between'>
            <p className='w-full text-[24px]'>{props.price}</p>
            <button onClick={(e) => {
              e.preventDefault();
              e.stopPropagation()
              openModal();
            }}>
              <AiOutlineDelete size={25} />
            </button>
          </div>
        </div>
      </Link>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Confirmar Exclusão"
      >
        <div className='flex justify-center items-center gap-4 flex-col w-[300px]'>
          <h1 className='text-[20px] font-ubuntu'>Excluir Produto</h1>
          <p className='text=[20px]'>Deseja realmente excluir o item?</p>
          <div className='text-center'>
            <button className='rounded-md px-10 py-2 bg-primary text-white mr-5' onClick={closeModal}>Não</button>
            <button className='rounded-md px-10 py-2 border border-bg-primay' onClick={() => {
              removeProduct();
              closeModal();
            }}>Sim</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
