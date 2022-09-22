const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");
const corpo = document.querySelector(".corpo");
const h2username = document.querySelector(".h2username");
const h2password = document.querySelector(".h2password");
const usuario_id = document.getElementById('usuario').id;
const senha_id = document.getElementById('senha').id;
const usuario_value = document.getElementById('usuario').value;
const senha_value = document.getElementById('senha').value;


function aumentaInput(){
    usuario.style.height = "20px";
    senha.style.height = "1px";
    h2username.style.fontSize = "15px";
    h2password.style.fontSize = "24px";
    h2username.style.color = "rgb(28, 211, 211)";
    h2password.style.color = "rgb(104, 104, 104)";
}
function aumentaInputSegundo(){
    senha.style.height = "20px";
    usuario.style.height = "1px";
    h2username.style.fontSize = "24px";
    h2password.style.fontSize = "15px";
    h2username.style.color = "rgb(104, 104, 104)";
    h2password.style.color = "rgb(28, 211, 211)";
    
 }

/*function consulta(){
    div = document.getElementById('usuario');
    console.log(div.value);
}

var el = document.querySelector('body');
 el.addEventListener('click', function(e) { 
        alert(e.target.id); });
*/

 //input.value