import React, {Component} from 'react';
import {BrowserRouter, Route, Routes,useParams} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import TablaMultiplicar from "./TablaMultiplicar";
import Collatz from "./Collatz";
import MenuRutas from "./MenuRutas";

class Router extends Component {
    render() {

        function TablaMultiplicarElement(){
        //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARAMETROS
        //RECIBIDOS EN UNA RUTA Y ENVIARLOS CON PROPS A NUESTRO COMPONENT

        let {minumero}=useParams();
        //DEVOLVEMOS EL COMPONENTE TABLAMULTIPLICAR CON SUS PROPS
            return <TablaMultiplicar numero={minumero}/>;
        }

        function CollatzElement(){

            let{numero}=useParams();

            return <Collatz numero={numero}/>
        }

        return (
           <BrowserRouter>
               <MenuRutas/>
               <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/tabla/:minumero" element={<TablaMultiplicarElement/>}/>
                   {/*SI QUEREMOS CONTROLAR CUALQUIER RUTA QUE NO EXISTE LO HAREMOS
                   CON * Y SIEMPRE DEBE SER LA ULTIMA RUTA */}
                   <Route path="/collatz/:numero" element={<CollatzElement/>}/>
                   <Route path="*" element={<NotFound/>}/>
               </Routes>
           </BrowserRouter>
        );
    }
}

export default Router;