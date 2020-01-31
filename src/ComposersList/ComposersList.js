import React, {useState} from 'react'
import {Button} from '@material-ui/core'
import { ComposerCard, ComposersTitle, CloseButton } from './styles'
import lists from '../data/lists.json'

export default function ComposersList()/**display cponentom**/ {
    const [composers, setComposers] = useState(lists)
    const renderComposerSublist = item => (
        <div> 
        <div>{item.title}</div>
        <div>{item.modalContent}</div>
    </div>
)
    function deleteComposer(index) {
        return function() {
           setComposers((previousComposers) => { 
                previousComposers.splice(index, 1)
                return [...previousComposers]
           })
        }
    }
const renderComposer = (composer, index) => (
    <div>
        <Button onClick={deleteComposer(index)}>a</Button>
        <div><h1>{composer.title}</h1></div>
        {composer.sublist.map(renderComposerSublist)}
    </div>
)
    return(
        <div>
        {composers.map(renderComposer)}
        </div>
    )

}