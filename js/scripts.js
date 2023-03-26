const senha = document.querySelector('#password');

function togglePassword () {
    document.querySelectorAll('.eye').forEach(function(eye) {
        eye.classList.toggle('hide');
    })

    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text');
    } else {
        senha.setAttribute('type', 'password');
    }

}