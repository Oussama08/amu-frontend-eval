import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import {loadClientFromApi, loadInvoicesFromApi} from "../api/http";

const ClientDetailsPage = () => {

    const [client, setClient] = useState(null);
    const [invoices, setInvoices] = useState([]);

    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        loadClientFromApi(id)
            .then(apiTask => setClient(apiTask));
        loadInvoicesFromApi(id)
            .then((items) => {
            setInvoices(items);
        
        })
    }, [id])

    return client ?
        <>
         <div className="container">
            <h2 className="text-center my-4">{client.fullName}</h2>
            <h3 className="text-center my-4">{client.email}</h3>
            <br />
            <Link   className="btn btn-primary btn-sm" to={`/${client.id}/invoices/add`}>Créer une facture</Link>
            <br />

            <table>
                <thead>
                <tr>
                    <td>Prix</td>
                    <td>Status</td>
                </tr>
                </thead>
                <tbody>
                {invoices.map(invoice => (
                  
                        <tr key={invoice.id}>
                                <td><a>{invoice.price} €</a></td> 
                                <td><Link className="badge badge-primary badge-pill">{invoice.status}</Link></td>
                        </tr>
                    )
                )
                }
                </tbody>
            </table>
            <Link to="/"> &#x25c0; Retour aux clients</Link>
         </div>
        </>
        :
        <h3>Chargement ...</h3>
}

export default ClientDetailsPage;