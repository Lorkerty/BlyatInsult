import styled from 'styled-components'
import apollo from '../../../assets/kisspng-apollo-belvedere-bust-marble-sculpture-vatican-mus-roman-statue-head-5aebfcba210c79.0869592615254150981354.png'

import {
    Button,
    Paper,
    TextField
} from '@material-ui/core'



export const FormContainer = styled(Paper)`

width: 30%;
height: 60%;
background-color: #2b323f;
align-items: center;
display: flex;
flex-direction: column;
justify-content: center;

`

export const FormLogoImage = styled.div`

width: 55%;
height: 27%;
background: url(${apollo}) center center no-repeat;
background-size: contain;
color: green;


`;

export const FormButton = styled(Button)`

height: 60px;
width: 100%;
color: green;
transition: all 4s ease-in-out;


`

export const FormTextInput = styled(TextField)`



&& input{
    color: #dc1818;

    &&::before{
        border-color: #a5a5a8;
    }
&&::after{
        border-color: #dc1818;
    }
}

&& label{
    color: #a5a5a8;
}

width: 40%;
margin-bottom: 30px;

`