import { Link, useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";
import { useAuthSessionStore } from "../../hooks/use-auth-session";
import { toast } from "react-toastify";

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

export default function HeaderAdmin() {

  const { clearToken } = useAuthSessionStore();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  function openModal() {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  async function logout() {
    clearToken()
    navigate('/')
    toast.success('Deslogado com sucesso')
  }

  return (
    <div className="bg-primary flex justify-between items-center p-2">
      <Link to={'/'}><h1 className="text-white text-[30px] font-bold">UnyBay</h1></Link>
      <ul className="flex gap-5 items-center text-white">
        <li> <Link to={'/'}> Home </Link></li>
        <li> <Link to={'/identity'}> Quem somos </Link></li>
        <li>
          <button onClick={() => openModal()} className="">Sair</button>
        </li>
        <li>
          <Link to={'/my-products'}><button className="bg-white px-8 py-2 rounded-md transition-all text-secondary">Anunciar</button></Link>
        </li>
      </ul>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Confirmar Exclusão"
      >
        <div className='flex justify-center items-center gap-4 flex-col w-[300px]'>
          <h1 className='text-[20px] font-ubuntu'>Confirmar Logout</h1>
          <p className='text=[20px]'>Deseja realmente sair?</p>
          <div className='text-center'>
            <button className='rounded-md px-10 py-2 bg-primary text-white mr-5' onClick={closeModal}>Não</button>
            <button className='rounded-md px-10 py-2 border border-bg-primay' onClick={() => {
              logout();
              closeModal();
            }}>Sim</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}