import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1; 
    background-color:#efefef;
    align-items:center;    
    justify-content:space-between;
`;
export const Logo = styled.Image`
    margin-top:64px;
`
export const FormContainer = styled.View`
    width:100%;
    align-items:center;
`
export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: "#8583a4"
})`
    width:76%;
    margin-bottom:12px;
    border-bottom-width:2px;
    border-color: #8583a4;
    padding:10px;
`
export const SignUpButton = styled.TouchableOpacity`
    width:50%;
    background-color:#2a2264;
    align-items:center;
    border-radius:12px;   
    margin-bottom:12px;
`
export const SignUpButtonLabel = styled.Text`
    padding:12px;
    font-size:20px;
    color:#fff;
`
export const CancelButton = styled.TouchableOpacity`
   margin-bottom:36px;
`
export const CancelButtonLabel = styled.Text`
     color: #8583a4;
`