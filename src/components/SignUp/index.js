import React, { useState, useContext } from 'react';
import { ScrollView, Alert, ActivityIndicator } from 'react-native';
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
import { api } from '../../services/api'
import Context from '../../store'
const AuthContext = Context.getAuthContext();

export default function Home({ navigation }) {

    const [nomeCompleto, setNomeCompleto] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { signUp } = useContext(AuthContext)
    async function handleCadatroUser() {
        try {
            setLoading(true)
            if (password !== confirmPassword) {
                Alert.alert('A senha e a confirmação devem ser iguais!')
            } else if (password.length < 6) {
                Alert.alert('A senha precisa ter 6 dígitos ou mais.')
            } else {
                const response = await api.post('/users', { name: nomeCompleto, email: email, cpf: cpf, password: password })
                Alert.alert(nomeCompleto + ' Cadastro Concluido!')
                navigation.navigate('SignIn')
            }

        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possivel efetuar o cadastro. Entre em contato com nossos canais de ajuda.')
            setLoading(false)
        }
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
                {
                    loading ? <ActivityIndicator size="small" color="#ffff" /> :
                        <FormContainer>
                            <SignUpButton onPress={() => handleCadatroUser()}>
                                <SignUpButtonLabel>cadastrar</SignUpButtonLabel>
                            </SignUpButton>
                            <CancelButton>
                                <CancelButtonLabel onPress={() => { navigation.navigate('SignIn') }}>Cancelar</CancelButtonLabel>
                            </CancelButton>
                        </FormContainer>
                }
            </Container>
        </ScrollView>
    );
}
