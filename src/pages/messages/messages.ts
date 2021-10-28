const chats = document.querySelectorAll('.single-chat-container');

const messageContainer = document.querySelector('.new-message-container');
const clue = document.querySelector('.choose-chat-clue');

const messageInput: HTMLInputElement | null = document.querySelector('.message-input');
const sendButton = document.querySelector('.send-button');

function validate() {
    let result = true;

    if(messageInput?.value === '') {
        messageInput?.focus();
        return false;
    }

    return result;
}

chats.forEach(chat => {
    chat.addEventListener('click', () => {
        messageContainer?.classList.remove('hide');
        clue?.classList.add('hide');
    })
});

sendButton?.addEventListener('click', () => {
    validate() ? console.log({ message: messageInput?.value}) : null;
});

