import React, {useState} from 'react'
import {MusiquePage, FavouriteContainer, HistoryContainer} from './styles'
import MusiqueCard from '../lib/ui/MusiqueCard/MusiqueCard.js'
import testData from '../data/testdata.json'

const mappedData = testData.map(song => {
    song.likedByUser = false
    return song;
})

export default function Musique() {

    const [songs, setSongs] = useState(mappedData)

    console.log(mappedData);
    function renderMusiqueCard(object, index) {

        return <MusiqueCard 
        title={object.title} 
        description={object.description} 
        author={object.author} 
        likes={object.likes} 
        dislikes={object.dislikes} 
        maldad={object.maldad} 
        id={object.id} 
        img={object.img}
        onLike={handleLike}
        index={index}
        />
    }
    function handleLike(id) {
        setSongs(songs => {
            const updateAt = songs.findIndex(s => s.id === id)
            songs[updateAt].likedByUser = true
            return [ ...songs
            ]; 
        })
        
    }
    return (
        <MusiquePage>
            <FavouriteContainer>
                {songs.filter(s => !s.likedByUser).map(renderMusiqueCard)} 
            </FavouriteContainer>
            <HistoryContainer>
                {songs.filter(s => s.likedByUser).map(renderMusiqueCard)}            
            </HistoryContainer>
        </MusiquePage>
    )
}

