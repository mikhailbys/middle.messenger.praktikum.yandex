import ChatsAPI from "../../api/chats/chats.api";
import Store from "../../modules/store";
import constants from "../../constants";

const api = new ChatsAPI();
const store = new Store();
const currentPage = constants.routes.messages;

export const getChats = async () => {
    const response = await api.chats();
    if (response.status === 200 && response.response) {
        const data = JSON.parse(response.response);
        console.log(data);
        // todo update store
    }
};

export const createChat = async (title: string) => {
    const response = await api.createChat(title);
    return response.status === 200 && response.response;

};