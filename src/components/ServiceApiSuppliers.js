import React, {Component} from 'react';
import axios from 'axios';

class ServiceApiSuppliers extends Component {
    state={
        customers: [],
        persona:[]
    }
    url = "https://services.odata.org/V4/Northwind/Northwind.svc/Suppliers"

    generarPeticion = (event) => {
        event.preventDefault();
        console.log("Servicio");
    }

    cajaId = React.createRef();

    loadCustomers = () => {
        console.log("Antes del servicio");
        axios.get(this.url).then((response) => {
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
   /* persona =[]*/
    cargarDatos=()=>{
        let id=0;
        id= parseInt(this.cajaId.current.value);

        console.log(this.state.customers[id-1]);
        let persona=[]
        persona.push(this.state.customers[id-1]);

        this.setState({
            persona:persona
        })
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

                {
                    this.state.persona.length > 0 &&
                    this.state.persona.map((personaData, index) => (
                        <table key={index} border="1" cellPadding="5" style={{ marginTop: "20px" }}>
                            <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr><td>ID</td><td>{personaData.SupplierID}</td></tr>
                            <tr><td>Company</td><td>{personaData.CompanyName}</td></tr>
                            <tr><td>Name</td><td>{personaData.ContactName}</td></tr>
                            <tr><td>Title</td><td>{personaData.ContactTitle}</td></tr>
                            <tr><td>Address</td><td>{personaData.Address}</td></tr>
                            <tr><td>City</td><td>{personaData.City}</td></tr>
                            <tr><td>Region</td><td>{personaData.Region}</td></tr>
                            <tr><td>Postal Code</td><td>{personaData.PostalCode}</td></tr>
                            <tr><td>Country</td><td>{personaData.Country}</td></tr>
                            <tr><td>Phone</td><td>{personaData.Phone}</td></tr>
                            <tr><td>Fax</td><td>{personaData.Fax}</td></tr>
                            <tr><td>Home Page</td><td>{personaData.HomePage}</td></tr>
                            </tbody>
                        </table>
                    ))
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