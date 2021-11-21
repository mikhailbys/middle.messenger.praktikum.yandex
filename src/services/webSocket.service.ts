const rootUrl = 'wss://ya-praktikum.tech/ws/chats/:userId/:chatId/:token';

//const socket = new WebSocket('wss://ya-praktikum.tech/ws/chats/<USER_ID>/<CHAT_ID>/<TOKEN_VALUE>');

// сокет должен быть подписчиком стора
// при получении сообщения сокет вызывает апдейт стора с полями, в которых хранятся данные
// например, последнее сообщение, кол-во уведомлений
// а также само сообщение сделать в окне чата

class WebSocketService {
    socket: WebSocket;

    constructor(userId: number, chatId: number, token: string) {
        const url = this.prepareUrl(userId, chatId, token);
        this.socket = new WebSocket(url);
        this.init();
    }

    prepareUrl(userId: number, chatId: number, token: string) {
        return rootUrl
            .replace(':userId', userId.toString())
            .replace(':chatId', chatId.toString())
            .replace(':token', token.toString())
    }

    init() {
        this.socket.addEventListener('open',
            () => {
            console.log('Соединение установлено');
        });

        this.socket.addEventListener('close', event => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }
            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        this.socket.addEventListener('message', event => {
            console.log('Получены данные', event.data);
        });

        this.socket.addEventListener('error', event => {
            console.log('Ошибка', event);
        });

    }

    send(message: string) {
        const processedMessage = JSON.stringify({
            content: message,
            type: 'message',
        });
        this.socket.send(processedMessage);
    }
}

export default WebSocketService;