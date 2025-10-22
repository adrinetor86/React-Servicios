import React, {Component} from 'react';

class Boton extends Component {

    mostrarTexto=()=>{
        this.props.mostrarTexto();
    }
    render() {
        return (

            <button onClick={this.mostrarTexto}>Boton Hijo</button>

        );
    }
}

export default Boton;