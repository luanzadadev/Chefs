
const users = [
    { email: "licinha@chef.com", senha: "1234" },
    { email: "user@chef.com", senha: "abcd" }
];


function validarLogin(event) {
    event.preventDefault(); 

    const email = document.querySelector('input[name="email"]').value;
    const senha = document.querySelector('input[name="senha"]').value;

    const user = users.find(user => user.email === email && user.senha === senha);

    if (user) {
        alert("Login bem-sucedido!");
       
        window.location.href = "index3.html";
    } else {
        alert("Email ou senha inválidos!");
    }
}


document.querySelector("form").addEventListener("submit", validarLogin);
