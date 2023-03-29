import React  from "react";
import CreateInvoiceForm from "../components/CreateInvoiceForm";
import {addInvoiceToApi} from "../api/http";
import { useNavigate, useParams } from "react-router-dom"
const CreateInvoicePage = () => {

    // état
    const navigate = useNavigate() // useHistory
    const params = useParams();
    

    // traitement
    const addNewInvoice = (price, status, id) => {
        const invoice = {
            price: price,
            status: status,
            clientid: id,
        };
        let idx = +params.id;
        // Appel HTTP vers Supabase en method POST
        addInvoiceToApi(invoice).then(() => {
            navigate(`/${idx}`)
        })
    }

    // affichage
    return <>
        <CreateInvoiceForm onInvoiceAdded = {addNewInvoice} />
    </>
}
export default CreateInvoicePage;