import React from 'react'
import { LoginContainer } from './styles'
import { FormContainer, FormLogoImage, FormButton, FormTextInput } from '../lib/ui/forms'

export default function Login() {
    return (
        <LoginContainer>
            <FormContainer elevation={5}>
                <FormLogoImage />
                <FormTextInput label="standart"/>
                <FormTextInput label="standart"/>
                <FormButton>PRIFFKI</FormButton>
            </FormContainer>
        </LoginContainer> 
    )
}

