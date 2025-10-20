import React, {Component} from 'react';
import axios from 'axios';
import Global from "../Global";
import '../styles/TableModern.css';

class ServiceApiSuppliers extends Component {
    state={
        customers: [],
        persona:[],
    }
    // url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"
    url = Global.urlNortwind

    cajaId = React.createRef();

    generarPeticion = (event) => {
        event.preventDefault();
        console.log("Servicio");
        let idSupplier=parseInt(this.cajaId.current.value);
        //REALIZAMOS LA PETICION DE NUEVO A TODOS LOS PROVEEDORES
        let request ="Suppliers"

        console.log(this.url+request)
        //VERSION 2
        axios.get(this.url+request).then((response) => {

            for (var supplier of response.data.value) {

                if (supplier.id == idSupplier) {
                    this.setState({
                        persona: supplier,
                    })
                    break;
                }
            }
        })
    }


    loadCustomers = () => {
        console.log("Antes del servicio");
        let request ="Suppliers"
        axios.get(this.url+request).then((response) => {
            console.log("Leyendo el servicio");

            this.setState({
                customers: response.data.value
            })
        })
        console.log("Despues del servicio");
    }

        // Ciclo de vida del componente
    componentDidMount() {
        console.log("Antes del componente");
        this.loadCustomers();
    }
    cargarDatos=()=>{
        let id;
        id= parseInt(this.cajaId.current.value);

        console.log(this.state.customers[id-1]);
        let persona=[]
        persona.push(this.state.customers[id-1]);

        this.setState({

            persona:persona
        })
        //LOS STATE EN EL CONSOLE.LOG PUEDEN DAR FALSO POSITIVO!!!
        console.log(this.state.persona);
    }

    render() {
        return (
            <div>
                <h1>Datos Api Suppliers</h1>
                <form onSubmit={this.generarPeticion}>
                    <label>ID:</label>
                    <input required type="number" ref={this.cajaId}/>

                    <button onClick={this.cargarDatos}>Cargar Datos
                    </button>
                </form>

                {/*PREGUNTAR TAMBIEN COMO FUNCIONA LO DEL RETURN */}
                {
                    this.state.persona.length > 0 &&

                        <div className="table-modern-wrapper" style={{ marginTop: "20px" }}>
                            <table className="table-modern">
                                <caption>Proveedor</caption>
                                <tbody>
                                <tr><td className="kv-label" data-label="Campo">ID</td><td data-label="Valor">{this.state.persona[0].SupplierID}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Company</td><td data-label="Valor">{this.state.persona[0].CompanyName}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Name</td><td data-label="Valor">{this.state.persona[0].ContactName}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Title</td><td data-label="Valor">{this.state.persona[0].ContactTitle}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Address</td><td data-label="Valor">{this.state.persona[0].Address}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">City</td><td data-label="Valor">{this.state.persona[0].City}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Region</td><td data-label="Valor">{this.state.persona[0].Region}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Postal Code</td><td data-label="Valor">{this.state.persona[0].PostalCode}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Country</td><td data-label="Valor">{this.state.persona[0].Country}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Phone</td><td data-label="Valor">{this.state.persona[0].Phone}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Fax</td><td data-label="Valor">{this.state.persona[0].Fax}</td></tr>
                                <tr><td className="kv-label" data-label="Campo">Home Page</td><td data-label="Valor">{this.state.persona[0].HomePage}</td></tr>
                                </tbody>
                            </table>
                        </div>

                }
                <ul>
                    {
                        this.state.customers.map((persona, index) => {

                            return <li key={index}>ID: {persona.SupplierID} Nombre: {persona.ContactName}</li>
                        })
                    }
                </ul>
            </div>
        );

    }
}

export default ServiceApiSuppliers;