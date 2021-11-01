// more secure regex password must be :
// more than 8 chars
// at least one number
// at least one special character
export const PASSWORD_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

export const FIO_MASK = /^[A-ZА-Я][a-zA-Zа-яА-Я-]*$/;

// от 3 до 20 символов, латиница, может содержать цифры,
// но не состоять из них, без пробелов, без спецсимволов
// (допустимы дефис и нижнее подчёркивание).
export const LOGIN_MASK = /^(?=.*\d)[A-Za-z0-9а-яА-Я-_]{3,20}$/