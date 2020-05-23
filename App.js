

import React, { useState, useEffect } from 'react';

import { AppLoading } from 'expo';

import { Container, Content } from 'native-base';

import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';


import HeaderBar from './Components/HeaderBar';
import Main from './Views/Main';


function App () {

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {

        (async function () {

            await Font.loadAsync({
                Roboto: require('native-base/Fonts/Roboto.ttf'),
                Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                ...Ionicons.font,
            });

            setIsReady(true);

        }());

    }, []);

    return (
        
        !isReady
            ? (
                <AppLoading/>
            )
            : (
                <Container>
                    <HeaderBar/>
                    <Content padder>
                        <Main/>
                    </Content>
                </Container>
            )
        
        

    );
}


export default App;
