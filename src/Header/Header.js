import React from 'react'
import { HeaderCabina } from './styles'
import { FormSmallButton, DivForButtons } from '../lib/ui/forms/index'


export default function Header() {
    return (
        <HeaderCabina elevation={5}>
           <div> SIGAN SIGAN SE ESTO LEYENDO TODO </div>
            <DivForButtons>
                 <FormSmallButton href="/">Login</FormSmallButton>
                 <FormSmallButton href="/register">Register</FormSmallButton>
                 <FormSmallButton href="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1933936093506083&imgrefurl=https%3A%2F%2Fru-ru.facebook.com%2Fpages%2Fcategory%2FActor%2FUnofficial-se%25C3%25B1or-maldad-1933936093506083%2Fposts%2F&tbnid=tBQBsSjli_cXtM&vet=12ahUKEwit2cqY1uXmAhUiz6YKHWi7AI4QMygOegUIARDjAQ..i&docid=4srfMFRulLf8IM&w=320&h=426&itg=1&q=MALDAD&ved=2ahUKEwit2cqY1uXmAhUiz6YKHWi7AI4QMygOegUIARDjAQhttps://https://scontent.fkbp1-1.fna.fbcdn.net/v/t1.0-1/19511388_1918807618390086_2308283825286058249_n.jpg?_nc_cat=102&_nc_ohc=z6qlSv4YrxsAQnWu8rKRicbSufkVFHL9-1CHCZocGeNpgow6ufqV8aMbA&_nc_ht=scontent.fkbp1-1.fna&oh=be0031ed9e691ac505f66ee83c493f08&oe=5EA7AF28.youtube.com/watch?v=pKRK3GGzxTQ">maldad...</FormSmallButton>
            </DivForButtons>
        </HeaderCabina>

    )
}
