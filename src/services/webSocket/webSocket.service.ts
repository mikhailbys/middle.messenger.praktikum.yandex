import Store from "../../modules/store";
import constants from "../../constants";

const rootUrl = 'wss://ya-praktikum.tech/ws/chats/:userId/:chatId/:token';

class WebSocketService {
    socket: WebSocket;
    store: Store;

    constructor(userId: number, chatId: number, token: string) {
        this.store = new Store();

        this.socket = new WebSocket(this.prepareUrl(userId, chatId, token));
        this.socket.addEventListener('open', this.onOpen.bind(this));
        this.socket.addEventListener('message', this.onMessage.bind(this));
        this.socket.addEventListener('error', this.onError.bind(this));
        this.socket.addEventListener('close', this.onClose.bind(this));
    }

    ping = setInterval(() => {
        this.socket.send(JSON.stringify({
            type: 'ping'
        }))
    }, 3000);

    prepareUrl(userId: number, chatId: number, token: string) {
        return rootUrl
            .replace(':userId', userId.toString())
            .replace(':chatId', chatId.toString())
            .replace(':token', token)
    }

    onOpen() {
        console.log('Соединение установлено');
    }

    onClose(event) {
        if (event.wasClean) {
            clearInterval(this.ping)
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
            alert('Ошибка соединения')
        }
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    }

    onMessage(event) {
        console.log('Получены данные', event.data);
        // todo
        const {} = event.data;
        this.store.update({
            type: 'value',
            props: {}
        }, constants.routes.messages);
    }

    onError(event) {
        console.log('Ошибка', event);
        alert('Ошибка соединения');
    }

    send(message: string) {
        const processedMessage = JSON.stringify({
            content: message,
            type: 'message'
        });
        this.socket.send(processedMessage);
    }
}

export default WebSocketService;