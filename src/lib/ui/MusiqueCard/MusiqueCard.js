import React from 'react'
import { 
        MusiqueCardStr,
        MusiqueCardButton, 
        MusiqueCardImg, 
        MusiqueCardTextContent,
        MusiqueCardButtonDiv 
    } from './styles'

export default function MusiqueCard() {
    return(

        <MusiqueCardStr>
            <MusiqueCardImg/>
            <MusiqueCardTextContent>
                IdiotasIdiotasIdiotasIdiotasIdiotas
                IdiotasIdiotasIdiotas
                IdiotasIdiotasIdiotasIdiotas
                Idiotas
                Idiotas
                IdiotasIdiotasIdiotas
                
            </MusiqueCardTextContent>
            <MusiqueCardButton>
                Like
            </MusiqueCardButton>
            <MusiqueCardButton>
                Dislike(Ban)
            </MusiqueCardButton>
            <MusiqueCardButtonDiv></MusiqueCardButtonDiv>
        </MusiqueCardStr>

    )
         
    
}

