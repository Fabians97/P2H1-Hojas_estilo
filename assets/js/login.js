document.addEventListener('DOMContentLoaded', () => {
    // Obtener el formulario de inicio de sesión
    const form = document.querySelector('#login-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Obtener los valores de los campos de inicio de sesión
        const emailInput = document.querySelector('#login-email');
        const passwordInput = document.querySelector('#login-password');
        const email = emailInput.value;
        const password = passwordInput.value;

        const loginData = {
            email: email,
            password: password,
        };

        try {
            const response = await loginUser(loginData);
            console.log(response); // Mostrar la respuesta en la consola (puedes ajustar esto según tus necesidades)
            // Aquí puedes redirigir al usuario a la página de inicio o realizar otras acciones después de iniciar sesión exitosamente
            window.location.href = 'index.html'; // Redirigir al usuario a la página de inicio (ajusta la URL según tu configuración)
        } catch (error) {
            console.error(error); // Manejar el error de alguna manera (puedes ajustar esto según tus necesidades)
            alert('Error al iniciar sesión. Verifica tus credenciales.');
        }
    });

    async function loginUser(loginData) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api-p3h1-javascript.onrender.com/users/login'); // Ajusta la URL según tu configuración de rutas en el servidor

            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function () {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                    alert('Inicio de sesión exitoso!');

                    // Guardar el token en el almacenamiento local
                    const token = response.token;
                    localStorage.setItem('token', token);
                } else if (xhr.status === 401) {
                    alert('Contraseña incorrecta. Verifica tus credenciales.');
                } else if (xhr.status === 404) {
                    alert('Usuario no encontrado. Verifica tus credenciales.');
                } else {
                    reject(xhr.statusText);
                }
            };


            xhr.onerror = function () {
                reject(xhr.statusText);
                alert('Hubo un error al iniciar sesión!');
            };

            xhr.send(JSON.stringify(loginData));
        });
    }
});
