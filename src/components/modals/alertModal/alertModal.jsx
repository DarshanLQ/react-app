import "./alertModal.css";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AlertModal = ({ show, handleClick, header, content }) => {
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClick}>
          Go To Liquid.Diamonds
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertModal;
