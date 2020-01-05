import React, {useState} from 'react'

import { 
        MusiqueCardStr,
        MusiqueCardButton, 
        MusiqueCardImg, 
        MusiqueCardTextContent,
        MusiqueCardButtonDiv,
        MusiqueCardTitleBackground
    } from './styles'

export default function MusiqueCard({title, description, author, likes, dislikes, maldad, id, img, onLike, index}) {

    const [likesState, setLikesState] = useState(likes)

    const[dislikesState, setDislikesState] = useState(dislikes)

    function increment(value) {
        return value + 1;
    }

    function incrementLikes(){
        onLike(id)

        setLikesState(increment)

    }

    function incrementDislikes() {
        setDislikesState(increment);
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
                <MusiqueCardButton onClick={incrementLikes}>
                    Like({likesState})
                </MusiqueCardButton>
                <MusiqueCardButton onClick={incrementDislikes}>
                    Dislike({dislikesState})
                </MusiqueCardButton>
            </MusiqueCardButtonDiv>
        </MusiqueCardStr>

    )
         
    
}

