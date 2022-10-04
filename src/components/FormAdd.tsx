import { useState } from "react"
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT } from "../GraphQL/CreateNewContact";
import styled from '@emotion/styled'

const InputForm = styled.input`
    border-style: dotted;
    margin: 5px 0;
    padding: 16px;
    font-size: 14px;
    border-radius: 10px;
`
const SubmitBtn = styled.input`
    margin: 5px 0;
    padding: 16px;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
`

const FormAdd = () => {
    const [AddContactWithPhones, {error, data, loading}] = useMutation(CREATE_CONTACT);
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState({number: ""});

    const AddContact = () =>{
        AddContactWithPhones({
            variables: {first_name:first_name, last_name:last_name, phones:[{number:phone.number}]}
        })
    }

    return (
        <form onSubmit={e => {
            e.preventDefault();
            // AddContact()
            AddContact();
        }}>
            <div>
                <InputForm type="text" placeholder="First Name" name="first_name" onChange={(e)=> {setFirstName(e.target.value)}} />
            </div>
            <div>
                <InputForm type="text" placeholder="Last Name" name="last_name" onChange={(e)=> {setLastName(e.target.value)}} />
            </div>
            <div>
                <InputForm type="tel" placeholder="Phone Number" name="phone" onChange={(e)=> {setPhone({number: e.target.value})}} />
            </div>
            <div>
                <SubmitBtn type="submit" value="Submit" />
            </div>
        </form >
    )
}

export default FormAdd