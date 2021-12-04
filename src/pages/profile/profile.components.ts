import Span from "../../components/span/span.component";

export const initializeInnerComponents = () => {

    const mailLabel = new Span({
        attributes: {},
        innerText: 'Почта'
    });
    const mailValue = new Span({
        attributes: {},
        innerText: ''
    });

    const loginLabel = new Span({
        attributes: {},
        innerText: 'Логин'
    });
    const loginValue = new Span({
        attributes: {},
        innerText: ''
    });

    const nameLabel = new Span({
        attributes: {},
        innerText: 'Имя'
    });
    const nameValue = new Span({
        attributes: {},
        innerText: ''
    });

    const secondNameLabel = new Span({
        attributes: {},
        innerText: 'Фамилия'
    });
    const secondNameValue = new Span({
        attributes: {},
        innerText: ''
    });

    const chatNameLabel = new Span({
        attributes: {},
        innerText: 'Имя в чате'
    });
    const chatNameValue = new Span({
        attributes: {},
        innerText: ''
    });

    const phoneLabel = new Span({
        attributes: {},
        innerText: 'Телефон'
    });
    const phoneValue = new Span({
        attributes: {},
        innerText: ''
    });

    return {
        mailLabel,
        mailValue,
        loginLabel,
        loginValue,
        nameLabel,
        nameValue,
        secondNameLabel,
        secondNameValue,
        chatNameLabel,
        chatNameValue,
        phoneLabel,
        phoneValue
    };
}