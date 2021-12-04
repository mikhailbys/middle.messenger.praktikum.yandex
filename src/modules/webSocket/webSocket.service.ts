import {handleGetMessage} from "../../pages/messages/messages.service";

const rootUrl = 'wss://ya-praktikum.tech/ws/chats/:userId/:chatId/:token';

class WebSocketService {
    socket: WebSocket;

    constructor(userId: number, chatId: number, token: string) {
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
        this.socket.send(JSON.stringify({
            content: '0',
            type: 'get old'
        }));
    }

    onClose(event) {
        if (event.wasClean) {
            console.log('Соединение закрыто чисто');
        } else {
            console.log('Обрыв соединения');
            alert('Ошибка соединения')
        }
        // todo clear interval
        clearInterval(this.ping);
        console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    }

    onMessage(event) {
        console.log('Получены данные', event.data);
        const { data } = event;
        const payload = JSON.parse(data);
        if (payload.type === 'pong') {
            return;
        }
        if (Array.isArray(payload)) {
            payload.forEach(chunk => {
                handleGetMessage(chunk.content, chunk.user_id, chunk.is_read);
            })
        }
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