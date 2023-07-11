document.addEventListener('DOMContentLoaded', () => {
    const usersTableBody = document.getElementById('users-table-body');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api-p3h1-javascript.onrender.com/users');

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const users = JSON.parse(xhr.responseText);
                renderUsersTable(users);
            } else {
                console.error('Error retrieving users:', xhr.status);
            }
        }
    };

    xhr.send();

    function renderUsersTable(users) {
        usersTableBody.innerHTML = '';

        users.forEach((user) => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = user.id;
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = user.name;
            row.appendChild(nameCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            row.appendChild(emailCell);

            const passwordCell = document.createElement('td');
            passwordCell.textContent = user.password;
            row.appendChild(passwordCell);

            const roleCell = document.createElement('td');
            roleCell.textContent = user.role;
            row.appendChild(roleCell);

            const actionsCell = document.createElement('td');
            const actionsButtons = document.createElement('div');
            actionsButtons.className = 'actions-buttons';

            const editButton = document.createElement('button');
            const editIcon = document.createElement('i');
            editIcon.className = 'fas fa-edit';
            editButton.appendChild(editIcon);
            editButton.className = 'edit';
            actionsButtons.appendChild(editButton);

            editButton.addEventListener('click', () => {
                redirectToEditPage(user.id);
            });

            const deleteButton = document.createElement('button');
            const deleteIcon = document.createElement('i');
            deleteIcon.className = 'fas fa-trash-alt';
            deleteButton.appendChild(deleteIcon);
            deleteButton.className = 'delete';
            actionsButtons.appendChild(deleteButton);

            deleteButton.addEventListener('click', () => {
                const confirmed = confirm('¿Estás seguro de que deseas borrar este usuario?');
                if (confirmed) {
                    deleteUserData(user.id);
                }
            });

            actionsCell.appendChild(actionsButtons);
            row.appendChild(actionsCell);

            usersTableBody.appendChild(row);
        });
    }

    function deleteUserData(userId) {
        const deleteXhr = new XMLHttpRequest();
        deleteXhr.open('DELETE', `https://api-p3h1-javascript.onrender.com/users/${userId}`);

        deleteXhr.onreadystatechange = () => {
            if (deleteXhr.readyState === XMLHttpRequest.DONE) {
                if (deleteXhr.status === 200) {
                    alert('Usuario borrado con exito.');
                    location.reload();
                } else {
                    console.error('Error deleting user:', deleteXhr.status);
                }
            }
        };

        deleteXhr.send();
    }

    function redirectToEditPage(userId) {
        window.location.href = `editar-usuario.html?id=${userId}`;
    }
});
