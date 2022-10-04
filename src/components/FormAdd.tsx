import { useState } from "react"
import { useMutation } from "@apollo/client";
import { CREATE_CONTACT } from "../GraphQL/CreateNewContact";
import styled from '@emotion/styled'
import { IoIosAddCircle } from 'react-icons/io'

const FormAddContact = styled.form` 
    text-align: center;
`

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

const PhoneInputContainer = styled.div`
    position: relative;
`

const IconContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 15px 10px;
    cursor: pointer;
`

const FormAdd = () => {
    const [AddContactWithPhones, { error, data, loading }] = useMutation(CREATE_CONTACT);
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState({ phone: [{ number: "" }] });
    // const [currentPhoneMap, setCurrentPhoneMap] = useState(1);
    const [phoneArray, setPhoneArray] = useState([{ number: "" }]);
    const [isValid, setIsValid] = useState(false);

    const AddContact = () => {
        AddContactWithPhones({
            variables: { first_name: first_name, last_name: last_name, phones: [{ number: phone.phone[0].number }] }
        })
    }

    const AddPhone = () => {

    }

    const validateFirstName = (e: any) => {
        setFirstName(e.target.value);
    }

    return (
        <FormAddContact onSubmit={e => {
            e.preventDefault();
            AddContact();
        }}>
            <div>
                <InputForm type="text" placeholder="First Name" name="first_name" onChange={(e) => { validateFirstName(e) }} />
            </div>
            <div>
                <InputForm type="text" placeholder="Last Name" name="last_name" onChange={(e) => { setLastName(e.target.value) }} />
            </div>
            {
                phoneArray.map((items) => {
                    return <PhoneInputContainer key={items.number}>
                        <InputForm type="tel" placeholder="Phone Number" name="phone" />
                        <IconContainer onClick={() => {
                            console.log('something');
                        }}>
                            <IoIosAddCircle size={30} />
                        </IconContainer>
                    </PhoneInputContainer>
                })
            }

        </FormAddContact >
    )
}

export default FormAdd