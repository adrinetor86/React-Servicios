import React, {Component} from 'react';
import axios from 'axios';
import Global from "../../Global";
class EmpleadosOficios extends Component {

    state={
        oficios: [],
        empleados:[]
    }
    url=Global.urlEmpleados
    selectOficio=React.createRef();
    mostrarEmpleadosOficios = (event) => {
        event.preventDefault();
        let request="api/Empleados/EmpleadosOficio/"+this.selectOficio.current.value;

        axios.get(this.url+request).then((response) => {
            console.log(response.data);

            this.setState({
                empleados:response.data
            })
        })

    }
    cargarOficios=()=>{
        let request="api/Empleados"

        axios.get(this.url+request).then(response=>{

            console.log(response.data);
            let arrayIds=[];

            for (var oficio of response.data) {

                    arrayIds.push(oficio.oficio);
            }
            console.log(arrayIds);

            let arrayUnico = [...new Set(arrayIds)];

            console.log(arrayUnico);

            console.log("EL ARR OFICIOS"+ arrayUnico);

            this.setState({
                oficios:arrayUnico
            })

        })
    }
    componentDidMount() {
        this.cargarOficios()
    }

    render() {
        return (
            <div>
                <h1>OFICIOS</h1>

                <form>
                    <label htmlFor=""></label>
                    <select ref={this.selectOficio}>
                        {

                            this.state.oficios.map((emp,index)=>{
                                return (
                                    <option key={index} value={emp}>{emp}</option>
                                )
                            })
                        }
                    </select>
                    <button onClick={this.mostrarEmpleadosOficios}>Mostrar Empleados</button>
                </form>
                
                <table style={{bordercollapse: ''}}>
                    <thead>
                    <tr>
                        <th>Apellido</th>
                        <th>Salario</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.empleados.map((emp,index)=>{
                                return(<tr key={index}>
                                    <td>{emp.apellido}</td>
                                    <td>{emp.salario}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default EmpleadosOficios;