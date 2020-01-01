import React from 'react'
import { HeaderCabina } from './styles'


export default function Header() {
    return (
        <HeaderCabina>
            <h3>SIGAN SIGAN SE ESTO LEYENDO TODO</h3>
            <h3>
                <a href="/">Login</a>
                <a href="/register">Register</a>
                <a target="blank" href="https://www.youtube.com/watch?v=pKRK3GGzxTQ">who i am ?</a>
            </h3>            
        </HeaderCabina>
    )
}
