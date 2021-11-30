import * as React from "react";
import Draggable from "react-draggable";

class DragModal extends React.Component {

    callParent() {
        return this.props.callback(this.props.modalId);
    }

    render() {
        return(
            <Draggable>
                <div className={'position-absolute card w-sm '.concat(this.props.bg)}
                     style={{top: this.props.top, left: this.props.left}}>
                    <div className="card-header d-flex justify-content-between">
                            Hello
                            <button type="button" className={"btn btn-close"} onClick={() => this.callParent()}/>
                    </div>
                    <div className="card-body">
                        {this.props.message.status}
                    </div>
                </div>
            </Draggable>
        )
    }

}

export {DragModal}
