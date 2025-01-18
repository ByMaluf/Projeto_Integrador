import { Link, useNavigate } from 'react-router-dom';
import img_product from '../../assets/product.png';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Modal from 'react-modal';
import { useState } from 'react';

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

export default function CardProductAdmin() {
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <div>
      <Link to={'/products/details'} className='shadow-md rounded-md p-6 flex flex-col justify-center items-center'>
        <h1 className=''>Nome do Produto</h1>
        <img src={img_product} alt="Produto" className='w-[100px] mt-2' />

        <div className='flex gap-3 flex-col'>
          <div className='flex items-center justify-between'>
            <p className='w-full'>Amazon</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate('/form-product');
              }}
            >
              <AiOutlineEdit size={25} />
            </button>
          </div>
          <div className='flex items-center justify-between'>
            <p className='w-full text-[24px]'>R$ 799,99</p>
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
              closeModal();
            }}>Sim</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
