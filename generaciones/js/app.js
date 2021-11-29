class Persona {
  constructor() {
    this.parNombre;
    this.parEdad;
    this.parDni;
    this.parSexo;
    this.parPeso;
    this.parAlt;
    this.parFechaNac;
  }

  setParNombre(nombre) {
    this.parNombre = nombre;
  }

  getParnombre() {
    return this.parNombre;
  }

  setEdadIn(edad) {
    this.parEdad = edad;
  }
  setDniIn(dni) {
    this.parDni = dni;
  }
  setSexoIn(sexo) {
    this.parSexo = sexo;
  }
  setPesoIn(peso) {
    this.parPeso = peso;
  }
  setAlturaIn(altura) {
    this.parAlt = altura;
  }
  setFechaNacIn(fechaNac) {
    this.parFechaNac = fechaNac;
  }

  mostrarGeneracion() {
    if (this.parFechaNac >= 1930 && this.parFechaNac <= 1948) {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la generacion "Silent Generation <i>(Los niños de la posguerra)</i>" y su rasgo caracteristico es la <i>Austeridad</i>`
      );
    } else if (this.parFechaNac >= 1949 && this.parFechaNac <= 1968) {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la generacion "Baby Boom" y su rasgo caracteristico es la <i>Ambicion</i>`
      );
    } else if (this.parFechaNac >= 1969 && this.parFechaNac <= 1980) {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la <i>Generacion X </i> y su rasgo caracteristico es la <i>Obsesion por el exito </i>`
      );
    } else if (this.parFechaNac >= 1981 && this.parFechaNac <= 1993) {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la <i>Generacion Y, Millennials </i> y su rasgo caracteristico es la <i>Frustracion</i>`
      );
    } else {
      document.write(
        `El usuario : <b>${this.parNombre}</b> , pertenece a la a la <i>Generacion Z </i> y su rasgo caracteristico es la <i>Irreverencia</i>`
      );
    }
  }

  esMayorDeEdad() {
    if (this.parEdad >= 18) {
      document.write(`<br>Es mayor de edad.`);
    } else {
      document.write(`<br>No es mayor de edad.`);
    }
  }
  mostrarDatos() {
    document.write(`<br> <b>DATOS DEL USUARIO </b>
      <br><ins>Nombre:</ins> ${this.parNombre}
      <br><ins>Edad:</ins> ${this.parEdad} 
      <br><ins>Fecha Nacimiento:</ins> ${this.parFechaNac} 
      <br><ins>DNI:</ins> ${this.parDni} 
      <br><ins>Sexo:</ins> ${this.parSexo} 
      <br><ins>Peso:</ins> ${this.parPeso}.kg 
      <br><ins>Altura:</ins>${this.parAlt}`);
  }
}

function CrearUsuario() {
    let contPadre = document.querySelector("#containerPadre");
    let createUser = document.querySelector("#btnCrear");
    if (btnCrear.innerHTML == 'Crear Usuario') {
        
        alert("Bienvenido");
        let usuario = new Persona();
        
        usuario.setParNombre(prompt("Ingrese el nombre del usuario"));
        console.log(usuario.getParnombre());
        usuario.setEdadIn(parseInt(prompt("Ingrese la edad")));
        usuario.setDniIn(parseInt(prompt("Ingrese el DNI")));
        usuario.setSexoIn(prompt("Ingrese el Sexo (H o M)"));
        usuario.setPesoIn(parseInt(prompt("Ingrese el peso")));
        usuario.setFechaNacIn(prompt("Ingrese el año de nacimiento"));
        usuario.setAlturaIn(prompt("Ingrese la altura"));
        
        usuario.mostrarGeneracion();
        usuario.esMayorDeEdad();
        usuario.mostrarDatos();
    }
    
}




