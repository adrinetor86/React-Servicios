import 'bootstrap/dist/css/bootstrap.min.css'
import $ from "jquery"
import Popper from "popper.js"
import 'bootstrap/dist/js/bootstrap.bundle'

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import ServicioApiCustomers from "./components/ServicioApiCustomers";
import ServiceApiSuppliers from "./components/ServiceApiSuppliers";
import EmpleadosDepartamento from "./components/empleadosdepartamento/EmpleadosDepartamento";
import EmpleadosOficios from "./components/empleadosoficios/EmpleadosOficios";
import Departamentos from "./components/maestrodetalle/Departamentos";
import Cursos from "./components/ejemplocomunicacion/Cursos";
import TablaMultiplicar from "./components/TablaMultiplicar";
import Router from "./components/Router";
import MenuRutas from "./components/MenuRutas";
import HospitalesMultiples from "./components/hospitalesmultiples/HospitalesMultiples";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ServicioApiCustomers/>
    // <ServiceApiSuppliers/>
    // <EmpleadosDepartamento/>
    // <EmpleadosOficios />
    //<Departamentos/>
    // <Cursos/>
    // <div>
    //     {/*<MenuRutas/>*/}
    //     <Router/>
    // </div>

    <HospitalesMultiples/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
