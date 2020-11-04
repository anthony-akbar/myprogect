import React, {Component} from 'react';
import Item from "./item";

class List extends Component {

    state = {
        data:[
            {id:7, label: "Read a book.",active: false},
            {id:23, label: "Do home work.",active: false},
            {id:52, label: "Sleep.",active: false},
            {id:66, label: "Eat some meal.",active: false},
        ]
    }
    onChangeActive = (id) =>()=>{
        this.setState(({data})=>{
            const index = data.findIndex((item)=>item.id===id)
            if(index !== -1) {
                const newObj = {...data[index]}
                newObj.active = !newObj.active
                return {data: [...data.slice(0, index), newObj, ...data.slice(index + 1)]}
            }
        })
    }
    onChangeDone = (id) =>()=>{
        this.setState(({data})=>{
            const index = data.findIndex((item)=>item.id===id)
            if(index !== -1) {
                const newObj = {...data[index]}
                newObj.done = !newObj.done
                return {data: [...data.slice(0, index), newObj, ...data.slice(index + 1)]}
            }
        })
    }
    onDeleteItem = (id) =>()=>{
        this.setState(({data})=>{
            const index = data.findIndex((item)=>item.id===id)
            return {data:[...data.slice(0,index),...data.slice(index+1)]}
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.state.data.map((item)=>{
                    return <Item onChangeActive={this.onChangeActive(item.id)}
                                 onDeleteItem={this.onDeleteItem(item.id)}
                                 onChangeDone={this.onChangeDone(item.id)}
                                 key={item.id} {...item}/>
                })}
            </ul>
        );
    }
}

export default List;