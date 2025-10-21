import React, {Component} from 'react';

class TablaMultiplicar extends Component {

    state = {
        tabla:[]
    }
    generarTablaMultiplicar=() =>{
        let aux=[]
        let numero=parseInt(this.props.numero)

        for(var i=0;i<=10;i++){
            var resultado=numero*i;
            aux.push(resultado);
        }
        this.setState(
            {
                tabla:aux
            }
        )
    }

    componentDidMount(){
        this.generarTablaMultiplicar();


    }

    componentDidUpdate(oldProps) {

        if(this.props.numero !== oldProps.numero ){
            this.generarTablaMultiplicar();
        }
    }

    render() {
        return (
            <div>
                <h1>Tabla Multiplicar</h1>
                <h3> Numero: {this.props.numero}</h3>
                <ul>
                    {
                        this.state.tabla.map((num, index) => {
                            return (<li key={index}>{num}</li>)
                        })
                    }

                </ul>
            </div>
        );
    }
}

export default TablaMultiplicar;