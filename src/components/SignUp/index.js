import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import {
    Container,
    Logo,
    FormContainer,
    TextInput,
    SignUpButton,
    SignUpButtonLabel,
    CancelButton,
    CancelButtonLabel
} from './styles';
import LogoFile from '../../../assets/logo.png'
import { CpfMask } from '../../util/mask'

export default function Home({ navigation }) {

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignUp = () => {
        Alert.alert(JSON.stringify({ nomeCompleto, email, cpf, confirmPassword, password }))
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <Container behavior="padding" enabled>
                <Logo source={LogoFile} />
                <FormContainer>
                    <TextInput value={nomeCompleto} onChangeText={text => setNomeCompleto(text)} placeholder="Nome completo" ></TextInput>
                    <TextInput value={email} onChangeText={text => setEmail(text)} autoCapitalize="none" placeholder="Email"></TextInput>
                    <TextInput value={nomeCompleto} onChangeText={text => setNomeCompleto(text)} placeholder="CPF" value={cpf} onChangeText={text => setCpf(CpfMask(text))}></TextInput>
                    <TextInput value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} textContentType="password" placeholder="Senha"></TextInput>
                    <TextInput value={confirmPassword} onChangeText={text => setConfirmPassword(text)} secureTextEntry={true} textContentType="password" placeholder="Confirmar senha"></TextInput>
                </FormContainer>
                <FormContainer>
                    <SignUpButton onPress={handleSignUp}>
                        <SignUpButtonLabel>cadastrar</SignUpButtonLabel>
                    </SignUpButton>
                    <CancelButton>
                        <CancelButtonLabel onPress={() => { navigation.navigate('SignIn') }}>Cancelar</CancelButtonLabel>
                    </CancelButton>
                </FormContainer>
            </Container>
        </ScrollView>
    );
}
