export const processResponseStatus = (response: { status: number } | any) => {
    let message = '';
    //todo
    switch (response.status) {
        case (400):
            message = 'Отправленные данные не корректны';
            break;
        case (500):
            message = 'Произошла непредвиденная ошибка';
            break;
    }
    return message;
}