import { Modal, Overlay } from '../eventCardComponents/eventCard.style';
import { ModalExit, ModalText } from './registerModal.styles';

export const RegisterModal = ({ isClose }) => {
  return (
    <>
      <Overlay>
        <Modal>
          <ModalText>Coming Soon!!!</ModalText>
          <ModalExit className='text-4xl' onClick={isClose}>
            close
          </ModalExit>
        </Modal>
      </Overlay>
    </>
  );
};
