import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import './App.css';
import {Container, Modal, ModalBody} from "reactstrap";
import Draggable from 'react-draggable';

function App() {

    const [modals, setModals] = useState([]);

    function createModal() {
        const temp = [];
        modals.forEach(x => temp.push(x))
        temp.push('a');
        setModals(temp);
    }

    useEffect(() => {
        console.log("effect", modals);
    })

    return (
        <div className="App">
            <Container>
                <button type={"button"} onClick={() => createModal()}>Create Modal</button>
                {modals.length > 0 ? modals.map(modal => {
                    return (
                            <Modal isOpen={true} backdrop={false}>
                                <ModalBody>Hello</ModalBody>
                            </Modal>
                    )
                }) : null
                }
            </Container>
        </div>
    );
}

export default App;
