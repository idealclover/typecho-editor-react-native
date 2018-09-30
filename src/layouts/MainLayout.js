/**
 * @author idealclover
 * @date 18-9-23
 */

import React, {Component} from 'react';
import {Body, Button, Header, Icon, Left, Right, Title, Container} from "native-base";
import Editor from "../components/Editor";
import HeaderBar from "../components/HeaderBar";

type Props = {};
export default class MainLayout extends Component<Props> {

    render() {
        const {navigation} = this.props;
        return (
            //TODO: 替换为HeaderBar
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.toggleDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Typecho Editor</Title>
                    </Body>
                    <Right />
                </Header>
                <Editor/>
            </Container>
        );
    }
}
