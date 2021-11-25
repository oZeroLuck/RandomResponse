import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './App.css';
import {Container} from "reactstrap";
import {DragModal} from "./component/drag-modal";

function App() {

    const [counter, setCounter] = useState(0);
    const [modals, setModals] = useState([]);

    function createModal() {
        const top = Math.random()*90 + '%';
        const left = Math.random()*90 + '%';

        const temp = [];
        modals.forEach(x => temp.push(x))
        temp.push({index: counter,
            item: <DragModal modalId={counter}
                             top={top}
                             left={left}
                             close={closeById}/>});
        setModals(temp);
        setCounter(counter + 1);
    }

    function closeAll() {
        setModals([]);
        setCounter(0);
    }

    function closeById(id) {
        console.log(id);
        const temp = [];
        modals.forEach(x => temp.push(x));
        temp.filter(function (x) {
           return  x.id !== id;
        });
        setModals(temp);
    }

    return (
        <div className="App">
            <Container>
                <button className="z-999" type={"button"} onClick={() => createModal()}>Create Modal</button>
                <button className="z-999" type={"button"} onClick={() => closeAll()}>Close All</button>
                {modals.length > 0 ? modals.map(item => {
                    return (
                        item.item
                    )
                }) : null
                }
            </Container>
        </div>
    );
}

export default App;