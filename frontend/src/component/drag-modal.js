import {Modal, ModalBody, ModalHeader} from "reactstrap";
import * as React from "react";

class DragModal extends React.Component {

    render() {
        return(
            <Modal isOpen={true}>
                <ModalHeader>Hello</ModalHeader>
                <ModalBody>Hello</ModalBody>
            </Modal>
        )
    }

}

export {DragModal}
