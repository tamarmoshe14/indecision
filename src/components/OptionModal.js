import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>(
    <Modal 
    isOpen={!!props.selectedOption} 
    contentLabel="selected option" 
    onRequestClose={props.handleCloseButton}
    closeTimeoutMS={700}
    className="modal">
    <h3 className="modal__title">selected option:</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleCloseButton}>Got it, close</button>
    
    </Modal>
);

export default OptionModal;