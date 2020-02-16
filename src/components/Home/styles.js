import styled from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native'
export const Container = styled.View`
    flex:1;
`;
export const ContainerHeader = styled.View`
    margin-left:12px;
    margin-top:48px;
`;
export const Icon = styled(FontAwesome)`
    
`;
export const Logo = styled.Image`
    position:absolute;
    align-self:center;
    margin-top:12px;
`;
export const UserDataContainer = styled.View`
    flex-direction:row;
    align-items:center;
    margin-top:24px;
    margin-left:12px;
    margin-bottom:14px;
`
export const Avatar = styled.Image`
    width: 64px; 
    height: 64px;
    border-radius:64px;
`
export const UserNameBalanceContainer = styled.View`
    margin-left:12px;    
`
export const UserName = styled.Text`
    color:#8583a4;
    font-size:18px;
    font-weight:bold;
`
export const UserBalance = styled.Text`
    color:#98d8e0;
    font-size:12px;
    font-weight:bold;
`

export const Map = styled(MapView)`
    flex:1;
    margin:3px;
`

export const BuscarContainer = styled.View`
    position:absolute;
    flex-direction:row;
    border-radius:30px;
    padding:12px;
    margin-left:12px;
    bottom:5%;
    background-color:#FFFAF0;
`
export const BuscarTextInput = styled.TextInput`   
    width:88%;
`

export const BuscarIcon = styled(FontAwesome)`  
    
`