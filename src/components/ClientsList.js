import React from "react";
import {Link} from "react-router-dom";
import { Space, Table, Tag } from 'antd';

const ClientsList = ({ clients }) => {

    return <>
        <div className="container">
            <h1  className="text-center my-4">Liste des clients</h1>
            <div className="container">
                <Link className="btn btn-primary btn-sm" to={"/create"}>Créer un client</Link>
                <table className="dataTable">
                    <thead>
                    <tr>
                        <td>Nom</td>
                        <td>Email</td>
                        <td>Détails</td>
                    </tr>
                    </thead>
                    <tbody>

                    {
                    clients.map(client => (
                        <tr key={client.id}>
                            <td><Link to={"/"+client.id}><a href="#">{client.fullName}</a></Link> </td>
                            <td><Link to={"/"+client.id}>{client.email}</Link></td>
                            <td><Link className="badge badge-primary" to={"/"+client.id}>Détails</Link></td>
                        </tr>
                        )
                    )
                    }
                    </tbody>
                </table>
            </div>            
        </div>
    </>
}

export default ClientsList;