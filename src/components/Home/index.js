import React, { useEffect } from 'react';
import { Container } from './styles';
import { Text, Button } from 'react-native'
import Context from '../../store'
const Home = ({ navigation }) => {
    const { signOut } = React.useContext(Context.AuthContext);

    return (
        <Container>
            <Text>Logado</Text>
            <Button title="LogOut" onPress={() => {
                signOut()
            }} ></Button>
        </Container>
    );
}
export default Home