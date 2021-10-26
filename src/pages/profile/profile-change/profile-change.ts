const profileForm: HTMLFormElement | null = document.querySelector('#profile_form');

if (profileForm) {
    profileForm.onsubmit = (e) => {
        const formData = new FormData(profileForm);

        const mail = formData.get('email');
        const login = formData.get('login');
        const firstName = formData.get('first_name');
        const secondName = formData.get('second_name');
        const displayName = formData.get('display_name');
        const phone = formData.get('phone');

        console.log({ mail, login, firstName, secondName, displayName, phone });

        e.preventDefault();
    };
}
