import React, {useState} from 'react'

import { 
        MusiqueCardStr,
        MusiqueCardButton, 
        MusiqueCardImg, 
        MusiqueCardTextContent,
        MusiqueCardButtonDiv,
        MusiqueCardTitleBackground
    } from './styles'

export default function MusiqueCard({title, description, author, likes, dislikes, maldad, id, img, onLike, onDislike, index}) {

    function handleLikeButton(){
        onLike(id)       
    }
    function handleDislikeButton() {
        onDislike(id);
    }

    return(
        <MusiqueCardStr>
            <MusiqueCardImg img={img}>
                {title}, {author}, {index}
                <MusiqueCardTitleBackground/>            
            </MusiqueCardImg>
            <MusiqueCardTextContent>
                {description}
            </MusiqueCardTextContent>
            <MusiqueCardButtonDiv>
                <MusiqueCardButton onClick={handleLikeButton}>
                    Like({likes})
                </MusiqueCardButton>
                <MusiqueCardButton onClick={handleDislikeButton}>
                    Dislike
                </MusiqueCardButton>
            </MusiqueCardButtonDiv>
        </MusiqueCardStr>
    )   
}

