var palabraBuscar=document.getElementById("palabra");
var bBuscar=document.getElementById("bBuscar");
var bReset=document.getElementById("bReset");
var palabra;
var cajas;
var informacion;
var textoFinal;


bBuscar.addEventListener("click", buscar, false);
bReset.addEventListener("click", restablecer, false);

//Esta función busca la palabra que le ponemos en el input y la colorea de rojo. Si escribimos una segunda palabra, la primera seguirá marcada.
//La palabra a buscar tiene que estar escrita de la misma manera que aparece en el texto porque sino no la marca en rojo.
function buscar(){
    cajas=document.querySelectorAll("div");
    palabra=palabraBuscar.value;
       
    for(let i=0; i<cajas.length; i++){
        informacion=cajas[i].innerHTML;
        textoFinal=informacion.replaceAll(palabra, "<b style=color:red>"+palabra+"</b>");
        cajas[i].innerHTML=textoFinal;

    }
    
}
//Refresca la página
//Si no se quiere señalar ninguna palabra, damos al botón de restablecer que llama a esta función.
function restablecer(){
   location.reload();

}


