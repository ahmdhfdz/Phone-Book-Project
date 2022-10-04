import React from 'react'
import FormAdd from '../components/FormAdd';
import styled from '@emotion/styled';

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const FormContact = () => {
  return (
    <FormWrapper>
      <div>
        <h2>Add New Contact</h2>
        <FormAdd />
      </div>
    </FormWrapper>
  )
}

export default FormContact;