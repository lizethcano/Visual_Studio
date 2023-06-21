var calificacion =prompt("ingrese su calificacion");

if(calificacion>= 7 && calificacion<9){
    alert("aprobado")

}else if(calificacion>=9 && calificacion <=10 ){
    alert("felicitaciones promedio alto");

}else if(calificacion>=10){
    alert("solo se aceptan notas inferiores a 10");
}else{
    alert("reprobado")
}
