import React, {Component} from 'react';
import axios from "axios";
import Global from "../../Global";
import Cursos from "./Cursos";

class Alumnos extends Component {

    url = Global.urlEjemplos
    state={
        alumnos:[],
        idAlumno:0,
        alumno:{}
    }
    cargarAlumnos(){
        console.log("Leyendo Alumnos "+this.props.idcurso)
        let cursoano =parseInt(this.props.idcurso)
        let request="api/Alumnos/FiltrarCurso/" + cursoano;

        axios.get(this.url+request).then(response => {
            console.log("Cargando Alumnos")
            console.log(response.data);
            this.setState({
                alumnos: response.data
            });
        })

    }
    btnid=React.createRef();
    componentDidMount=()=> {
        this.cargarAlumnos();
    }
    componentDidUpdate=(oldProps)=> {

        console.log("nuevo: "+this.props.idcurso);
        console.log("old: "+oldProps.idcurso);

        if(oldProps.idcurso !== this.props.idcurso) {
            console.log("Se va ha cambiar")
            this.cargarAlumnos()
        }


    }

    cargarDatosAlumno=(id)=>{
        console.log("Nuevo:"+id);

        let request="api/Alumnos/FindAlumno/"+id

        axios.get(this.url+request).then(response => {
            console.log("Cargando Alumno")

            console.log(response.data);

            this.setState({
                alumno: response.data

            });

            if (this.props.mostrardatosalumno) {

                this.props.mostrardatosalumno(response.data);
            }

        })
    }

    render() {
        return (
            <div>

                <ul>
                    {
                        this.state.alumnos.map((alumno, index) =>{
                            return(<li key={index} value={alumno.idAlumno}>
                                {alumno.nombre} {alumno.apellidos}
                            <button ref={this.btnid} value={alumno.idAlumno} onClick={() => this.cargarDatosAlumno(alumno.idAlumno)}>
                                Detalles
                            </button>
                            </li>)
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Alumnos;