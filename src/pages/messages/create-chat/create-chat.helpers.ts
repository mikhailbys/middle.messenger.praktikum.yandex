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

    button?.addEventListener('click', (e) => {
        const name = (input as HTMLInputElement)?.value;
        //todo api
        console.log('name:', name)
    });
};