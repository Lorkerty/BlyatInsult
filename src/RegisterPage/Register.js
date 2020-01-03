import React from 'react'
import { RegisterContainer } from './styles'
import { FormContainer, FormLogoImage, FormTextInput, FormButton } from '../lib/ui/forms'


export default function Register() {
    return (
       <RegisterContainer>
           <FormContainer elevation={5}>
               <FormLogoImage/>
               <FormTextInput label="Nickname" variant="outlined"/>
               <FormTextInput label="Password" variant="outlined" type="password"/>
               <FormTextInput label="Повторить?" variant="outlined" type="password"/>
               <FormButton>Добро Пожааж</FormButton>
           </FormContainer>
       </RegisterContainer> 
    )
}

