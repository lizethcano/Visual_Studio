var ladoA =prompt("ingrese el lado A");
var ladoB =prompt("ingrese el lado B");
var ladoC =prompt("ingrese el lado C");

if(ladoA ===ladoB && ladoB ==ladoC){
    document.write("Triangulo equilatero ya tiene todos sus lados iguales."); 

}else if(ladoA === ladoB || ladoB === ladoC || ladoA == ladoC){
     document.write("Triangulo isósceles");

}else{
    document.write("Triangulo escaleno");
}

