export const checkAccess = () => Boolean(localStorage.getItem('isLogged'));

export const setAccess = (isLogged: boolean) =>
    localStorage.setItem('isLogged', isLogged.toString());