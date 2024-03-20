const loginApi = async () => {
    try {
        let email = document.getElementById("inputEmail").value;
        let password = document.getElementById("inputPassword").value;
        const validated = validateForm([email, password]);
        if (validated) {
            const data = {
                email,
                password
            }
            const response = await core("auth/login", "POST", data);
            if (response) {
                localStorage.setItem("jwt", response.token);
                localStorage.setItem("user", JSON.stringify(response.user));
                window.location.href = './home.html';
            }
        }
    } catch (error) {
        console.error('Error en la petición:', error);
    }
}