import React from 'react';
import LogoFile from '../../assets/logo.png'
import {
    Container,
    Logo,
    FormContainer,
    TextLabel,
    TextInput,
    LoginButtonLabel,
    LoginButton,
    SignUpButtonLabel,
    SignUpButton,
    YearLabel
} from './styles';

export default function Login() {
   
    return (
        <Container behavior="padding" enabled>
            <Logo source={LogoFile}></Logo>
            <FormContainer>
                <TextLabel>Login</TextLabel>
                <TextInput></TextInput>
                <TextLabel>Senha</TextLabel>
                <TextInput secureTextEntry={true} textContentType="password"></TextInput>
            </FormContainer>
            <FormContainer>
                <LoginButton>
                    <LoginButtonLabel>entrar</LoginButtonLabel>
                </LoginButton>
                <SignUpButton>
                    <SignUpButtonLabel>Cadastre-se</SignUpButtonLabel>
                </SignUpButton>
                <YearLabel>{new Date().getFullYear()}</YearLabel>
            </FormContainer>
        </Container>
    );
}
