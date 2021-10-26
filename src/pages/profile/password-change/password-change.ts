const passwordForm: HTMLFormElement | null = document.querySelector('#password_form');

if (passwordForm) {
    passwordForm.onsubmit = (e) => {
        const formData = new FormData(passwordForm);

        const oldPassword = formData.get('old_password');
        const newPassword = formData.get('new_password');
        const newPasswordRepeat = formData.get('new_password_repeat');

        console.log({ oldPassword, newPassword, newPasswordRepeat });

        e.preventDefault();
    };
}
