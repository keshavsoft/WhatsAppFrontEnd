// import { StartFunc as StartFuncChangeName } from "./ChangeName.js";
// import { StartFunc as StartFuncFromPeer } from "./FromPeer.js";
// import { StartFunc as StartFuncSendMessage } from "./SendMessage.js";
// import { StartFunc as StartFuncSendMessageToAll } from "./SendMessageToAll.js";
// import { StartFunc as StartFuncMyIpAddress } from "./MyIpAddress.js";
// import { StartFunc as StartFuncMyLocation } from "./MyLocation.js";

let StartFunc = ({ inDataAsJson }) => {
    let LocalDataAsJson = inDataAsJson;

    if ("Type" in LocalDataAsJson) {
        if (LocalDataAsJson.Type === "returnOnlineClients") {
            var $table = $('#table');

            $table.bootstrapTable("load", LocalDataAsJson.res);

            // StartFuncFromPeer({ inDataAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
        };
    };

    //     if (LocalDataAsJson.Type === "ChangeName") {
    //         StartFuncChangeName({ inDataAsJson: LocalDataAsJson, inws: inws, inClients: inClients, inWss });
    //     };

    //     if (LocalDataAsJson.Type === "sendMessage") {
    //         StartFuncSendMessage({ inDataToClientAsJson: LocalDataAsJson, inws: inws, inClients: inClients });
    //     };
    //     if (LocalDataAsJson.Type === "sendMessageToAll") {
    //         StartFuncSendMessageToAll({ inDataToClientAsJson: LocalDataAsJson, inws, inClients, inWss });
    //     };

    //     if (LocalDataAsJson.Type === "myIpAddress") {
    //         StartFuncMyIpAddress({ inDataAsJson: LocalDataAsJson, inws, inClients });
    //     };

    //     if (LocalDataAsJson.Type === "myLocation") {
    //         StartFuncMyLocation({ inDataAsJson: LocalDataAsJson, inws, inClients });
    //     };
    // };
};

export { StartFunc };