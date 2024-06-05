/* ejecicio 1ºparte:
-Cree un bucle for en JS que imprima cada nombr"e en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry” 
*/

var miLista = new Array("velma", "exploradora", "jane", "john", "harry")
 
miLista.forEach(function(i){
});
console.log(miLista)


/* ejecicio 2ºparte:
-Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.
*/

var miLista = ["velma", "exploradora", "jane", "john", "harry"]

n = 0;
x = 0;
while (n < 5) {
  n++;
  x += n;
}
console.log(miLista)

/* ejecicio 3ºparte:
-Cree una función de flecha que devuelva "Hola mundo".
*/

holaMundo= () => {
  console.log("Hola mundo");
}
holaMundo();
