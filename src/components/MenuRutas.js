import React, {Component} from 'react';

class MenuRutas extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/tabla/4">Tabla Multiplicar 4</a>
                    </li>
                    <li>
                        <a href="/tabla/21">Tabla Multiplicar 21</a>
                    </li>
                    <li>
                        <a href="/tabla/10">Tabla Multiplicar 10</a>
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