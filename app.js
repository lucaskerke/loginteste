const usuario = document.querySelector("#usuario");
const senha = document.querySelector("#senha");
const corpo = document.querySelector(".corpo");
const usuario_id = document.getElementById('usuario').id;
const senha_id = document.getElementById('senha').id;
const usuario_value = document.getElementById('usuario').value;
const senha_value = document.getElementById('senha').value;


function aumentaInput(){
    usuario.style.height = "20px";
    senha.style.height = "1px";
}
function aumentaInputSegundo(){
    senha.style.height = "20px";
    usuario.style.height = "1px";
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