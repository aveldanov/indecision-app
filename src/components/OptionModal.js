import React from 'react';
import Modal from 'react-modal';

//onRequestClose - Modal closes when click on background

const OptionModal = (props) => (
  //console.log(handleCloseModal)
  < Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={200}
    className="modal"
  >

    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClearSelectedOption}>OK</button>


  </Modal >
)

export default OptionModal;

