import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import React, { Children, useState } from "react";

export default function ModalCom(props) {
  // const [open, setOpen] = useState(true);
  // const onClick = () => {
  //   setOpen(true);
  // };
  // const onClose = () => {
  //   setOpen(false);
  // };

  return (
    <React.Fragment>
      {/* <Button onClick={onClick}>Toggle modal</Button> */}
      <Modal
        show={props.isShow}
        size="lg"
        popup={true}
        onClose={props.setOpen}
        className="delay-200"
      >
        <Modal.Header />
        <Modal.Body>
          {props.children}
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}
