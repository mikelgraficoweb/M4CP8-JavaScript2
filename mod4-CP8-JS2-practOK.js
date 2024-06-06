/* ejecicio parte 1:
-Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry” 

*/

let miLista = new Array("velma", "exploradora", "jane", "john", "harry")

x = miLista.length
// for (inicializacion; condicion; incremento)
for (let i = 0; i < x; i++) {
  console.log(miLista[i]);
}


/* ejecicio parte 2:
-Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.

let miLista = ["velma", "exploradora", "jane", "john", "harry"]
*/

n = 0;
x = miLista.length
while (n < x) {
  console.log(miLista[n])
  n++;
}



/* ejecicio parte 3:
-Cree una función de flecha que devuelva "Hola mundo".
*/

holaMundo= () => {
  console.log("Hola mundo");
}
holaMundo();