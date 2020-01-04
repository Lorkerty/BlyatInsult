import React from 'react'
import { 
        MusiqueCardStr,
        MusiqueCardButton, 
        MusiqueCardImg, 
        MusiqueCardTextContent,
        MusiqueCardButtonDiv,
        MusiqueCardTitleBackground
    } from './styles'

export default function MusiqueCard() {
    return(

        <MusiqueCardStr>
            <MusiqueCardImg>
                Name
                <MusiqueCardTitleBackground/>            
            </MusiqueCardImg>
            <MusiqueCardTextContent>
                Idiota sIdiotasIdi otasIdiotasIdiotas Idiota sIdiotasI di otasIdiot asId iota sIdi otasIdiotasId iotas IdiotasId iotas Idiota sIdiotasIdi otasIdiotasIdiotas Idiota sIdiotasI di otasIdiot asId iota sIdi otasIdiotasId iotas IdiotasId iotas Idiota sIdiotasIdi otasIdiotasIdiotas Idiota sIdiotasI di otasIdiot asId iota sIdi otasIdiotasId iotas IdiotasId iotas              
            </MusiqueCardTextContent>
            <MusiqueCardButtonDiv>
                <MusiqueCardButton>
                    Like
                </MusiqueCardButton>
                <MusiqueCardButton>
                    Dislike(Ban)
                </MusiqueCardButton>
            </MusiqueCardButtonDiv>
        </MusiqueCardStr>

    )
         
    
}

