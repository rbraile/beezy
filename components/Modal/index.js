import React from 'react';
import {
  ModalBack,
  ModalContainer,
  ModalClose,
  ActionsContainer,
  BtnAcept,
  BtnCancel
} from './styled';

const Modal = (props) => {
  const { onClose, show, action, value } = props;
  return (
    <ModalBack mounted={show} >
      <ModalContainer mounted={show}>
        <ModalClose onClick={() => onClose()} />
          <p>Estas seguro de que quieres borrar este Delivery?</p>
          {
            action && 
              <ActionsContainer>
                <BtnAcept onClick={()=>action(value)}>
                  Borrar
                </BtnAcept>
                <BtnCancel onClick={() => onClose()}>Cancelar</BtnCancel> 
              </ActionsContainer>
          }
      </ModalContainer>
    </ModalBack>
);
}

export default Modal;
