import React, {Component} from "react";

class Item extends Component {
    render() {
        const {onChangeActive,active,label,onDeleteItem,onChangeDone,done} = this.props
        const style = {}
        style.marginRight = "0px"
        style.marginTop = "3px"
        style.marginLeft = "3px"
        style.marginBottom = "3px"
        if(done){
            style.textDecoration = "line-through"

        }
        return (
            <div style={{display:"flex"}}>
                <li style={style,{border:"1px solid gray",borderRight:"none",margin:"3px"}} onClick={onChangeActive}
                className={"list-group-item " + (active ? 'active' : "")}>{label}
                </li>
                <li style={{border:"1px solid gray",borderLeft:"none",margin: "3px",marginLeft: "0px"}}>
                    <button style={{float:"right",margin:"5px"}} onClick={onDeleteItem} className="btn btn-danger">X</button>
                    <button style={{float:"right", margin:"5px"}} onClick={onChangeDone} className="btn btn-success"> ! </button>
                </li>
            </div>
        )
    }
}


export default Item;