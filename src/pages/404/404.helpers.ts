import constants from "../../constants";
import Router from "../../modules/router";

export const prepareErrorPage = (router: Router) => {

    const back = document.querySelector('#back-to-main');
    back?.addEventListener('click', (e) => {
        e.preventDefault();
        router.go(constants.routes.main);
    });

    const backToChat = document.querySelector('#back-to-chat');
    backToChat?.addEventListener('click', (e) => {
        e.preventDefault();
        router.go(constants.routes.messages);
    });
};