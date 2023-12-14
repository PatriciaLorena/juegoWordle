let diccionario = ["APPLE","HOUSE","MOUSE","YOUTH","GRADE","DANCE"];
let palabra = getWord();
let intentos = 6;


//hay que usar awey y asing

function getWord(){
    let min = 0;
    let max = diccionario.length;
    let i = Math.floor(Math.random() * (max - min + 1)) + min;
   return diccionario[i];

}

const GRID = document.getElementById("grid")
const boton = document.getElementById("guess-button");
const INTENTO = leerIntento();

boton.addEventListener("click", ()=>{
    const INTENTO = leerIntento();
    //por cada letra en palabra
    const row = document.createElement("div");
    row.className = "row";
    
    for(const i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        SPAN.innerHTML = INTENTO[i]
        
        if(palabra[i]==INTENTO[i]){
            SPAN.style.backgroundColor = "green";
        }else if(palabra.includes(INTENTO[i])){
            SPAN.style.backgroundColor = "yellow";
        }else{
            SPAN.style.backgroundColor = "gray";
            
        }
        row.appendChild(SPAN);
    }
    GRID.appendChild(row);
    console.log(row)



    intentos--;
    if (INTENTO === palabra ) {
        terminar("GANASTE😀")
        return
    }
    if (!intentos){
        terminar("PERDISTE😖")
    }
});

function terminar(mensaje){
    const RESULTADO =   document.getElementById('guesses')
    RESULTADO.innerHTML = `<h1>${mensaje}</h1>`
    boton.disabled = true;
    
}

function leerIntento(){
    const input = document.getElementById("guess-input");
    return input.value.toUpperCase();
}


//para validar ingresar datos


function validarInput(input) {
    // Obtener el valor actual del campo de texto
    let valor = input.value;
  
    // Quitar caracteres no alfabéticos
    valor = valor.replace(/[^A-Za-z]/g, '');
  
    // Limitar la longitud a 5 caracteres
    valor = valor.slice(0, 5);
  
    // Actualizar el valor del campo de texto
    input.value = valor;
  }




