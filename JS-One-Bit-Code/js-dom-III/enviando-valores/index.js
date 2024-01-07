function register(element) {
    const userame = window.document.getElementById('username').value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    console.log({userame, password, passwordConfirmation})
}