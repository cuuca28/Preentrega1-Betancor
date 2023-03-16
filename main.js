let rta =""
do{
   
    let p1 = Number(prompt("Ingrese el puntaje de su primer parcial 0-40"))
    let p2 = Number(prompt("Ingrese el resultado de su segundo parcial 0-60"))


    function sumar(parcial1, parcial2)
    {
        let resultado;
        resultado = parcial1 + parcial2;
        return resultado;
    }

    const resultado = sumar(p1, p2)

    alert("Su puntaje total es de " +resultado);


    if (resultado >= 60){
        alert("Felicitaciones! Exoneraste el curso");    
    } 
    else if ((resultado < 60) && (resultado >= 25)) {
        alert("Aprobaste el curso. Éxitos en el examen");    
    }
    else{
         alert("Perdiste el curso. Debes recursar el próximo semestre")
    }
    rta = prompt("Desea saber si exoneró, aprobó o reporobó el curso? \n Presione 'ESC' para salir").toUpperCase()
} while (rta !="ESC")
