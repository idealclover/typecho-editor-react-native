/**
 * @author idealclover
 * @date 18-9-22
 */

import {Badge, Container, Content, Icon, Left, List, ListItem, Right, Text} from "native-base";
import React, {Component} from "react";

const datas = [
    {
        name: "发布",
        route: "MainLayout",
        icon: "phone-portrait",
        bg: "#C5F442"
    },
    {
        name: "设置",
        route: "SettingsLayout",
        icon: "phone-portrait",
        bg: "#C5F442"
    }
];

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shadowOffsetWidth: 1,
            shadowRadius: 4
        };
    }

    render() {
        return (
            <Container>
                <Content bounces={false}>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem button noBorder
                                onPress={() => this.props.navigation.navigate(data.route)}>
                                <Left>
                                    <Icon active name={data.icon}/>
                                    <Text>
                                        {data.name}
                                    </Text>
                                </Left>
                                {data.types &&
                                    <Right>
                                        <Badge>
                                            <Text>{`${data.types} Types`}</Text>
                                        </Badge>
                                    </Right>}
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}
