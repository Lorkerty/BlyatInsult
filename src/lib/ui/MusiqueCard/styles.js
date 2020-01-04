import styled from 'styled-components'
import {Button, Card} from '@material-ui/core'

export const MusiqueCardStr = styled(Card)`

min-width: 400px;
display: flex;
flex-direction: column;
width: 400px;
height: 400px;
background-color: #2b323f;
margin: 20px;
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
position: relative;

&&::before
{
    top: 0px;
    left: 0px;
    -webkit-filter: blur(12px);
    filter: blur(12px);
    width: 100%;
    height: 100px;
    background: inherit;
    background-attachment: fixed;
}

background: url('https://pm1.narvii.com/6845/614de7032e8ffa8bf8d4fff5612dfb8d5cae82fev2_hq.jpg') center center no-repeat;

`

export const MusiqueCardTitleBackground = styled.div`


position: absolute;
top: 0px;
left: 0px;


`

export const MusiqueCardTextContent = styled.div`

width: 100%;
display: flex;
flex-direction: column;
overflow-y: auto;
overflow-x: hidden;
max-height: 80px;
height: 100%;

-moz-box-shadow: inset 0px 3px 16px 1px rgba(0,0,0,0.73);
box-shadow: inset 0px 3px 16px 1px rgba(0,0,0,0.73);

`

export const MusiqueCardButtonDiv = styled.div`

width: 100%;
display: flex;
justify-content: space-between;

`;