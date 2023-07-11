document.addEventListener('DOMContentLoaded', () => {
  const editForm = document.getElementsByTagName('form')[0];
  const editUserInput = document.getElementById('edit-user');
  const editEmailInput = document.getElementById('edit-email');
  const editPasswordInput = document.getElementById('edit-password');
  const editRoleInput = document.getElementById('edit-role');

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('id');

  // Obtener los datos del usuario al cargar la página
  getUserData(userId)
    .then((userData) => {
      populateForm(userData);
    })
    .catch((error) => {
      console.error('Error retrieving user data:', error);
    });

  // Escuchar el evento de envío del formulario
  editForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const updatedUserData = {
      id: userId,
      name: editUserInput.value,
      email: editEmailInput.value,
      password: editPasswordInput.value,
      role: editRoleInput.value,
    };
    updateUser(updatedUserData)
      .then(() => {
        alert('Usuario actualizado correctamente');
        window.location.href = 'ver-usuarios.html';
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        alert('Error al actualizar el usuario');
      });
  });

  // Función para obtener los datos del usuario
  function getUserData(userId) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api-p3h1-javascript.onrender.com/users/' + userId);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const userData = JSON.parse(xhr.responseText);
            resolve(userData);
          } else {
            reject(xhr.status);
          }
        }
      };

      xhr.send();
    });
  }

  // Función para llenar el formulario con los datos del usuario
  function populateForm(userData) {
    editUserInput.value = userData.name;
    editEmailInput.value = userData.email;
    editPasswordInput.value = userData.password;
    editRoleInput.value = userData.role;
  }

  // Función para actualizar los datos del usuario
  function updateUser(userData) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', 'https://api-p3h1-javascript.onrender.com/users/' + userData.id);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            resolve();
          } else {
            reject(xhr.status);
          }
        }
      };

      xhr.send(JSON.stringify(userData));
    });
  }
});

