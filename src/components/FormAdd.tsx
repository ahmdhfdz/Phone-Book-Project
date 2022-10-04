import { useState } from "react"
import styled from '@emotion/styled'
import { CREATE_CONTACT } from "../GraphQL/Mutations/CreateNewContact";
import { LOAD_CONTACT_LIST } from "../GraphQL/Queries/GetContactList";
import { useMutation } from "@apollo/client";
import { validateInput } from "../helper/SpecialCharFilter";
import { IoIosAddCircle, IoIosRemoveCircle } from 'react-icons/io'

const FormAddContact = styled.form` 
    text-align: center;
`

const InputForm = styled.input`
    border-style: dotted;
    margin: 5px 0;
    padding: 16px;
    font-size: 14px;
    border-radius: 10px;
    width: 230px;
`
const SubmitBtn = styled.button`
    margin: 5px 0;
    padding: 16px;
    width: 100%;
    border-radius: 10px;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    :hover{
        background: #cecece;
    }
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

const ErrorMessage = styled.div`
    color: #b94242;
`

const FormAdd = () => {
    const [AddContactWithPhones, { error }] = useMutation(CREATE_CONTACT);
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [phone, setPhone] = useState([{ number: "" }]);
    const [errorFirst, setErrorFirst] = useState(Boolean);
    const [errorLast, setErrorLast] = useState(Boolean);


    const AddContact = () => {
        AddContactWithPhones({
            variables: {
                first_name: first_name,
                last_name: last_name,
                phones: phone
            }, refetchQueries: [
                {
                    query: LOAD_CONTACT_LIST, variables: {
                        limit: 10,
                        offset: 10 * 0
                    }
                }
            ]
        })
    }

    const AddPhoneInput = () => {
        const temp = { number: "" };
        setPhone([...phone, temp])
    }

    const RemovePhoneInput = (index: number) => {
        setPhone((number) => number.filter((value, i) => i !== index))
    }

    const handleArrayChange = (event: any, index: number) => {
        const newItems = phone.map((item, i) => {
            if (index === i) {
                return { ...item, number: event }
            }
            return item;
        });
        setPhone(newItems);
    }

    const SetFirstName = (value: string) => {
        if (validateInput(value)) {
            setErrorFirst(true);
        } else {
            setErrorFirst(false);
            setFirstName(value);
        }
    }

    const SetLastName = (value: string) => {
        if (validateInput(value)) {
            setErrorLast(true);
        } else {
            setErrorLast(false);
            setLastName(value);
        }
    }

    return (
        <FormAddContact onSubmit={e => {
            e.preventDefault();
        }}>
            {
                error ?
                    <ErrorMessage>
                        {error.message}
                    </ErrorMessage>
                    :
                    <div>
                        <div>
                            <InputForm type="text" placeholder="First Name" name="first_name" onChange={(e) => { SetFirstName(e.target.value) }} />
                            {
                                errorFirst &&
                                <ErrorMessage>input must not contains special characters</ErrorMessage>
                            }
                        </div>
                        <div>
                            <InputForm type="text" placeholder="Last Name" name="last_name" onChange={(e) => { SetLastName(e.target.value) }} />
                            {
                                errorLast &&
                                <ErrorMessage>input must not contains special characters</ErrorMessage>
                            }
                        </div>
                        {
                            phone.map((items, index) => {
                                return <PhoneInputContainer key={index}>
                                    <InputForm type="tel" placeholder="Phone Number" name="phone" onChange={(e) => handleArrayChange(e.target.value, index)} />
                                    <IconContainer>
                                        {index + 1 === phone.length ?
                                            <IoIosAddCircle size={30} onClick={() => {
                                                AddPhoneInput();
                                            }} />
                                            :
                                            <IoIosRemoveCircle size={30} onClick={() => {
                                                RemovePhoneInput(index);
                                            }} />
                                        }
                                    </IconContainer>
                                </PhoneInputContainer>
                            })
                        }
                        <div>
                            <SubmitBtn disabled={errorFirst || errorLast} type="button" name="submit" onClick={() => AddContact()}>Submit</SubmitBtn>
                        </div>
                    </div>
            }


        </FormAddContact >
    )
}

export default FormAdd