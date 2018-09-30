/**
 * @author idealclover
 * @date 18-9-22
 */

import {Body, Header, Icon, Left, Right, Title, Button} from "native-base";
import React, {Component} from "react";

export default class HeaderBar extends Component{

    render() {
        const {navigation}=this.props;
        return (
            <Header>
                <Left>
                    <Button transparent onPress={()=>navigation.toggleDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                <Title>Typecho Editor</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
