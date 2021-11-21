import {createChat, getChats} from "../messages.service";

export const prepareCreateChatModal = () => {
    const modal = document.querySelector('#create-modal');
    const createButton = document.querySelector('#create-chat');
    const input = document.querySelector('#create-chat-input');
    const button = document.querySelector('#create-chat-button');

    createButton?.addEventListener('click', (e) => {
        e.preventDefault();
        (modal as HTMLFormElement).style.display = "block";
    });

    window.onclick = (event) => {
        if (event.target === modal) {
            (modal as HTMLFormElement).style.display = "none";
        }
    };

    async function onSave(e: Event){
        const title = (input as HTMLInputElement)?.value;
        if (title !== '') {
            const result = await createChat(title);
            if (result) {
                (modal as HTMLFormElement).style.display = "none";
                alert('чат создан!');
                getChats();
            }
        }
    }

    //  todo отправляет дважды
    button?.addEventListener('click', onSave);
};