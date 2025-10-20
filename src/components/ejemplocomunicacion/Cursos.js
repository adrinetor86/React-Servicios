import React, {Component} from 'react';
import Alumnos from "./Alumnos";
import Global from "../../Global";
import axios from "axios";
class Cursos extends Component {

    url=Global.urlEjemplos;

    state={
        cursos:[],
        curso:0,
        alumnoSeleccionado:null
    }
    selectCurso=React.createRef();
    componentDidMount() {
        this.cargarCursos()
    }

    cargarCursos=()=>{

        let request="api/Alumnos/Cursos";

        axios.get(this.url+request).then((response) => {

            console.log("Leyendo Cursos");

            this.setState({
                cursos:response.data
            });
        })
    }

    loadAlumnos=(event)=>{
        event.preventDefault();

        console.log("CAMBIANDO CURSO:"+this.selectCurso.current.value)
        this.setState(
            {
                curso:this.selectCurso.current.value
            }
        )
    }

    mostrarAlumno=(alumno)=>{
        this.setState({
            alumnoSeleccionado: alumno
        });
    }

    render() {
        return (
            <div>
                <h1>CURSOS</h1>
                <form>
                    <select ref={this.selectCurso}>
                        {
                            this.state.cursos.map((curso,index)=>{

                                return(<option key={index} value={curso}>{curso}</option>)
                            })
                        }
                    </select>
                    <button onClick={this.loadAlumnos}>CARGAR ALUMNOS</button>
                </form>

                {
                    this.state.alumnoSeleccionado &&
                    <div>
                        <h2>{this.state.alumnoSeleccionado.nombre} {this.state.alumnoSeleccionado.apellidos}</h2>
                        <h2>IdAlumno: {this.state.alumnoSeleccionado.idAlumno}</h2>
                        <img src={this.state.alumnoSeleccionado.imagen} style={{width: '150px', height: '150px'}} alt="imagen no encotrada"/>
                    </div>

                }
                {
                    this.state.curso !==0 &&
                    <Alumnos idcurso={this.state.curso} mostrardatosalumno={this.mostrarAlumno}/>
                }
            </div>
        );
    }
}

export default Cursos;