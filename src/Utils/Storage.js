/**
 * @author idealclover
 * @date 18-9-23
 */

import Storage from "react-native-storage";
import {AsyncStorage} from "react-native";

let storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: null,
});

global.storage = storage;
