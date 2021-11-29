function fechayhora(){

    let fecha = new Date();
    // console.log(fecha.getMonth());  // 0 - 11 , 0 -> enero
    // console.log(fecha.getDay()); // 1 a 31
    // console.log(fecha.getDate()); // 0 al 6 , 0 -> domingo
    
    let semanas = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    
    let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    let fechaReloj = document.getElementById("fecha");
    // console.log(fechaReloj)
    fechaReloj.innerHTML = `${semanas[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()} `;
    
    // creo las variables para trabajar la hora
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if(hora < 10 ){
        hora = '0' + hora;
    }

    if (minutos < 10 ){
        minutos = '0' + minutos;        
    }

    if (segundos < 10 ){ 
        segundos = '0' + segundos;
    }
    
    let horaReloj = document.getElementById("hora");
    horaReloj.innerHTML = `${hora}:${minutos}:${segundos}`;
}

function azulbtn(){
    let vAzul = document.getElementById("titulo");
    vAzul.className = "text-center azul";
}

function rosabtn(){
    let vRosa = document.getElementById("titulo");
    vRosa.className = "text-center rosa";
}

function verdebtn(){
    let vVerd = document.getElementById("titulo");
    vVerd.className = "text-center verde";
}


// invocar el reloj cada segundos
setInterval(fechayhora, 1000);
