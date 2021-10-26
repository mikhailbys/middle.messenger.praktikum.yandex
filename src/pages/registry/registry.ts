const registryForm: HTMLFormElement | null = document.querySelector('#registry_form');

if (registryForm) {
    registryForm.onsubmit = (e) => {
        const formData = new FormData(registryForm);

        const login = formData.get('login');
        const mail = formData.get('mail');
        const firstName = formData.get('first_name');
        const secondName = formData.get('second_name');
        const phone = formData.get('phone');
        const password = formData.get('password');
        const passwordRepeat = formData.get('password-repeat');

        console.log({
            login,
            password,
            passwordRepeat,
            mail,
            firstName,
            secondName,
            phone,
        });

        e.preventDefault();
    };
}
