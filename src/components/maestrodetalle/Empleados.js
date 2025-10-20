import React, {Component} from 'react';
import axios from "axios";
import Global from "../../Global";

class Empleados extends Component {
    url=Global.urlEmpleados;
    state={
        empleados:[],
        texto:""
    }
    loadEmpleados=()=>{
        let idDepartamento = this.props.iddepartamento;
        let request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;

        axios.get(this.url+request).then(response => {

            console.log("Leyendo Empleados")

            this.setState({
                empleados:response.data
            })

        })
    }
    componentDidMount=()=> {
        this.loadEmpleados();
    }

    componentDidUpdate=(oldProps)=>{
        //DIBUJAMOS LAS NUEVAS Y LAS ANTIGUAS
        console.log("Current: "+this.props.iddepartamento);

        console.log("Old: "+ oldProps.iddepartamento);
        //SOLAMENTE ACTUALIZAMOS STATE SI PROPS HA CAMBIADO

        if(oldProps.iddepartamento!==this.props.iddepartamento){
            this.loadEmpleados();
        }

    }
    render() {
        return (
            <div>
                <h2 style={{color:"blue"}}>Empleados Component</h2>

                <h3> Departamento recibido: {this.props.iddepartamento}</h3>

                <h1>{this.state.texto}</h1>
                <ul>
                    {
                        this.state.empleados.map((empleado,index)=>{
                            return(<li key={index}>
                                {
                                    empleado.apellido} - {empleado.oficio} - {empleado.departamento
                                }
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Empleados;