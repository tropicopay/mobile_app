import React from 'react';
import {
    Container,
    ContainerHeader,
    Logo,
    Icon,
    Avatar,
    UserBalance,
    UserDataContainer,
    UserName,
    UserNameBalanceContainer,
    Map,
    BuscarIcon,
    BuscarTextInput,
    MapContainer,
    BuscarContainer
} from './styles';
import { TouchableOpacity } from 'react-native'
import LogoFile from '../../../assets/logo.png';
import Context from '../../store'


export default function Home() {
    const { signOut } = React.useContext(Context.AuthContext);

    return (
        <>
            <ContainerHeader>
                <TouchableOpacity>
                    <Icon name="bars" size={28} />
                </TouchableOpacity>
            </ContainerHeader>
            <Logo source={LogoFile}></Logo>
            <Container>
                <UserDataContainer>
                    <Avatar source={{ uri: 'https://avatars1.githubusercontent.com/u/15951901?s=460&v=4' }}></Avatar>
                    <UserNameBalanceContainer>
                        <UserName>Gabriell Huver</UserName>
                        <UserBalance>Saldo: R$ 666,00</UserBalance>
                    </UserNameBalanceContainer>
                </UserDataContainer>

                <Map></Map>
                <BuscarContainer>
                    <BuscarTextInput placeholder={'Buscar estabelecimentos'} />
                    <BuscarIcon name="search" size={32} ></BuscarIcon>
                </BuscarContainer>
            </Container>
        </>
    );
}