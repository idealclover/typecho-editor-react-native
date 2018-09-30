/**
 * @author idealclover
 * @date 18-9-22
 */

import {Button, Text, Container, Content, Form, Item, Input, Textarea, Label} from "native-base";
import React, {Component} from "react";
import {Alert} from 'react-native';

import WebPost from "../Utils/WebPost";

export default class Editor extends Component {

    constructor(){
        super();
        this.state = {title: '', content: ''};
    }

    // save(){
    //     // storage.setItem({'a': 'b'});
    //     // Alert.alert(this.state.title + this.state.content);
    //     Alert.alert("已保存");
    // }

    send = () =>{
        let rst = WebPost(this.state.title,this.state.content);
        if(rst){
            Alert.alert("已发送");
        }
        // Alert.alert(this.state.title,this.state.content);
    };


    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item style={{ marginLeft:20, marginRight: 20, marginTop: 10 }}>
                            <Input onChangeText={(title)=>this.setState({title})}
                                placeholder="标题" style={{ fontSize: 20}}/>
                        </Item>
                        <Textarea onChangeText={(content)=>this.setState({content})}
                            rowSpan={10} bordered placeholder="内容"
                            style={{ margin: 15, marginTop: 10, fontSize: 20 }}/>
                    </Form>
                    <Button onPress={this.send}
                        block style={{ margin: 15, marginTop: 10 }}>
                        <Text>发布</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
