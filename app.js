//Ejercicio 1

/*

let usuario = document.getElementById("usuario")
let contrasenas = document.getElementById("contrasena")
let boton = document.getElementById("btnAcceder");
let resultado = document.getElementById("resultadoAcceso");
boton.addEventListener("click", function()
{
    let usuarios = usuario.value;
    let contrasenas = contrasena.value;

if (usuario === "admin" && contrasena === "1234") {
    resultado.innerText = (`Acceso usted es ${usuario}`)

} else if (usuario === "invitado" && contrasena === "0000") {
 resultado.innerText =(`Acceso Limitado`);

} else {
   resultado.innerText =("Acceso Denegado")
};
})

*/





// punto 2 parcial

let alumnos = [
    { nombre: "Bruno", nota: 10 },
    { nombre: "Brenda", nota: 9 },
    { nombre: "Matias", nota: 5 }

]
let notaBaja = alumnos[0]
for (let i = 1; i < alumnos.length; i++) {

    if (alumnos[i].nota < notaBaja.nota) {
        notaBaja = alumnos[i]
    }
}
console.log();
(`el alumno con nota mas baja es ${notaBaja.nombre} con ${notaBaja.nota}`);





/*
let texto = document.getElementById("inputTexto");
let boton = document.getElementById("btnEvaluar");
let resultado = document.getElementById("resultado");
boton.addEventListener("click", function()
{
let textoIngresado = texto.value;
let longitudTexto = textoIngresado.length;
if (longitudTexto % 2 === 0)
    {
        resultado.innerHTML=(`${longitudTexto} <br> la longitud del texto es par`)
    }else
        {
       resultado.innerHTML=(`${longitudTexto} <br> la longitud del texto es impar`)

    }

});;
*/








