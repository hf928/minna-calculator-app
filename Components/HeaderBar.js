

import React from 'react';

import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

function HeaderBar () {

    return (

        <Header>
            <Left></Left>
            <Body>
                <Title>Minna算外匯</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='more' />
                </Button>
            </Right>
        </Header>
    );
}


export default HeaderBar;
