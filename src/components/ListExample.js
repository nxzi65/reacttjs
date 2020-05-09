import React, { Component } from 'react'

export class ListExample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             students:[
                 {
                    id:1,
                    name:"mohsin"
                 },
                 {
                    id:2,
                    name:"Ali"
                },
                {
                    id:3,
                    name:"Hamza"
                },

             ]
        }
    }
    
    render() {
        const studentsComponent = this.state.students.map(s=><p key={s.id} className="alert alert-info">Name is {s.name} </p>)
        return (
            <div>
                {
                    studentsComponent
                }
            </div>
        )
    }
}

export default ListExample
