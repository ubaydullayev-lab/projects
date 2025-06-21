import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firstCode from '../assets/My-first-code.jpg';
import { useTranslation } from 'react-i18next';

function ModalFullscreenExample(props) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const { t } = useTranslation();

  return (
    <div>
      <Button color="success" onClick={toggle} className='fw-bolder'>
        {t('modal.viewFull')}
      </Button>
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle} className='bg-dark text-light'>
          <span className='text-center d-flex justify-content-center fs-3 fw-bolder text-capitalize'
            style={{ width: '100%', position: 'relative', right: '-650px' }}>
            {t('modal.title')}
          </span>
        </ModalHeader>
        <ModalBody>
          <img src={firstCode} alt="First_code_i_ever_wrote" style={{ width: '100%' }} />
        </ModalBody>
        <ModalFooter className='bg-dark text-light'>
          <Button color="secondary" onClick={toggle} className='fw-bolder bg-danger'>
            {t('modal.back')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample;
