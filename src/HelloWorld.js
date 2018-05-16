import React, { Component } from 'react'
import StateInput from './StateInput'

class HelloWorld extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: 'Andre R.'
        }

    }

    render(){
        const result = 4
        const style = {
            color: '#ff0033',
            fontSize: 50,
            backgroundColor: '#00f'
        }
        return (
            <div className="my-class-from-react">
                {/* Componente do react */}
                <StateInput />
                <h1>Estudo de React.js</h1>
                <h4 style={style}>{ result === 4 ? 'true' : 'false'}</h4>
                <span>{this.state.name}</span>
            </div>
        )
    }
}

export default HelloWorld