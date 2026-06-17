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

if (usuarios === "admin" && contrasenas === "1234") {
    resultado.innerText = (`Acceso usted es ${usuarios}`)

} else if (usuarios === "invitado" && contrasenas === "0000") {
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
];

let suma = 0;

for (let i = 0; i < alumnos.length; i++) {
    let alumno = alumnos[i];
    suma += alumno.nota;
}

let promedio = suma / alumnos.length;

console.log(`Promedio: ${promedio}`);

if (promedio >= 6) {
    console.log("Clase aprobada");
} else {
    console.log("Clase desaprobada");
}





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








