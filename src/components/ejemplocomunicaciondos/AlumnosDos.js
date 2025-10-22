import React, {Component} from 'react';
import Global from "../../Global";
import axios from "axios";
import Boton from "./Boton";

class AlumnosDos extends Component {
    url=Global.urlEjemplos
     state={
        alumnos:[],
     }
    cargarAlumnos=()=>{
        let request="api/Alumnos/FiltrarCurso/"+parseInt(this.props.idCurso)

        axios.get(this.url+request).then((response) => {

            console.log(response.data)

            this.setState({alumnos:response.data})
        })
    }

    componentDidMount() {
        this.cargarAlumnos();
    }

    componentDidUpdate(oldProps) {

        if(oldProps.idCurso !== this.props.idCurso){

            this.cargarAlumnos();
        }
    }


    mostrarDatos=(alumno)=>{

     this.props.mostrarAlumno(alumno)

    }

    mostrarTexto=()=>{
        alert("Se ha clickado")
    }
    render() {
        return (
            <div>
                <h2>Alumnos</h2>

                <h3>{this.props.idCurso}</h3>

                <ul>
                    {
                        this.state.alumnos.map((alumno,index)=>{
                            return(<li key={index} value={alumno.idAlumno}>{alumno.nombre} {alumno.apellidos}
                            <button onClick={()=>{this.mostrarDatos(alumno)}}>Detalles</button>
                                <Boton mostrarTexto={this.mostrarTexto}/>
                            </li>)

                        })
                    }
                </ul>
            </div>
        );
    }
}

export default AlumnosDos;