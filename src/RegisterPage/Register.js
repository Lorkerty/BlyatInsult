import React from 'react'
import { RegisterContainer } from './styles'
import { FormContainer, FormLogoImage, FormTextInput, FormButton } from '../lib/ui/forms'
import useTextInput from '../lib/hooks/useTextInput'

export default function Register() {
    
    const [nickName, handleNicknameChange] = useTextInput("")
    const [password, handlePasswordChange] = useTextInput("")
    const [passwordRepeat, handlePasswordRepeatChange] = useTextInput("")   

    function handleSubmit(event){
        event.preventDefault(); 
        console.log(nickName);
        console.log(password);
    }

    return (

       <RegisterContainer onSubmit={handleSubmit}>
           <FormContainer elevation={5}>
               <FormLogoImage/>
                <FormTextInput
                    required
                    onChange={handleNicknameChange}
                    value={nickName} 
                    label="Nickname" 
                    variant="outlined"
                />
               <FormTextInput 
                    required 
                    onChange={handlePasswordChange} 
                    value={password} 
                    label="Password" 
                    variant="outlined" 
                    type="password"
                />
               <FormTextInput 
                    required 
                    onChange={handlePasswordRepeatChange} 
                    value={passwordRepeat} 
                    label="Повторить?" 
                    variant="outlined" 
                    type="password"
                    error={password!==passwordRepeat}
                />
               <FormButton type="submit">Добро Пожааж</FormButton>
           </FormContainer>
       </RegisterContainer> 
    )
}

