import React from 'react';

import {
    TouchableOpacity
} from 'react-native'
import LogoFile from '../../../../assets/logo.png';
import { Container, Logo, Icon } from './styles';

export default function HomeHeader() {
    return (
        <>
            <Container>
                <TouchableOpacity>
                    <Icon name="bars" size={28} />
                </TouchableOpacity>
            </Container>
            <Logo source={LogoFile}></Logo>
        </>
    );
}
