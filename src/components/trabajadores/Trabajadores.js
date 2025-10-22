import React, {Component} from 'react';
import Global from "../../Global";
import axios from "axios";

class Trabajadores extends Component {
    url =Global.urlEjemplos

    state={
        mensaje:"",
        trabajadores:null,
    }

    loadTrabajadores=()=>{
        //RECUPERAMOS EL ARRAY DE IDS DE HOSPITAL

        let idsHospitales=this.props.idhospitales

        let data="";
        //idhospital=17&idhospital=22
        for(var id of idsHospitales){
            data+="idhospital="+id+"&";
        }
        //ELIMINAMOS EL ULTIMO CARACTER DEL STRING

        data =data.substring(0,data.length-1);

        let request="api/Trabajadores/TrabajadoresHospitales?"+data

        console.log("EL SALARIO"+this.props.salario)
        if(this.props.salario !==0){
            console.log("ES DISTINTO DE 0")
            let requestSalario="api/Trabajadores/UpdateSalarioTrabajadoresHospitales?incremento="+this.props.salario+"&"+data

            axios.put(this.url+requestSalario).then((response) => {


            })

        }

        axios.get(this.url+request).then(response => {

            console.log("Mostrando trabajadores:");
            console.log(response.data);
            this.setState({
                trabajadores:response.data
            })
        })

    }



    componentDidMount(){
        this.loadTrabajadores();
    }


    componentDidUpdate(oldProps) {

        if(oldProps.idhospitales !== this.props.idhospitales || this.props.salario !== oldProps.salario){
            this.loadTrabajadores();
        }
    }

    render() {
        return (
            <div>
               <h1 className="text-bg-info">Trabajadores</h1>

                {/*<h2 className="text-primary">{this.state.mensaje}</h2>*/}

                {

                    this.state.trabajadores &&
                    <table className="table table-striped table-primary">
                        <thead>
                        <tr>
                            <th>Apellido</th>
                            <th>Oficio</th>
                            <th>Salario</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.trabajadores.map((trabajador,index)=>{
                                return(<tr key={index}>
                                    <td>{trabajador.apellido}</td>
                                    <td>{trabajador.oficio}</td>
                                    <td>{trabajador.salario}</td>
                                </tr>)
                            })
                        }
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export default Trabajadores;