import Router from "../../modules/router";
import constants from "../../constants";

const authMessages = constants.alerts;

export const processResponseStatus = (responseStatus: number, router: Router): void | string => {
    switch (responseStatus) {
        case (400):
            alert(authMessages.signIn400);
            break;
        case (401):
            router.go(constants.routes.accessError);
            break;
        case (500):
            router.go(constants.routes.internalError);
            break;
    }
}