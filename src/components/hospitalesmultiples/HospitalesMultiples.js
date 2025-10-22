import React, {Component} from 'react';
import Trabajadores from "../trabajadores/Trabajadores";
import Global from "../../Global";
import axios from "axios";
class HospitalesMultiples extends Component {

    url = Global.urlEjemplos;

    state={
        hospitales:[],
        hospitalesSeleccionados:null,
        salario:0
    }
    cajaSalario=React.createRef()
    selectHospital=React.createRef();
    loadHospitales = () =>{
        let request="api/hospitales"

        axios.get(this.url + request).then(response => {
            console.log("Cargando hospitales");

            this.setState({
                hospitales: response.data

            });

        });
    }

    getHospitalesSeleccionados=(event)=>{
        event.preventDefault();
        let aux=[]
        let options=this.selectHospital.current.options;

        for(var option of options){
            if(option.selected){
                aux.push(option.value)
            }
        }
        this.setState({
            hospitalesSeleccionados:aux
        });

    }
    componentDidMount() {
        this.loadHospitales();

    }
    aumentarSalario=(event)=>{
        event.preventDefault();
            // ?incremento=1&idhospital=17&idhospital=22
        let salarioNuevo=parseInt(this.cajaSalario.current.value)

        console.log("Nuevo salario"+salarioNuevo);
        this.setState({
            salario:salarioNuevo
        })

    }
    render() {
        return (
            <div>
                <h1 className="text-primary">Hospitales Múltiples</h1>
                <form className="form form-control mx-auto">
                    <select ref={this.selectHospital} multiple size="5"
                            className="form-horizontal w-25 text-center form-control">
                        {
                            this.state.hospitales.map((hospital, index) => {
                                return (<option key={index} value={hospital.idHospital}>{hospital.nombre}</option>)
                            })
                        }
                    </select>
                    <button className="btn btn-warning border-2 border-black"
                            onClick={this.getHospitalesSeleccionados}>Mostrar Trabajadores
                    </button>
                    <label>Incremento Salarial</label>
                    <input ref={this.cajaSalario} defaultValue="0"/>
                    <button onClick={this.aumentarSalario}>Aumentar Salario</button>
                </form>

                {

                    this.state.hospitalesSeleccionados &&
                    <Trabajadores salario={this.state.salario} idhospitales={this.state.hospitalesSeleccionados}/>
                }

            </div>
        );

    }
}

export default HospitalesMultiples;