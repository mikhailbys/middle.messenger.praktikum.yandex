import ChatsAPI from "../../api/chats/chats.api";
import Store from "../../modules/store";
import constants from "../../constants";
import {SignIn} from "../../models/signIn.model";
import Router from "../../modules/router";
import {Chat} from "../../models/chat";

const api = new ChatsAPI();
const store = new Store();
const currentPage = constants.routes.messages;

export const getChats = async () => {
    const response = await api.chats();
    if (response.status === 200 && response.response) {
        const data = JSON.parse(response.response);
        console.log(data);
    }
}