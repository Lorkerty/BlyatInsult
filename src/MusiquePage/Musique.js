import React from 'react'
import {MusiquePage, FavouriteContainer, HistoryContainer} from './styles'
import MusiqueCard from '../lib/ui/MusiqueCard/MusiqueCard.js'

export default function Musique() {


    return (
        <MusiquePage>
            <FavouriteContainer>
                <MusiqueCard/>
                <MusiqueCard/>
                <MusiqueCard/>
                <MusiqueCard/>
                <MusiqueCard/>
                <MusiqueCard/>                
            </FavouriteContainer>
            <HistoryContainer>
                <MusiqueCard/>
                <MusiqueCard/>
                <MusiqueCard/>      
                <MusiqueCard/>
                <MusiqueCard/>
                <MusiqueCard/>
                <MusiqueCard/>            
            </HistoryContainer>
        </MusiquePage>
    )
}

