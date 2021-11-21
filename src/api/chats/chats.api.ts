import HTTPTransport from "../../services/api.service";
import {BaseAPI} from "../base.api";

const api = new HTTPTransport();

const root = '/chats'

class ChatsAPI extends BaseAPI {
    async chats(): Promise<any> {
        return await api.get(`${root}`);
    }
}

export default ChatsAPI;