import React from 'react';
export default class Mapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [
                {
                    name: " Akash sir ",
                    codes: "React JS"
                },

                {
                    name: "Girish sir",
                    codes: "Node JS"
                },
                {
                    name: "Sunny sir",
                    codes: "Angular JS"
                }
            ]
        }
    }

    handleInput1 = (e) => {
        this.setState({
            name: e.target.value,

        })
    }

    handleInput2 = (e) => {
        this.setState({
            codes: e.target.value,
        })
    }

    handleAdd = () => {
        var temp = this.state.arr;
        temp.push({
            name: this.state.name,
            codes: this.state.codes
        })
        this.setState({
            arr: temp,
            name: "",
            codes: ""
        })

    }

   

    handleDelete = (e, index) => {
        var temp=this.state.arr
        temp.splice(index,1)
        this.setState({
            arr:temp
        })

    }



    render() {
        return (
            <div className = "main-div">
               <span style = {{fontSize :30}} > Mapper List</span>
                {this.state.arr.map((single, index) => {
                    return (
                        <div className = "res">
                            {single.name} -- {single.codes}   <button className = "delete"  onClick={(e) => {
                                        this.handleDelete(e, index)
                                    }}>Delete</button>
                                
                        </div>
                    )
                })}
                 <div>
                     <div className = "button">
                     <input   value={this.state.name} onChange={this.handleInput1} />
                <input  className = "mapper-input"  value={this.state.Domain} onChange={this.handleInput2} />

                <button className = "add-button" disabled={this.state.name === ""?true:false} onClick={this.handleAdd}>
                    ADD
                </button>
                     </div>
               
                 </div>
               
                



            </div>
        )
    }
}