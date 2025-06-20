import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import firstCode from '../assets/My-first-code.jpg'; // Rasmingizni shu manzilda saqlang


function ModalFullscreenExample(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div >
      <Button color="success" onClick={toggle} className='fw-bolder ' >
       TO'LIQ KO'RISH
      </Button>
      <Modal   isOpen={modal} toggle={toggle} fullscreen>
        <ModalHeader toggle={toggle} className='bg-dark text-light'><span  className='text-center d-flex justify-content-center fs-3 fw-bolder text-capitalize' style={{width:'100%', alignContent:'center', position:'relative', right:'-650px'}}>Eng birinchi yozgan kodim!🫡</span></ModalHeader>
        <ModalBody>
          <img src={firstCode} alt="First_code_i_ever_wrote" />
        </ModalBody>
        <ModalFooter className='bg-dark text-light'>
         
          <Button color="secondary" onClick={toggle} className='fw-bolder bg-danger ' justify-center>
            QAYTISH
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample;