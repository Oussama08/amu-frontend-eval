
import React, {useEffect, useState} from "react";
import ClientsList from "../components/ClientsList";
import {loadClientsFromApi} from "../api/http";

const ClientsListPage = () => {

    const [clients, setClients] = useState([]);
    useEffect(() => {
        loadClientsFromApi().then((items) => {
            setClients(items);
        });
    }, []);

    return <>
        <ClientsList clients={clients}/>
    </>
}

export default ClientsListPage;