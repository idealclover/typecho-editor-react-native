/**
 * @author idealclover
 * @date 18-9-23
 */

import {Alert} from "react-native";
// import {XmlRpcRequest} from "./mimic";

// let WebPost = (title, content) => {
//     let address, username, password;
//     storage.load({
//         key: 'default',
//     }).then(rst => {
//         address = rst.address;
//         username = rst.username;
//         password = rst.password;
//
//         let request = new XmlRpcRequest(address, "metaWeblog.newPost");
//
//         let param = {
//             "title": title,
//             "description": content
//         };
//
//         request.addParam(1);
//         request.addParam(username);
//         request.addParam(password);
//         request.addParam(param);
//
//         let response = request.send();
//         Alert.alert(response.parseXML());
//     }).catch(err => {
//         Alert.alert(err.name, err.message);
//     });
// };

let WebPost = (title, content) => {
    let address, username, password;
    // TODO: needs to be deleted
    let apikey, admkey;

    storage.load({
        key: 'default',
    }).then(rst => {
        address = rst.address;
        username = encodeURIComponent(rst.username);
        password = encodeURIComponent(rst.password);
        title = encodeURIComponent(title);
        content = encodeURIComponent(content);

        // TODO: needs to be deleted
        apikey = encodeURIComponent(rst.apikey);
        admkey = encodeURIComponent(rst.admkey);

        // let formData = new FormData;
        // formData.append("apikey", apikey);
        // formData.append("admkey", admkey);
        // formData.append("user", username);
        // formData.append("password", password);
        // formData.append("title", title);
        // formData.append("text", content);

        address += "?" + "action=post"
            + "&apikey=" + apikey
            + "&admkey=" + admkey
            + "&user=" + username
            + "&password=" + password
            + "&title=" + title
            + "&text=" + content;

        Alert.alert("QAQ", address);

        fetch(address, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                return true;
            }
        }).catch.error((error) => {
            // Alert.alert(error);
        });

    }).catch(err => {
        // Alert.alert(err.name + ' ' + err.message, err.stack);
    });
};

export default WebPost;
