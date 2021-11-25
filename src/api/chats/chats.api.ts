import HTTPTransport from "../../services/api/api.service";
import {BaseAPI} from "../base.api";

const api = new HTTPTransport();

const root = '/chats'

class ChatsAPI extends BaseAPI {
    async chats(): Promise<any> {
        return await api.get(`${root}`);
    }

    async createChat(title: string): Promise<any> {
        return await api.post(`${root}`, { data: { title } })
    }

    async addUserToChat(userId: number, chatId: number): Promise<any> {
        return await api.put(`${root}/users`,
            {data: { users: [userId], chatId: chatId }});
    }

    async token(chatId: number): Promise<any> {
        return await api.post(`${root}/token/${chatId}`, {});
    }
}

export default ChatsAPI;