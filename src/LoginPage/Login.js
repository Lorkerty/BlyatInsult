import React from 'react'
import { LoginContainer } from './styles'
import { FormContainer, FormLogoImage, FormButton, FormTextInput } from '../lib/ui/forms'
import useTextInput from '../lib/hooks/useTextInput'


export default function Login() {

    const [nickName, handleNicknameChange] = useTextInput("")
    const[password, handlePasswordChange] = useTextInput("");
    

    function handleSubmit(event){

        event.preventDefault();
        console.log(nickName);
        console.log(password);

    }

    return (
        <LoginContainer onSubmit={handleSubmit}>
          
            <FormContainer elevation={5}>
                <FormLogoImage />
               
                <FormTextInput required onChange={handleNicknameChange} label="Nickname" variant="outlined" value={nickName}/>
                <FormTextInput required onChange={handlePasswordChange} label="Password" variant="outlined" type="password" value={password}/>
                <FormButton type="submit" >Залоол</FormButton>
            </FormContainer>

        </LoginContainer> 
    )
}

