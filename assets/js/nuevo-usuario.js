document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#register-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nameInput = document.querySelector('#register-name');
    const passwordInput = document.querySelector('#register-password');
    const emailInput = document.querySelector('#register-email');

    const name = nameInput.value;
    const password = passwordInput.value;
    const email = emailInput.value;

    const userData = {
      name: name,
      password: password,
      email: email
    };

    try {
      const response = await createUser(userData);
      console.log(response); // Mostrar la respuesta en la consola (puedes ajustar esto según tus necesidades)
      // Aquí puedes redirigir al usuario a otra página o realizar otras acciones después de crear el usuario exitosamente
    } catch (error) {
      console.error(error); // Manejar el error de alguna manera (puedes ajustar esto según tus necesidades)
    }
  });

  async function createUser(userData) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api-p3h1-javascript.onrender.com/users'); // Ajusta la URL según tu configuración de rutas en el servidor

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = function () {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
          alert('Registro con éxito!');
          window.location.href = 'ver-usuarios.html';
        } else if (xhr.status === 400) {
          alert('Correo ya en uso.');
        } else {
          reject(xhr.statusText);
        }
      };


      xhr.onerror = function () {
        reject(xhr.statusText);
        alert('Hubo un error al insertar el usuario!');
      };

      xhr.send(JSON.stringify(userData));
    });
  }
});
