import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class MenuRutas extends Component {
    render() {
        return (
            //PREGUNTAR LO DE ENLACES HEADER Y FOOTER
            <div>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/4">Tabla Multiplicar 4</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/21">Tabla Multiplicar 21</NavLink>
                    </li>
                    <li>
                        <NavLink to="/tabla/10">Tabla Multiplicar 10</NavLink>
                    </li>
                    <li>
                        <a href="/collatz/5">Collatz</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default MenuRutas;