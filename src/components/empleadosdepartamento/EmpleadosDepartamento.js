import React, {Component} from 'react';
import axios, {request} from 'axios';
import Global from "../../Global";

class EmpleadosDepartamento extends Component {

    urlEmpleados = Global.urlEmpleados;
    urlDepartamentos = Global.urlDepartamentos;
    selectDepartamento=React.createRef();

    state={
        empleados:[],
        departamentos:[],
    }
    buscarEmpleados=(event)=>{
        event.preventDefault();
        let idDepartamento=this.selectDepartamento.current.value;
        let request="api/empleados/empleadosdepartamento/" + idDepartamento;

        axios.get(this.urlEmpleados+request).then(response=>{
            console.log("Leyendo empleados");
            console.log(response.data);

            this.setState({
                empleados:response.data
            });

        })
    }
    loadDepartamentos=()=>{
        console.log("Antes del servicio");
        let request="webresources/departamentos"
        axios.get(this.urlDepartamentos + request).then(response=>{
            console.log("Leyendo departamentos");
            this.setState({
                departamentos:response.data
            })
        })
    }

    componentDidMount() {
        this.loadDepartamentos()
    }

    render() {
        return (
            <div>
                <h1 style={{color: "blue"}}>Departamentos</h1>
                {/*DA IGUAL SI METO EL METODO PREVENT EVENT EN FORM O EN EL BOTON*/}
                <form>
                    <label>Seleccione Departamento</label>
                    <select ref={this.selectDepartamento}>
                        {
                            this.state.departamentos.map((dep,index)=>{
                                return (<option key={index} value={dep.numero}>{dep.nombre}</option>)
                        })

                        }
                    </select>
                    <button onClick={this.buscarEmpleados}>
                        Buscar Empleados
                    </button>
                </form>
                <ul>
                    {
                        this.state.empleados.map((empleado, index) => {
                            return (<li key={index}>{empleado.apellido}</li>)
                        })
                    }
                </ul>
            </div>
        );

    }
}

export default EmpleadosDepartamento;