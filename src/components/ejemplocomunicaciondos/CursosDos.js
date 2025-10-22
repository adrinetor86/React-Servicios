import React, {Component} from 'react';
import Global from "../../Global";
import axios from "axios";

import AlumnosDos from "./AlumnosDos";

class CursosDos extends Component {

    url=Global.urlEjemplos

    state={
        cursos:[],
        idCurso:-1,
        alumno:null
    }
    selectCursos=React.createRef()

    cargarCursos=()=>{
        let request="api/Alumnos/Cursos"

        axios.get(this.url+request).then((response)=>{

            console.log(response.data);
            this.setState({
                cursos:response.data
            })
        })

    }

    mostrarDatosAlumno=(alumno)=>{

        console.log("ALUMNO:"+alumno.nombre)

        this.setState({
            alumno:alumno
        })
    }
    componentDidMount() {
        this.cargarCursos()
    }

    buscarAlumnos=(event)=>{
        event.preventDefault()
        console.log("Clickado")

        let id=this.selectCursos.current.value;

        this.setState({idCurso:id})

    }
    render() {
        return (
            <div>
                <h1>Cursos</h1>
                <form>
                <select ref={this.selectCursos}>
                    {
                    this.state.cursos.map((curso,index)=>{
                        return(<option key={index} value={curso}>{curso}</option>)
                    })

                    }
                </select>

                <button onClick={this.buscarAlumnos}>Buscar Alumnos</button>
                </form>
                {
                    this.state.alumno &&
                    <div>
                        <h1>Nombre: {this.state.alumno.nombre}{this.state.alumno.apellidos}</h1>
                        <h1>Nombre: {this.state.alumno.idAlumno}</h1>
                    </div>
                }
                {
                    this.state.idCurso !== -1 &&
                    <AlumnosDos idCurso={this.state.idCurso} mostrarAlumno={this.mostrarDatosAlumno}/>
                }

            </div>
        );
    }
}

export default CursosDos;