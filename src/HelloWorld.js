import React, { Component } from 'react'

class HelloWorld extends Component {
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
                <h1>Estudo de React.js</h1>
                <h4 style={style}>{ result === 4 ? 'true' : 'false'}</h4>
            </div>
        )
    }
}

export default HelloWorld