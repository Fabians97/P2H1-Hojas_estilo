document.addEventListener('DOMContentLoaded', () => {
    // Obtener el token (puedes cambiar esto por tu lógica para obtener el token)
    const token = localStorage.getItem('token');

    // Obtener los elementos
    const textAccountElement = document.getElementById('text-account');
    const textInitElement = document.getElementById('text-init');
    const loginAElement = document.getElementById('login-a');
    const cerrarAElement = document.getElementById('cerrar-a');
    const verUsersAElement = document.getElementById('ver-users-a');

    // Verificar si hay un token
    if (token) {
        // Mostrar elementos
        textAccountElement.style.display = 'block';
        cerrarAElement.style.display = 'block';
        verUsersAElement.style.display = 'block';

        textInitElement.style.display = 'none';
        loginAElement.style.display = 'none';
    } else {

        textInitElement.style.display = 'block';
        loginAElement.style.display = 'block';
        // Ocultar elementos
        textAccountElement.style.display = 'none';
        cerrarAElement.style.display = 'none';
        verUsersAElement.style.display = 'none';
    }
    cerrarAElement.addEventListener('click', () => {
        localStorage.removeItem('token');
        location.reload();
    });
})

