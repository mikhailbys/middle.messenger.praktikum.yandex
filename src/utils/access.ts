export const checkAccess = () => localStorage.getItem('isLogged') === 'true';

export const setAccess = (isLogged: boolean) =>
    localStorage.setItem('isLogged', isLogged.toString());