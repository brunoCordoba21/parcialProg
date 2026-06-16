# Recuperación - Primer Parcial

**Materia:** Programación 3

---

## Versión A

### Ejercicio 1: Condicional anidado (variante)

Crear un programa que reciba un `usuario` y una `contraseña`. Si el usuario es `admin` con contraseña `1234` O el usuario es `prof` con contraseña `abcd`, debe mostrar por consola `Acceso concedido`. En caso contrario, debe mostrar `Acceso denegado`.

### Ejercicio 2: Array de objetos (variante)

Crear un array llamado `alumnos` con tres objetos (propiedades `nombre` y `nota`). Mostrar por consola el nombre del alumno con la nota más baja.

### Ejercicio 3: Manipulación del DOM (variante)

Se entrega el siguiente HTML mínimo:

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Recuperación A</title>
</head>
<body>
  <p id="texto">Texto para contar palabras.</p>
  <input type="text" id="inputTexto" placeholder="Escribe una frase...">
  <p id="resultado">0 palabras</p>
</body>
</html>

Escribir el JavaScript necesario para que, en tiempo real (evento `input`), se muestre en el párrafo `resultado` la cantidad de palabras que el usuario escribe en `inputTexto`.