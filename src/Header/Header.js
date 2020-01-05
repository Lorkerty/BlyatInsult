import React from 'react'
import { HeaderCabina } from './styles'
import { FormSmallButton, DivForButtons } from '../lib/ui/forms/index'


export default function Header() {
    return (
        <HeaderCabina elevation={5}>
           <div> SIGAN SIGAN SE ESTO LEYENDO TODO </div>
            <DivForButtons>
                 <FormSmallButton href="/">Login</FormSmallButton>
                 <FormSmallButton href="/register">Register</FormSmallButton>
                 <FormSmallButton href="/musiquePage">maldad...</FormSmallButton>
            </DivForButtons>
        </HeaderCabina>

    )
}
