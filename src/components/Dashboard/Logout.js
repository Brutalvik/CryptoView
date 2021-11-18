import React from 'react'
import Modal from 'react-bootstrap/Modal'

export default function Logout(props) {
    return (
        <div>
         <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Log Out</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 style={{textAlign: "center"}}>Are you sure you want to log out ?</h5>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.logout}>Logout</button>
      </Modal.Footer>
        </Modal>
        </div>
    )
}


