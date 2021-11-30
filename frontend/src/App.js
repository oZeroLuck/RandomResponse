import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import './App.css';
import {Container} from "reactstrap";
import {DragModal} from "./component/drag-modal";

function App() {

    const [counter, setCounter] = useState(0);
    const [modals, setModals] = useState(new Map());
    const [multiple, setMultiple] = useState(0);

    function createModal() {
        console.log("Calling")
        fetch("http://localhost:666/random/response")
            .then((result) => {
                result.json().then(json => {
                    const temp = new Map(modals);
                    temp.set(counter, generateRandom(json));
                    setModals(temp);
                    setCounter(counter + 1);
                    console.log(json)
                    }
                )
            })

    }

    function generateRandom(status) {
        console.log(status)
        const top = Math.random()*90 + '%';
        const left = Math.random()*90 + '%';
        const color = getColor();

        return  {top: top, left: left, bg: color, message: status};
    }

    function closeAll() {
        setModals(new Map());
        setCounter(0);
    }

    function closeById(id) {
        const temp = new Map(modals);
        temp.delete(id);
        if (temp.size === 0) {
            setCounter(0);
        }
        setModals(temp);
    }

    function handleChange(event) {
        setMultiple(event.target.value);
    }

    function generateMultiple() {
        if (multiple > 0) {
            const max = multiple + counter;
            const temp = new Map();
            fetch(`http://localhost:666/random/response/multiple/${multiple}`).then(
                (response) => {
                    response.json().then(x => {
                        console.log(x)
                        for (let i = counter; i <= max; i++) {
                            const temp2 = x[i - counter];
                            temp.set(i, generateRandom(temp2));
                        }
                        setModals(new Map([...modals, ...temp]));
                        setCounter(max - 1);
                        setMultiple(0);
                    })
                }
            )
        }
        setMultiple(0);
    }

    function getColor() {
        const random = Math.floor(Math.random()*5);
        switch (random) {
            case 0: return 'bg-primary';
            case 1: return 'bg-success';
            case 2: return 'bg-warning';
            case 3: return 'bg-danger';
            case 4: return 'bg-secondary';
        }
    }

    return (
        <div className="App">
            <Container>
                <button className="btn btn-outline-success" type={"button"} onClick={() => createModal()}>Create Modal</button>
                <button className="btn btn-outline-danger" type={"button"} onClick={() => closeAll()}>Close All</button>
                <input type={"number"} value={multiple} onChange={handleChange}/>
                <button className="btn btn-outline-dark" type={"button"} onClick={() => generateMultiple()}>Generate Multiple</button>
                {modals.size > 0 ? Array.from(modals.entries()).map((v,)=> {
                    return (
                        <DragModal key={v[0]}
                            modalId={v[0]}
                            top={v[1].top}
                            left={v[1].left}
                            bg={v[1].bg}
                            message={v[1].message}
                            callback={closeById}/>
                    )}) : null
                }
            </Container>
        </div>
    );
}

export default App;