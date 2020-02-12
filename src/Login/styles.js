import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1; 
    background-color:#26bfd2;
    align-items:center;
    justify-content:space-between;
`;
export const FormContainer = styled.View`
    width:90%;
    align-items:center;
`
export const Logo = styled.Image`
    margin-top:48px;
`
export const TextLabel = styled.Text`
    color:#fff;
    align-self:flex-start;
    margin-left:42px;
    font-size:10px;
`
export const TextInput = styled.TextInput`
    font-size:18px;
    width:80%;
    text-align:left;
    margin-bottom:18px;
    padding:6px;
    border-bottom-width: 2px;
    border-bottom-color: #fff;
    color:#fff;
    
`
export const LoginButton = styled.TouchableOpacity`
    width:50%;
    background-color:#2a2264;
    align-items:center;
    border-radius:12px;    
`
export const LoginButtonLabel = styled.Text`
    padding:12px;
    font-size:20px;
    color:#fff;
`
export const SignUpButton = styled.TouchableOpacity`
    margin-bottom:12px;
`
export const SignUpButtonLabel = styled.Text`
    padding:12px;
    font-size:16px;
    color:#fff;
`
export const YearLabel = styled.Text`
    color:#fff;
`