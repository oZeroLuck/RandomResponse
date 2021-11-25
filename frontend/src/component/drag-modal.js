import * as React from "react";
import Draggable from "react-draggable";

class DragModal extends React.Component {

    render() {
        return(
            <Draggable>
                <div className="position-absolute card w-sm bg-info"
                     style={{top: this.props.top, left: this.props.left}}>
                    <div className="card-header d-flex justify-content-between">
                            Hello
                            <button type="button" className={"btn btn-close"} onClick={() => this.props.close(this.props.modalId)}/>
                    </div>
                    <div className="card-body">
                        Hello
                    </div>
                </div>
            </Draggable>
        )
    }

}

export {DragModal}
