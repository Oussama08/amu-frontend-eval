import React  from "react";
import CreateClientForm from "../components/CreateClientForm";
import {addClientToApi} from "../api/http";
import { useNavigate } from "react-router-dom"
const CreateClientPage = (props) => {

    const navigate = useNavigate() // useHistory
    const addNewClient = (name, email) => {
        const client = {
            fullName: name,
            email: email,
        };
        addClientToApi(client).then(() => {
            navigate('/')
        })
    }

    return <>
        <CreateClientForm onClientAdded = {addNewClient} />
    </>
}
export default CreateClientPage;