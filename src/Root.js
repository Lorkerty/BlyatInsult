import React from 'react'
import App from './App'
import {
    ThemeProvider,
    StylesProvider
} from '@material-ui/core'
import botheme from './lib/themes/botheme'

export default function(){
    return(
    <StylesProvider injectFirst>
        <ThemeProvider theme={botheme}>
        <App/>
        </ThemeProvider>
    </StylesProvider>
    )
}