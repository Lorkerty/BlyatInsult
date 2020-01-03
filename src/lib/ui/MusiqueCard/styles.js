import styled from 'styled-components'
import {Button, Card} from '@material-ui/core'

export const MusiqueCardStr = styled(Card)`

width: 400px;
height: 400px;
background-color: #2b323f;
margin: 20px;
flex: 0 0 auto;
align-items: center;

`

export const MusiqueCardButton = styled(Button)`

    size: small;
    background-color: #2b323f;
    color: #4caf50;

`

export const MusiqueCardImg = styled.div`

width: 100%;
height: 70%;
background-color: #a5a5a8;

`

export const MusiqueCardTextContent = styled.div`

width: 100%;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
overflow-y: scroll;
overflow-x: hidden;


`

export const MusiqueCardButtonDiv = styled.div`

width: 100%;
display: flex;
justify-content: space-between;

`

