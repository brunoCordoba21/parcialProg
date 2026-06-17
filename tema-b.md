# Recuperación - Primer Parcial

**Materia:** Programación 3

---

## Versión B

### Ejercicio 1: Condicional anidado (segunda variante)

Crear un programa que reciba un `usuario` y una `contraseña`. Si el usuario es `admin` y la contraseña es `1234`, mostrar `Acceso admin`. Si el usuario es `invitado` y la contraseña es `0000`, mostrar `Acceso limitado`. En cualquier otro caso, mostrar `Acceso denegado`.

### Ejercicio 2: Array de objetos (segunda variante)

Crear un array `alumnos` con tres objetos (`nombre`, `nota`). Calcular el promedio de las notas y mostrar por consola `Promedio: X` y si el promedio es mayor o igual a 6 mostrar `Clase aprobada`, si no `Clase desaprobada`.

### Ejercicio 3: Manipulación del DOM (segunda variante)

Se entrega el siguiente HTML mínimo:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Recuperación B</title>
</head>
<body>
  <p id="texto">Texto a evaluar.</p>
  <input type="text" id="inputTexto" placeholder="Escribe aquí">
  <button id="btnEvaluar">Evaluar</button>
  <p id="resultado"></p>
</body>
</html>


Escribir el JavaScript necesario para que, al hacer clic en `btnEvaluar`, se muestre en `resultado` si la longitud del texto ingresado en `inputTexto` es par o impar (por ejemplo: `Longitud par` o `Longitud impar`).