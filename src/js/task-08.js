const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmitForm);

function handleSubmitForm(ev) {
    ev.preventDefault();
    const email = ev.currentTarget.elements.email.value;
    const password = ev.currentTarget.elements.password.value;

/*========================проверка, заполнены ли поля*/
    if (!email.trim() || !password.trim()) {
        return alert('Заповніть всі поля форми')
    }

    /*==================если все успешно,- очистить форму*/
    ev.currentTarget.reset();
}
