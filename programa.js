class Vehiculos {

    constructor(){
        this.vehiculo = new Array();
    }

    cargarVehiculos(){
        this.vehiculo.push({'Marca: ': 'Peugeot', 'Modelo: ': 206, 'Puertas: ': 4, 'Precio: ': 200000});
        this.vehiculo.push({'Marca: ': 'Honda ', 'Modelo: ': 'Titan', 'Cilindrada: ': 125, 'Precio: ': 60000});
        this.vehiculo.push({'Marca: ': 'Peugeot', 'Modelo: ': 208, 'Puertas: ': 5, 'Precio: ': 250000});
        this.vehiculo.push({'Marca: ': 'Yamaha ', 'Modelo: ': 'YBR', 'Cilindrada: ': 160, 'Precio: ': 80000.5});
    }

    busquedaPorPrecio(){

        let vehiculo;

    }

    consologuear(){
        let str = '';

        for(let i=0; i<this.vehiculo.length;i++){
            for(let campo in vehiculo){
                str += campo;
            }
        }

        console.log(str);
    }


}

function iniciarEjercicio(){
    cargarVehiculos()
    consologuear()
}

iniciarEjercicio();











class Vehiculos {
  
  constructor() {
    this.vehiculos = new Array(); // Creo un Array, donde se guardarán todos los objetos vehículos.
  }

  cargarDatos() {
    /* Método que carga la lista de vehículos en el array creado 
    por el constructor de la clase Vehículos */
    this.vehiculos.push({'marca': 'peugeot', 'modelo': 206, 'puertas': 4, 'precio': 200000});
    this.vehiculos.push({'marca': 'honda', 'modelo': 'titan', 'cilindrada': '125cc', 'precio': 60000});
    this.vehiculos.push({'marca': 'peugeot', 'modelo': 208, 'puertas': 5, 'precio': 250000});
    this.vehiculos.push({'marca': 'yamaha', 'modelo': 'YBR', 'cilindrada': '160cc', 'precio': 80500.5});
  }


  buscarPorPrecio(orden) {

    // Método que devuelve el vehículo más caro o barato junto con la Marca y el Modelo
    
    let vehiculo; // Variable donde se guardará el objeto vehículo buscado.

      if(orden === "caro") {   
        for(let v of this.vehiculos)
          if(vehiculo === undefined || v.precio > vehiculo.precio) vehiculo = v;           
      }else {
        for(let v of this.vehiculos)
          if(vehiculo === undefined || v.precio < vehiculo.precio) vehiculo = v;           
      }   
        
      console.log(`Vehículo más ${orden}: ${this.capitalizar(vehiculo?.marca)} ${this.capitalizar(vehiculo?.modelo)}`);
    
  }

  buscarLetraEnModelo(letra) {

    /* Método que busca en todo el array vehículos sobre el campo 'modelo' una letra recibida como
    argumento */
    
    let vehiculo;                               

      letra = letra.trim().toLowerCase(); 

      for(let v of this.vehiculos) {
        let modelo = String(v.modelo).toLowerCase();  
        if(modelo.includes(letra)) vehiculo = v;
      }

      console.log(`Vehículo que contiene en el modelo la letra '${letra.toUpperCase()}': ${this.capitalizar(vehiculo?.marca)} ${this.capitalizar(vehiculo?.modelo)} \$${this.formatear(vehiculo?.precio)}`);
    
  }

  mostrarDatos(campos) {

    /* Método que muestra por consola el contenido del array 'vehículos', o algunos de sus campos
    según string recibido */
    
    let datos = "";   // String que devolverá formateado el contenido de todos los vehículos.
    
    if(campos === undefined) {  
      for(let v of this.vehiculos) {
        for(let p in v)
          p !== "precio" ? datos += `${this.capitalizar(p)}: ${this.capitalizar(v[p])} // `: datos += `${this.capitalizar(p)}: \$${this.formatear(v[p])}\n`;
      }
    }else {
      for(let v of this.vehiculos) {
        for(let campo of campos) {
          if(v.hasOwnProperty(campo)) {
            datos += `${this.capitalizar(v[campo])} `;
          }
        }
        datos += '\n';  
      }      
    }  
    
    console.log(datos);
  }  

  capitalizar(cadena) { 

    /* Método que recibe un string o número y devuelve un string equivalente pero capitalizado.
    Si se recibe un número, se lo parsea primero a string para continuar como tal */
    
    if(typeof cadena === "number") cadena = String(cadena);
    
    if(typeof cadena === "string") {  
      cadena = cadena.trim();
      return cadena[0].toUpperCase() + cadena.substring(1);
    }
    
  }
  
  formatear(precio) {

     /* Método que recibe un número (entero o float) y devuelve un string equivalente pero formateado
    con separador de miles y de decimales */

    return precio.toLocaleString("es-ES",  {style: 'decimal', minimumFractionDigits: 2});
    
  }

  ordenarPorPrecio(orden) {

     // Método que altera array de vehículos en un nuevo órden especificado por argumento

      orden === "mayor" ? this.vehiculos.sort((a, b) => b.precio-a.precio) : this.vehiculos.sort((a,b) => a.precio-b.precio);       
                     
    console.log('Vehículos ordenados por precio de mayor a menor:')
  }
}

function iniciar() {

  // Función que crea la clase Vehiculos y llama a los métodos.
  
    let vehiculo = new Vehiculos();
    vehiculo.cargarDatos();
    vehiculo.mostrarDatos();
    
    console.log("=============================");
    vehiculo.buscarPorPrecio("caro");
    vehiculo.buscarPorPrecio("barato");
    vehiculo.buscarLetraEnModelo("Y")

    console.log("=============================");
    vehiculo.ordenarPorPrecio("mayor");
    vehiculo.mostrarDatos(["marca", "modelo"]);
  
}

iniciar(); // Ejecutar ejercicio