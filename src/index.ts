const authForm: HTMLFormElement | null = document.querySelector('#auth_form');

if (authForm) {
    authForm.onsubmit = (e) => {
        const formData = new FormData(authForm);

        const login = formData.get('login');
        const password = formData.get('password');

        console.log({ login, password });

        e.preventDefault();
    };
}
