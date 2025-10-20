import React, {Component} from 'react';
import axios from 'axios';
import Global from "../Global";

class ServicioApiCustomers extends Component {
    state = {
        customers: []
    };
    // url = "https://services.odata.org/V4/Northwind/Northwind.svc/Customers";
    url = Global.urlNortwind
    loadCustomers = () => {
        console.log("Antes del servicio");
        let request="Customers"
        axios.get(this.url+request).then((response) => {
            console.log("Leyendo el servicio");

            this.setState({
                customers: response.data.value
            })
        })
        console.log("Despues del servicio");

    }

    componentDidMount() {
        console.log("Antes del componente");
        this.loadCustomers();
    }

    render() {
        return (
            <div>
                <h1>Servicio Api Customers</h1>

                <button>Load Customers</button>
                {
                    this.state.customers.map((cliente, index) => {
                        return(<h3 key={index} style={{color: 'red'}}>{cliente.ContactName}</h3>)
                                })
                }
            </div>
        );
    }
}

export default ServicioApiCustomers;