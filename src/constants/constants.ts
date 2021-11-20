const constants = {
    clues: {
        enterLogin: 'Введите логин',
        enterPassword: 'Введите пароль',
        enterMail: 'Введите почту',
        enterFirstName: 'Введите имя',
        enterSecondName: 'Введите фамилию',
        enterPhone: 'Введите номер телефона',
        repeatPassword: 'Повторите пароль',
        passwordsNotEqual: 'Введенные пароли не одинаковы',
        phoneRule: 'Телефон должен быть от 10 до 20 символов длинной и состоять только из цифр',
        nameRule: 'Убедитесь в отсутствии пробелов, спецсимволов (кроме "-"), имя должно начинаться с прописной буквы',
        passwordRule: 'Пароль должен содержать 8-40 символов, обязательна хотя бы одна заглавная буква и цифра',
        loginRule: 'Допустимая длинна логина 3-20 символов, латинские буквы, цифры, без пробелов, без спецсимволов (кроме "-", "_")',
        newPasswordRepeat: 'Новый пароль должен отличаться от старого',
    },
    routes: {
        main: '/',
        signUp: '/sign-up',
        messages: '/messenger',
        settings: '/settings',
        passwordSettings: '/settings/password',
        notFound: '/404',
        internalError: '/500',
        accessError: '/401'
    }
}

export default constants;