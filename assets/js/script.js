// Función para solicitar el número y mostrar las tablas de multiplicar y factoriales
const mostrarTablasYFactoriales = () => {
    let numero = parseInt(prompt("Ingrese un número entre 1 y 20:"));
  
    // Validar si el número está dentro del rango
    if (numero >= 1 && numero <= 20) {
      // Mostrar tablas de multiplicar
      for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= numero; j++) {
          console.log(`${j} x ${i} = ${i*j}`);
        }
      }
  
      // Calcular y mostrar factoriales
      for (let i = 1; i <= numero; i++) {
        let factorial = 1;
        for (let j = 1; j <= i; j++) {
          factorial *= j;
        }
        console.log(`Factorial de ${i} es: ${factorial}`);
      }
    } else {
      console.log("Número fuera del rango.");
    }
  };
  
  // Llamar a la función al cargar la página
  mostrarTablasYFactoriales();
  