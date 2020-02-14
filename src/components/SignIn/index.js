import React, { useState, useContext } from 'react';
import LogoFile from '../../../assets/logo.png';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native'

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
import { api } from '../../services/api'
import Context from '../../store'
export default function SignIn({ navigation }) {
    const { signIn } = React.useContext(Context.AuthContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    async function handleLogin() {
        try {
            setLoading(true)
            const response = await api.post('/sessions', { email, password })
            signIn(response.data)
        } catch (error) {
            console.log(error)
            Alert.alert('Usuário ou senha inválidos!')
            setLoading(false)
        }
    }
    return (
        <Container behavior="padding" enabled>
            <Logo source={LogoFile}></Logo>
            <FormContainer>
                <TextLabel>Email</TextLabel>
                <TextInput autoCapitalize={'none'} onChangeText={text => setEmail(text)} value={email}></TextInput>
                <TextLabel>Senha</TextLabel>
                <TextInput onChangeText={text => setPassword(text)} value={password} secureTextEntry={true} textContentType="password"></TextInput>
            </FormContainer>
            <FormContainer>
                {loading ?
                    <ActivityIndicator size="small" color="#ffff" /> :
                    <LoginButton onPress={() => handleLogin()}>
                        <LoginButtonLabel>entrar</LoginButtonLabel>
                    </LoginButton>
                }
                <SignUpButton>
                    <SignUpButtonLabel onPress={() => { navigation.navigate('SignUp') }}>Cadastre-se</SignUpButtonLabel>
                </SignUpButton>
                <YearLabel>{new Date().getFullYear()}</YearLabel>
            </FormContainer>
        </Container>
    );
}
