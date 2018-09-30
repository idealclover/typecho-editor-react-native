/**
 * @author idealclover
 * @date 18-9-23
 */


import React, {Component} from 'react';
import {
    Body, Button, Header, Icon, Left, Right, Title,
    Container, Form, Item, Label, Input, Text
} from "native-base";

import Editor from "../components/Editor";
import HeaderBar from "../components/HeaderBar";
import {Alert} from "react-native";

type Props = {};
export default class SettingsLayout extends Component<Props> {

    constructor(){
        super();
        // TODO: needs to be deleted
        this.state = {address: '', username: '', password: '', apikey: '', admkey: ''};
    }

    componentWillMount(){
        storage.load({
            key: 'default',
        }).then(rst => {
            this.setState({
                address: rst.address,
                username: rst.username,
                password: rst.password,
                // TODO: needs to be deleted
                apikey: rst.apikey,
                admkey: rst.admkey
            });
        }).catch(err => {
            Alert.alert(err.name, err.message);
        });
    }

    save = () => {
        // Alert.alert(this.state.address,this.state.password);
        storage.save({
            key: 'default',
            data: {
                address: this.state.address,
                username: this.state.username,
                password: this.state.password,
                // TODO: needs to be deleted
                apikey: this.state.apikey,
                admkey: this.state.admkey
            }
        });
        Alert.alert("已保存");
    };

    render() {
        const {navigation} = this.props;


        return (
            //TODO: 替换为HeaderBar
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.toggleDrawer()}>
                            <Icon name='menu'/>
                        </Button>
                    </Left>
                    <Body>
                    <Title>Typecho Editor</Title>
                    </Body>
                    <Right/>
                </Header>
                <Form>
                    <Item stackedLabel>
                        <Label>博客地址</Label>
                        <Input
                            defaultValue={this.state.address}
                            onChangeText={(address) => this.setState({address})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>用户名</Label>
                        <Input
                            defaultValue={this.state.username}
                            onChangeText={(username) => this.setState({username})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>密码</Label>
                        <Input defaultValue={this.state.password}
                               onChangeText={(password) => this.setState({password}) }
                               secureTextEntry/>
                    </Item>
                    {/*TODO: needs to be deleted*/}
                    <Item stackedLabel>
                        <Label>ApiKey</Label>
                        <Input
                            defaultValue={this.state.apikey}
                            onChangeText={(apikey) => this.setState({apikey})}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>AdmKey</Label>
                        <Input
                            defaultValue={this.state.admkey}
                            onChangeText={(admkey) => this.setState({admkey})}/>
                    </Item>

                </Form>
                <Button onPress={this.save}
                        block style={{margin: 15, marginTop: 50}}>
                    <Text>保存</Text>
                </Button>
            </Container>
        );
    }
}
